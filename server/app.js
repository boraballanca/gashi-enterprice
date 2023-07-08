const {response} = require('express');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 5000;

// const email='info@gashienterprise.com';
// const app_pass='npkyiqqjbzykjstd';

const email='boraballanca40@gmail.com';
const app_pass='gpouucuicttawjoq';

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
function sendFeedback({recipient_email, customerName,customerNumber,message,results}) {
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
            subject: 'New feedback!',
            html: `<!DOCTYPE html>
                        <html>
                          <head>
                            <meta charset="utf-8" />
                            <title>Feedback Form Submission</title>
                          </head>
                          <body>
                            <h3>New Feedback</h3>
                            <p><strong>Name:</strong> ${customerName}</p>
                            <p><strong>Phone Number:</strong> ${customerNumber}</p>
                            <p><strong>Email:</strong> ${recipient_email}</p>
                            <p><strong>1. How would you rate the quality of our work?</strong> ${results.quality}</p>
                            <p><strong>2. How would you rate the value we added to the overall project?</strong> ${results.value}</p>
                            <p><strong>3. Did we meet the deadlines and versatility set by the customer?</strong> ${results.deadlines}</p>
                            <p><strong>4. What is your satisfaction with the quality of the work as a customer?</strong> ${results.satisfaction}</p>
                            <p><strong>5. Did we meet your expectations?</strong> ${results.expectations}</p>
                            <p><strong>6. Would you recommend our product/service to other people?</strong> ${results.recommendations}</p>
                            <p><strong>7. What could we improve in order to better live up to your expectations?</strong> ${message}</p>
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
    sendFeedback(req.body)
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message))
})

app.listen(port, () => {
    console.log(`server start at port no: ${port}`)
})