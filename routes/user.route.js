const express = require('express');
const route = express.Router()

const middleware = require('../middleware/middleware');

const { connectDB } = require("../database/connectDB");
const collectionName = "usersCollection";

async function main(username){
    const db = await connectDB();
    const collection = db.collection(collectionName);
    const user = collection.findOne({"username":username});
    return user;
}

route.post("/", middleware ,async(req, res) => {
    console.log(req.body);
    let userDetails = await main(req.body.username);
    console.log(userDetails);
    res.send(userDetails);
})

module.exports = route;

/* 

{
    "result": "Login Success!",
    "username": "Teja",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTIxNWI1ZWU3ODAyZGFhZmQwNTM2ZiIsImlhdCI6MTcxNjY1ODg5MCwiZXhwIjoxNzE2NjYyNDkwfQ.wHMtaaVxHR7KoJg5DnNPWp23vTHqnTJkxei8P7P6Xc0"
}

*/