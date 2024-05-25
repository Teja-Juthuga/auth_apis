const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const test = require("./routes/test.route");
const signup = require("./routes/signup.route");
const login = require("./routes/login.route");
const user = require("./routes/user.route");

app.use(cors(
    {
        origin : "*"
    }
));
app.use(express.json());

// *-*-*-*-*- Routes Configuration -*-*-*-*-*-*

app.use("/", test);
app.use("/signup", signup);
app.use("/login", login);
app.use("/user", user); 

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});