const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const signup = require("./routes/signup.route");

app.use(cors(
    {
        origin : "*"
    }
));
app.use(express.json());

// *-*-*-*-*- Routes Configuration -*-*-*-*-*-*

app.use("/signup", signup);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});