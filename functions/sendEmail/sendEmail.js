const nodemailer = require('nodemailer');



function generateFormEmail({name}) {
    return `
        <div>
            <h2>Thank you ${name} giving us the oppertunity to earn your business</h2>
            <p>Please give us some time before we reach out to you, we will be very happy to answer any of your questions</p>
            <h3>Thank you for choosing Performant Web Design</h3>
            <style>
            div {
                background-color: #0E0F13;
            }
             h3, p {
                color: #C1D4D9;
            }
            h2 {
                color: #04BFAD;
            }
            </style>
        </div>
    `
}


const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
})

function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

exports.handler = async (event, context) => {
    await wait(5000);
    const body = JSON.parse(event.body);

    console.log(body)
    if (body.mapleSyrup) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "haha you lose"})
        };
    }

    const requiredFields = ['name', 'companyName', 'email', 'phoneNumber', 'description']

    for (const field of requiredFields) {
        if (!body[field]) {
            return {
                statusCode: 400,
                body: JSON.stringify({ 
                    message: `Opps! You are missing the ${field} field`
                }),
            }
        }

        if (typeof(body[field]) === 'number') {
            body[field].toString();
        }

        if (!body) {
            return {
                statusCode: 400,
                body: JSON.stringify({ 
                    message: `You haven't submitted anything yet`
                })
            }
        }
    }

    const info = transporter.sendMail({
        from: "Performant Web Design <knunez90@hotmail.com>",
        to: `${body.name} <${body.email}>`,
        subject: 'We Will Contact You Shortly!',
        html: generateFormEmail(body)
    });
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success'}),
    }

}

