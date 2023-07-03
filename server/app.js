const {response} = require('express');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = 5000;

const email='info@gashienterprise.com';
const app_pass='npkyiqqjbzykjstd';

app.use(cors())
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

function sendEmail({recipient_email, customerName,customerNumber, service, rooms, flooring, message}) {
    return new Promise((resolve, reject) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: app_pass
            },
        });
        const mail_configs = {
            from: email,
            to: email,
            subject: service.join(' | '),
            html: `<!DOCTYPE html>
                        <html>
                          <head>
                            <meta charset="utf-8" />
                            <title>Contact Form Submission</title>
                          </head>
                          <body>
                            <h3>New client</h3>
                            <p><strong>Name:</strong> ${customerName}</p>
                            <p><strong>Phone Number:</strong> ${customerNumber}</p>
                            <p><strong>Email:</strong> ${recipient_email}</p>
                            <p><strong>Service:</strong> ${service}</p>
                            <p><strong>Number of rooms:</strong> ${rooms !== 0 ? rooms : 'No number specified'}</p>
                            <p><strong>Flooring type:</strong> ${flooring !== '' ? flooring : 'No flooring specified'}.</p>
                            <p><strong>Message:</strong>${message}.</p>
                          </body>
                        </html>`,


        }
        transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error)
                return reject({message: `Error`});
            }
            return resolve({message: `Email sent`});
        })

    })
}

app.get('/', (req, res) => {
    sendEmail()
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message))
})

app.post('/send_email', (req, res) => {
    sendEmail(req.body)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message))
})
app.post('/send_feedback', (req, res) => {
    sendEmail(req.body)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message))
})

app.listen(port, () => {
    console.log(`server start at port no: ${port}`)
})