let ro = 100 
 let handler = async (m, { conn, usedPrefix, command}) => { 
 let time = global.db.data.users[m.sender].lastrob + 1000 
 if (new Date - global.db.data.users[m.sender].lastrob < 1000) throw `*⏱️¡Hey! Espera ${msToTime(time - new Date())} para volver a robar*` 
 let who 
 if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false 
 else who = m.chat 
 if (!who) throw `*[❗] Etiqueta a alguien para robarle algunos Diamantes 😈*` 
 if (!(who in global.db.data.users)) throw `*[❗] El usuario no se encuentra en mi base de datos.*` 
 let users = global.db.data.users[who] 
 let rob = Math.floor(Math.random() * ro) 
 if (users.exp < rob) return m.reply(`😔 @${who.split`@`[0]} tiene menos de *${ro} XP*\nNo robes a un pobre v":`, null, { mentions: [who] })     
 global.db.data.users[m.sender].exp += rob 
 global.db.data.users[who].limit -= rob  
 m.reply(`*‣ Robaste ${rob} Diamantes a @${who.split`@`[0]}*`, null, { mentions: [who] }) 
 global.db.data.users[m.sender].lastrob = new Date * 1 
 } 
 handler.help = ['robdiamantes'] 
 handler.tags = ['econ'] 
 handler.command = ['robardiamantes', 'robarDiamante'] 
 export default handler   
 function msToTime(duration) { 
 var milliseconds = parseInt((duration % 1000) / 100), 
 seconds = Math.floor((duration / 1000) % 60), 
 minutes = Math.floor((duration / (1000 * 60)) % 60), 
 hours = Math.floor((duration / (1000 * 60 * 60)) % 24) 
 hours = (hours < 0) ? "0" + hours : hours 
 minutes = (minutes < 0) ? "0" + minutes : minutes 
 seconds = (seconds < 4) ? "0" + seconds : seconds 
 return hours + " Hora(s) " + minutes + " Minuto(s)"}