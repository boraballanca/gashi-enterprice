const nodemailer = require("nodemailer");

const sendEmail= async ({subject,recipient_email, customerName,customerNumber, service, rooms, flooring,cleaning, message}) => {
        let transporter = nodemailer.createTransport({
            port:465,
            host: "smtp.gmail.com",
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PASS
            },
        });
        const mail_configs = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: subject,
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
                            <p><strong>Cleaning Service:</strong> ${cleaning !== '' ? cleaning : 'No cleaning service specified'}.</p>
                            <p><strong>Message:</strong>${message}.</p>
                          </body>
                        </html>`,
        }
       await new Promise((resolve,reject)=>{
            transporter.sendMail(mail_configs, function (error, info) {
            if (error) {
                console.log(error)
                reject(error)
            } else {
                console.log(info)
                resolve(info)
            }
        })
        })
}

module.exports =sendEmail