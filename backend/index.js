const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config();
require("./Models/db");

const router = require('./Routes/AuthRouter');

const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(cors());

// test route
app.get("/ping", (req, res) => {
    res.send("PONG");
});

// routes
app.use('/auth', router);


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});