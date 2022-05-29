let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '62895410636348-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'Get Bot', 
    orderTitle: `Gxs - Botz`,
    thumbnail: 'https://telegra.ph/file/f6ad6d31b2b4fc7fdb483.png', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.reply(m.chat, price1, ftroli)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler