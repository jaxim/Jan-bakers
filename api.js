import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
const port = 3001;

app.use(cors()); // Enable CORS for all routes

const SERVERURL =
  "mongodb+srv://jasim:GikjDNGAH6Ir2eQI@jan-balers.u9ivr.mongodb.net/?retryWrites=true&w=majority&appName=Jan-balers";
const dbName = "products";

app.get("/api/items", async (req, res) => {
  const client = new MongoClient(SERVERURL);
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);
    const collection = db.collection("items");

    const data = await collection.find({}).skip(skip).limit(limit).toArray();
    const totalItems = await collection.countDocuments();
    res.json({ data, totalItems, page, limit });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching data");
  } finally {
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
