require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser=require('body-parser')
const nodemailer = require('nodemailer');
const sendFeedback = require("./utils/sendFeedback");
const sendEmail = require("./utils/sendEmail");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.post('/send_email', async (req, res) => {
    try {
        await sendEmail(req.body)
        res.status(200).json({success: true, message: 'Email Sent!'})
    } catch (error) {
        res.status(500).json(error.message)
    }
})
app.post('/send_feedback', async (req, res) => {
    try {
        await sendFeedback(req.body)
        res.status(200).json({success:true,message:'Email Sent!'})
    }
    catch (error){
        res.status(500).json(error.message)
    }
})

app.listen(port, () => {
    console.log(`server start at port no: ${port}`)
})