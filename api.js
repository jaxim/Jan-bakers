import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const port = 3001;
const SECRET_KEY = "your_secret_key";
const SERVERURL =
  "mongodb+srv://jasim:GikjDNGAH6Ir2eQI@jan-balers.u9ivr.mongodb.net/?retryWrites=true&w=majority&appName=Jan-balers";
const itemsDbName = "products";
const usersDbName = "login";

// Initialize MongoDB Client
const client = new MongoClient(SERVERURL);

app.use(cors());
app.use(express.json());

// Connect to MongoDB once and reuse the client
async function connectDB() {
  try {
    if (!client.topology || !client.topology.isConnected()) {
      await client.connect();
      console.log("✅ Connected to MongoDB");
    }
    return client;
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
    throw err;
  }
}

// 📌 Items API (Pagination & Search)
app.get("/api/items", async (req, res) => {
  try {
    const dbClient = await connectDB();
    const db = dbClient.db(itemsDbName);
    const collection = db.collection("items");

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const searchQuery = req.query.search || "";

    const query = searchQuery
      ? { ITEMNAME: { $regex: searchQuery, $options: "i" } }
      : {};

    const data = await collection.find(query).skip(skip).limit(limit).toArray();
    const totalItems = await collection.countDocuments(query);

    res.json({ data, totalItems, page, limit });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching items" });
  }
});

// 📌 Search API
app.get("/api/search", async (req, res) => {
  try {
    const dbClient = await connectDB();
    const db = dbClient.db(itemsDbName);
    const collection = db.collection("items");

    const searchQuery = req.query.query || "";
    const results = await collection
      .find({ ITEMNAME: { $regex: searchQuery, $options: "i" } })
      .toArray();

    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching search results" });
  }
});

// 📌 User Registration API
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const dbClient = await connectDB();
    const db = dbClient.db(usersDbName);
    const collection = db.collection("users");

    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await collection.insertOne({ name, email, password: hashedPassword });

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "7d" });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error registering user" });
  }
});

// 📌 User Login API
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const dbClient = await connectDB();
    const db = dbClient.db(usersDbName);
    const collection = db.collection("users");

    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "7d" });
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error logging in user" });
  }
});

// 📌 Start Server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}/`);
});
