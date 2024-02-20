const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = 4432;

app.use(express.json());
const hotelRoute = require('./routes/hotelRoute');