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
    message: 'Random Smug', 
    orderTitle: `Gxs - Botz`,
    thumbnail: 'https://telegra.ph/file/f6ad6d31b2b4fc7fdb483.png', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
    conn.sendButtonImg(m.chat, global.API('lolhuman', '/api/random/elaina', {}, 'apikey'), 'Nih', wm, 'NEXT', 'elaina', m)
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i

module.exports = handler



https://hardianto.xyz/api/anime/random?nsfw=gasm&apikey=hardianto