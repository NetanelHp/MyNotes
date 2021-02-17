const express = require("express");
const app = express();
const PORT = 4000;
const connectDB = require("./config/db");
const notesRoutes = require("./routes/notesRoutes");
const cors = require("cors");

//Configs
require("dotenv").config({ path: "config/.env" });
app.use(express.json());
app.use(cors());

//Connect DB
connectDB();

//Routes
app.use("/", notesRoutes);

//listen
app.listen(
  process.env.PORT || PORT,
  console.log(`App is Running on port ${PORT}`)
);
