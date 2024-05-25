const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");

dotenv.config();

const uri = process.env.MONGO_ATLAS_URI;
console.log(uri)
const client = new MongoClient(uri);

const dbName = "appUsers";

async function connectDB() {
    await client.connect();
    const db = client.db(dbName);
    console.log("Connected to " + dbName);
    return db;
}

exports.connectDB = connectDB;
