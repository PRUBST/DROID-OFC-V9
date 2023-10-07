let handler = async (m, { conn, text}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `[❗]ENTER THE @tag OF SOME USER`, fkontak, m)
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) return conn.reply(m.chat, `taguea al usuario que de sea desbanear: Ejemplo: /unban @tag`, fkontak, m)
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `👨🏻‍💻 *USUARIO DESBANEADO,\n YA PUEDE USARME:*`, fkontak, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.register = true
handler.admin = true
export default handler