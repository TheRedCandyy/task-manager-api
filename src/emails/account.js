const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alexandre.tavares@wundermanthompson.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'alexandre.tavares@wundermanthompson.com',
        subject: 'Your account has been canceled!',
        text: `Thanks for the time you stayed with us ${name}. What could've we done better so you didn't cancel?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}