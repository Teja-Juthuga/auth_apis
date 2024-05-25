const jwt = require("jsonwebtoken");

require('dotenv').config();

const secretKey = process.env.JWT_SECRET;
const authenticateToken = (req,res,next) => {
    let jwtToken;
    const authHeader = req.headers["authorization"];
    if (authHeader !== undefined) {
        jwtToken = authHeader.split(" ")[1];
    }

    if (jwtToken === undefined) {
        res.status(401);
        res.send("Invalid Access Token");
      } else {
        jwt.verify(jwtToken, secretKey, async (error, payload) => {
            if (error) {
              res.send("Invalid Access Token");
            } else {
                next();
            }
        })

    // console.log("I am from authenticate token middleware");
    }
}
module.exports = authenticateToken;