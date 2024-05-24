const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();


app.get("/" , (request,response) => {
    response.send("Hello World!");

})

app.listen(process.env.PORT, () => console.log(`Server is running at http://localhost:${process.env.PORT}`));