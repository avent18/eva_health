import express from "express";

const app = express();

app.use(express.json());

app.get("/api/v1/health", (_req, res) => {
  res.json({
    success: true,
    message: "EVE Healthcare API is running",
  });
});

export default app;