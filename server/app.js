const express = require("express");
require("dotenv").config();
const app = express();
require("./config/db");
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
