const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

const dbName = "eCommerceApp";

async function connectDB() {
    await client.connect();
    const db = client.db(dbName);
    console.log("Connected to " + dbName);
    return db
}

exports.connectDB = connectDB;