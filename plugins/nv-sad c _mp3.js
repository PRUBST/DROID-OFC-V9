let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 12 // 12 0 Horas //12 0 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 12) throw `YA RECLAMASTE TU COFRE\𝚗VUELVE EN *${msToTime(time - new Date())}* PARA VOLVER A RECLAMAR`


let img = 'https://images.app.goo.gl/zxhX3ygd35PyRUQp3V5z7'
let dia = Math.floor(Math.random() * 1)
let tok = Math.floor(Math.random() * 1)
let hadesb = Math.floor(Math.random() * 1)
let expp = Math.floor(Math.random() * 1)

  global.db.data.users[m.sender].limit += dia
  global.db.data.users[m.sender].money += hadesb
  global.db.data.users[m.sender].joincount += tok
  global.db.data.users[m.sender].exp += expp

let texto = `
🧑🏻‍💻 *Normas de uso*
┈┈┈┈┈┈┈┈┈┈┈┈┈
1: No llamar al bot 

2: No Proporcionar el bot en tiktok o en otras plataformas que no sea WhatsApp.  

🧑🏻‍💻 *Política de privacidad.*
┈┈┈┈┈┈┈┈┈┈┈┈┈      
• Al ser un bot, tus datos no se compartirán con nadie ni serán guardados. Lo único que se guardará será tu registro.

• Gracias por tu preferencia, esas son las políticas. Únete a mi canal de WhatsApp. 👇

https://whatsapp.com/channel/0029Va80EZC5fM5f8fXgsQ0F`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'droid.jpg', texto, fkontak)
//await conn.sendButton(m.chat, texto, wm, img, [['🔰 𝙼𝙴𝙽𝚄', '/menu'] ], fkontak, m)  
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.help = ['daily']
handler.tags = ['xp']
handler.command = ['políticas', 'información', 'política', 'info'] 
handler.register = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 0) ? "0" + hours : hours
  minutes = (minutes < 0) ? "0" + minutes : minutes
  seconds = (seconds < 0) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}