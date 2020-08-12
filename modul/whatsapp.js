const { Client } = require('whatsapp-web.js');
const client = new Client();
var qrcode = require('qrcode-terminal');

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr,{small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();
