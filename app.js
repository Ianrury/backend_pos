const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const transactionRoutes = require("./routes/transactionRoutes");
const customerRoutes = require("./routes/customerRoutes");


app.use("/api/transactions", transactionRoutes); // prefix URL
app.use('/api/customers', customerRoutes);

module.exports = app;
