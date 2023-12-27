let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]

if (!chat.isBanned && chat.audios && m.text.match(/(sdlg|SDLG|LA GRASA|la grasa)/gi)) {    
let vn = './Audios/Ara.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
       
if (!chat.isBanned && chat.audios && m.text.match(/(joji|Joji)/gi)) {    
let vn = './Audios/baneadoo.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })}    
      
if (!chat.isBanned && chat.audios && m.text.match(/(Stan|stan)/gi)) {    
let vn = './Audios/boanoite3.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
    
if (!chat.isBanned && chat.audios && m.text.match(/(@50238174788)/gi)) {    
let vn = './Audios/boatarde.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
    
if (!chat.isBanned && chat.audios && m.text.match(/(Te amo|Te amó|TE AMO|TE AMÓ)/gi)) {    
let vn = './Audios/Buenos-dias-2.mp3'
this.sendPresenceUpdate('recording', m.chat)   
this.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })} 
     
return !0 }
handler.register = true
export default handler