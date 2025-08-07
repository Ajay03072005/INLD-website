const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("✅ INLD API is running.");
});

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ DB Error:", err));

// Join Schema + API
const joinSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  address: String,
  message: String
}, { timestamps: true });

const Join = mongoose.model("Join", joinSchema);

app.post("/api/join", async (req, res) => {
  try {
    const { fullName, phone, email, address, message } = req.body;
    if (!fullName || !phone) {
      return res.status(400).json({ error: "Full name and phone are required." });
    }
    const joinData = new Join({ fullName, phone, email, address, message });
    await joinData.save();
    res.status(201).json({ message: "Join form submitted successfully!", data: joinData });
  } catch (err) {
    res.status(500).json({ error: "Server error while submitting join form." });
  }
});

// Contact Schema + API
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: String,
  message: { type: String, required: true }
}, { timestamps: true });

const Contact = mongoose.model("Contact", contactSchema);

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }
    const contactData = new Contact({ name, email, subject, message });
    await contactData.save();
    res.status(201).json({ message: "Contact form submitted successfully!", data: contactData });
  } catch (err) {
    res.status(500).json({ error: "Server error while submitting contact form." });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
