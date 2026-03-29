import express from "express";

const app = express();
app.use(express.json());

// HEALTH ROUTE
app.get("/", (req, res) => {
  res.status(200).send("Server is running 🚀");
});

// TEST API
app.get("/api/test", (req, res) => {
  res.json({ success: true });
});

// 🔴 FIXED PORT
const PORT = Number(process.env.PORT) || 8080;

// 🔴 FIXED LISTEN
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});