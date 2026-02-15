require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("Food Order API Running...");
});


if (process.env.NODE_ENV !== "test") {
  connectDB();

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;