import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let vn = './Audios/bot.mp3'
let chat = global.db.data.chats[m.chat]
if (/^hola, ¿qué funciones tienes?$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)   
await m.reply(`*Hola, mis funciones incluyen la creación de stickers, descarga de música, y entre otras más.\n\n\nRecuerda que cada comando que pones debe ir primero un punto y luego comando. Ejemplo:
/s\n\nSímbolos admitidos: * / ! " .  @ + × ^
\nTambién registrate para que puedas ver todas mis funciones y usarlas. Espero serte útil.
\nregistrate escribiendo: */reg nombre.edad*
ejemplo: */reg droid.17*`)
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true }, { quoted: m })
}
return !0
}
handler.register = true
export default handler