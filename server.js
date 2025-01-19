const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();
const port = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route untuk menangani form submission
app.post('/submit', (req, res) => {
  const recaptchaResponse = req.body['g-recaptcha-response'];
  const secretKey = '6LdU5oAqAAAAAH58-2vefrNK_IhEWBwC0YKnsvtc';

  // Verifikasi reCAPTCHA dengan Google
  const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`;

  request(verificationUrl, (error, response, body) => {
    body = JSON.parse(body);

    if (body.success) {
      // reCAPTCHA berhasil, lanjutkan untuk memproses formulir
      res.send('Formulir berhasil dikirim!');
    } else {
      // Gagal verifikasi reCAPTCHA
      res.send('Verifikasi reCAPTCHA gagal, silakan coba lagi.');
    }
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
