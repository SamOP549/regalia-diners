

export default async function handler(req, res) {
    const SibApiV3Sdk = require('sib-api-v3-sdk');
    let defaultClient = SibApiV3Sdk.ApiClient.instance;

    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.SENDINBLUE_API_KEY;

    let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = req.body.subject;
    sendSmtpEmail.htmlContent = req.body.emailMsg;
    sendSmtpEmail.sender = { name: req.body.name, email: req.body.email };
    sendSmtpEmail.to = [{ email: 'jainsamarth549@gmail.com' }];
    sendSmtpEmail.params = { name: req.body.name, email: req.body.email, phone: req.body.phone };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(function (data) {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data));
        res.status(200).json({ data: JSON.stringify(data) })
    }, function (error) {
        res.status(400).json({ error: error })
    });
}
