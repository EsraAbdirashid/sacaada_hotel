const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = 7722;

app.use(express.json());
const hotelRoute = require('./routes/hotelRoute');


app.use('/api/hotel/',hotelRoute)







// server configuration
app.listen(port,()=>{
        console.log(`http://localhost:${port}`)
    })