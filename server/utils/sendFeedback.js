const nodemailer = require("nodemailer");

const sendFeedback = async ({recipient_email, customerName, customerNumber, quality, value, deadlines, satisfaction, expectations, recommendations, improvements, firstHear}) =>{

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
                            <p><strong>1. How would you rate the quality of our work?</strong> ${quality}</p>
                            <p><strong>2. How would you rate the value we added to the overall project?</strong> ${value}</p>
                            <p><strong>3. Did we meet the deadlines and versatility set by the customer?</strong> ${deadlines}</p>
                            <p><strong>4. What is your satisfaction with the quality of the work as a customer?</strong> ${satisfaction}</p>
                            <p><strong>5. Did we meet your expectations?</strong> ${expectations}</p>
                            <p><strong>6. Would you recommend our product/service to other people?</strong> ${recommendations}</p>
                            <p><strong>7. What could we improve in order to better live up to your expectations?</strong> ${improvements}</p>
                            <p><strong>8. Where did you first hear about our company?</strong> ${firstHear}</p>
                            
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

module.exports=sendFeedback;