function sendNotification(data) {
  const options = {
  host: "onesignal.com",
  port: 443,
  path: "/api/v1/notifications",
  method: "POST",
  headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": process.env.ONESIGNALAUTH
  }
  };

  const https = require('https');
  const req = https.request(options, res => {});

  req.write(JSON.stringify(data));
  req.end();
};

module.exports = {
  async push(req, res, next) {
    const { mensagem } = req.body;
    const message = {
      app_id: process.env.ONESIGNALAPP,
      contents: {"en": mensagem},
      included_segments: ["All"]
    };

    await sendNotification(message);

    req.flash('success', 'Mensagem enviada com sucesso');
    return res.redirect('/app/dashboard');
  },
};
