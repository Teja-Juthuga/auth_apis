const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require('dotenv').config();

const secretKey = process.env.JWT_SECRET;


const { connectDB } = require("../database/connectDB");
const collectionName = "usersCollection";

const main = async (userDetails) => {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    const user = await collection.find({ emailid: userDetails.emailid }).toArray();
    if (user[0] == undefined) {
        return {result : "Invaild User"};
    } else {
        let payload = {
            id : user[0]['_id']
        }

        const isPasswordMatched = await bcrypt.compare(userDetails.password, user[0]['password']);
        if (isPasswordMatched === true) {
            return new Promise((resolve, reject) => {
                jwt.sign(payload, secretKey, { expiresIn: '1h' }, (err, token) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve({ result : "Login Success!", username : user[0]['username'] ,token: token });
                    }
                });
            });
        } else {
            return {result : "Invalid Password"};
        }
    }
};

router.post("/", async (req, res) => {
    try {
        const result = await main(req.body);
        res.send(result);
    } catch (err) {
        console.log("+++Error:- " + err);
        res.send("Error: " + err);
    }
});

module.exports = router;
