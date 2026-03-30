import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
app.use(express.json());

// Health route (MUST be first)
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Chat API
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // 🔴 Move inside route (important)
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(message);
    const response = result.response.text();

    res.json({ reply: response });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).json({ error: "AI failed" });
  }
});

// Port
const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
