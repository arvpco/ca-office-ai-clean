import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  res.json({ reply: "Test working: " + message });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
