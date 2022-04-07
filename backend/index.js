const express = require('express');
const morgan = require('morgan');
const router = require('./route');
const connectDB = require('./connectDB');

const app = express()
const port = process.env.PORT || '5000'
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// Load Routes
app.use("/api", router);

app.get("/", (req, res) => res.send("Hello"));
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})