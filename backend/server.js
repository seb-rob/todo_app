const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const mongoConnect = require("./config/db");
const routes = require("./route/todo")

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoConnect();

app.get("/", (req, res) => {
    res.status(200).json({message: "hello from server"});
})

app.use("/api/todo", routes)

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`server is up and running on port ${process.env.BACKEND_PORT}`);
})