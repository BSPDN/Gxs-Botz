function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;JasaOtp;;;FN:JasaOtp\nORG:JasaOtp;\nTEL;type=CELL;type=VOICE;waid=6282176785539:+62 821-7678-5539\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6282176785539', 'Owner', m)
m.reply(m.chat,'*Tuh nomor owner ku tersayang*\n*Chat jika PENTING*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
