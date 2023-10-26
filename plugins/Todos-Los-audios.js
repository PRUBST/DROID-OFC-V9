let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (/^hola$/i.test(m.text) && chat.audios && !chat.isBanned) {
let vn = './Audios/Hola.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    

if (!chat.isBanned && chat.audios && m.text.match(/(@59169776370|WINNER|winner|winer|Winnerz)/gi)) {
let vn = './Audios/dylan1.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
    
if (!chat.isBanned && chat.audios && m.text.match(/(sdlg|SDLG|LA GRASA|la grasa)/gi)) {    
let vn = './Audios/Ara.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
    
if (!chat.isBanned && chat.audios && m.text.match(/(puto bot|PUTO BOT|saquen al bot|SAQUEN AL BOT|bot de mierda|BOT DE MIERDA|bot de mrd|El bot no sirve|EL BOT NO SIRVE)/gi)) {    
let vn = './Audios/insultar.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}     
    
if (!chat.isBanned && chat.audios && m.text.match(/(I DRIVE|i drive|drive|DRIVE)/gi)) {    
let vn = './Audios/Drive.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}     
    
if (!chat.isBanned && chat.audios && m.text.match(/(Negros|NEGROS|NEGRO DE MIERDA|negro de mierda)/gi)) {    
let vn = './Audios/baneado.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
      
if (!chat.isBanned && chat.audios && m.text.match(/(vrg|VERGA|VRG|verga|)/gi)) {    
let vn = './Audios/boanoite.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
    
if (!chat.isBanned && chat.audios && m.text.match(/(Te amó|TE AMÓ|TE AMO|te amo)/gi)) {    
let vn = './Audios/boatarde.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
    
if (!chat.isBanned && chat.audios && m.text.match(/(chivas|CHIVAS)/gi)) {    
let vn = './Audios/Buenos-dias-2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
     
if (!chat.isBanned && chat.audios && m.text.match(/(xd|XD|XDDDD|xddddd)/gi)) {    
let vn = './Audios/DiagnosticadoConGay.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
           
return !0 }
handler.register = true
export default handler