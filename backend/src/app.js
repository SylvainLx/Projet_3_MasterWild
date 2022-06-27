const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

// API routes
const router = express.Router();

const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");

app.use("/api", router);

router.use("/admin", adminRoutes);
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

// Redirect all requests to the REACT app
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
  );
});
// ready to export
module.exports = app;
