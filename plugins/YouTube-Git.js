let handler = async (m, { args, usedPrefix, command }) => { 
 let fa = ` 
 *[❗] ingresa la cantidad que desea apostar* 
  
 *📌 Ejemplo:* 
 *${usedPrefix + command} 15*`.trim() 
 if (!args[0]) throw fa 
 if (isNaN(args[0])) throw fa 
 let apuesta = parseInt(args[0]) 
 let users = global.db.data.users[m.sender] 
 let time = users.lastslot + 10000 
 if (new Date - users.lastslot < 10000) throw `*⏳ ESPERA ${msToTime(time - new Date())} PARA VOLVER A APOSTAR*` 
 if (apuesta < 15) throw '*[❗] EL MÍNIMO PARA APOSTAR ES DE 15 DIAMANTES*' 
 if (users.limit < apuesta) { 
 throw `*[❗] TuS Diamantes no es suficiente para apostar esa cantidad, Interactua conmigo o juega otros juegos para ganar xp y comprar diamantes para apostar*` 
 } 
 let emojis = ["🐉", "🐋", "🕊"]; 
 let a = Math.floor(Math.random() * emojis.length); 
 let b = Math.floor(Math.random() * emojis.length); 
 let c = Math.floor(Math.random() * emojis.length); 
 let x = [], 
 y = [], 
 z = []; 
 for (let i = 0; i < 3; i++) { 
 x[i] = emojis[a]; 
 a++; 
 if (a == emojis.length) a = 0; 
 } 
 for (let i = 0; i < 3; i++) { 
 y[i] = emojis[b]; 
 b++; 
 if (b == emojis.length) b = 0; 
 } 
 for (let i = 0; i < 3; i++) { 
 z[i] = emojis[c]; 
 c++; 
 if (c == emojis.length) c = 0; 
 } 
 let end; 
 if (a == b && b == c) { 
 end = `*GANASTE! 🎁 +${apuesta + apuesta} Diamantes*` 
 users.exp += apuesta 
 } else if (a == b || a == c || b == c) { 
 end = `*CASI LO LOGRAS, SIGUE INTENTANDO*\n*TOMA +10 Diamantes*` 
 users.limit += 15 
 } else { 
 end = `*❌ PERDISTE -${apuesta} Diamantes😹*` 
 users.limit -= apuesta 
 } 
 users.lastslot = new Date * 1 
 return await m.reply( 
         ` 
 🎰 | *SLOTS* | 🎰
 ──────── 
 ${x[0]} : ${y[0]} : ${z[0]} 
 ${x[1]} : ${y[1]} : ${z[1]} 
 ${x[2]} : ${y[2]} : ${z[2]} 
 ──────── 
 🎰 | ${end}`) | 🎰
 } 
 handler.help = ['slot2 <apuesta>'] 
 handler.tags = ['game'] 
 handler.command = ['slot2'] 
 handler.register = true 
 export default handler 
  
 function msToTime(duration) { 
 var milliseconds = parseInt((duration % 1000) / 100), 
 seconds = Math.floor((duration / 1000) % 60), 
 minutes = Math.floor((duration / (1000 * 60)) % 60), 
 hours = Math.floor((duration / (1000 * 60 * 60)) % 24) 
  
 hours = (hours < 10) ? "0" + hours : hours 
 minutes = (minutes < 10) ? "0" + minutes : minutes 
 seconds = (seconds < 10) ? "0" + seconds : seconds 
  
 return minutes + " m " + seconds + " s " 
 }