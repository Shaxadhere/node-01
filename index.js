//imports
const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")
require("dotenv").config()

//creating app
const app = express();


//connecting to db
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Database connected");
    })
    .catch((err) => {
        console.log(err);
    });

//attatching middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//attatching routes
app.use("/api/category", require("./routes/category"))

//listening to server
app.listen(5000, () => {
    console.log("Server is running on port 5000")
})