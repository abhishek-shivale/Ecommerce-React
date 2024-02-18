import sgmail from '@sendgrid/mail'
import dotenv from 'dotenv'

dotenv.config({path:'/backend/.env'})

const apiKey = process.env.SENDGRID_API || ``

const from = process.env.SENDGRIDEMAIL || ``

const SendEmail= (Toemail,subject,message) =>{
    sgmail.setApiKey(apiKey)

    const msg = {
        to: Toemail,
        from: from,
        subject: subject,
        text: message,
        html: `<h1>${message}</h1>`
    }
    sgmail
    .send(msg)
    .then(()=> console.log('Email Sent...'))
    .catch((err)=> console.log('Error Found mail not sent'+ err) )
}

export default SendEmail