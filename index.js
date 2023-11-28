const express = require('express');
const cors = require('cors');
require('dotenv').config()
const prot = process.env.PROT || 5000;

const app = express();


// middleware
app.use(cors());
app.use(express.json());



app.get('/', (req,res)=>{
    res.send('hostel  management is running')
})



app.listen(prot, ()=>{
    console.log(`hostel management is running on prot ${prot}`);
})