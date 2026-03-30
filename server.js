console.log("NEW BUILD V2");
import express from "express";

const app = express();
app.use(express.json());

// HEALTH
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// TEST
app.get("/api/test", (req, res) => {
  res.json({ success: true });
});

// FINAL CHAT ROUTE (ONLY ONE — NO CONFUSION)
app.post("/api/chat", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  return res.json({
    reply: `You said: ${message}`,
  });
});

// PORT (VERY IMPORTANT FOR CLOUD RUN)
const PORT = process.env.PORT || 8080;

// LISTEN (VERY IMPORTANT)
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
