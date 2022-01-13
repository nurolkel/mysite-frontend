const nodemailer = require('nodemailer');


function formData({name,email,companyName, phoneNumber, description}) {
    return `
        <div>
        <h1>Form Data Submitted</h1>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Company Name: ${companyName}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Description: ${description}</p>
        <h3>Call or Email right away</h3>
        </div>
        `;
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
        to: `<knunezweb@gmail.com>`,
        subject: 'Form Data Submitted',
        html: formData(body)
    });
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Success'}),
    }

}