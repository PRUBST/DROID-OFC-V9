import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return    
try {
let pp = imagen3
let img =  'views/bot.jpg'
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role, role2 } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `╭──❯.⋆☆☆☆⋆.❮──╮
╽ *HOLA• ${taguser}*
╽  BIENVENID@ AL MENÚ 
╽ ⋆DROID MENÚ⋆
╽ 📅 *FECHA ACTUAL:➟${date}*
├──────────⋆
┃❮❮❮☆☆☆☆☆☆☆ ❱❱❱
┃❤ ️TONY-OFC ❤️
┃ SÍGUEME EN TIK-TOK
┃https://tiktok.com/@tony.1p 
╰•⋆҈͜͡.➣❂ᗪᖇOIᗪITO❂◄⋆҈͜͡•╯
🦅᭢━━━━━━━━━᭥🦅᭢
╭─「➻❥ *Estadísticas* ➻❥」
├➽ *👑Nivel:* ${level}
├➽ *📃Experiencia:* ${exp}
├➽ *🛡Rango:* ${role}
├➽ *💎Diamantes:* ${limit}
├➽ *🧑🏻‍💻DROID-Coins:* ${money}
├➽ *💵dolares:* ${joincount}
├➽ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰───────────────╯

╭═•⋆ঈ❥ ACERCA DE
├➽ .menu2 <Audios del bot>
├➽ .owner <creador>
├➽ .grupos
├➽ .logos <menu de logos>
├➽ .anime <menu anime>
╰•⋆҈͜͡.𝐓𝐔𝐑𝐁𝐎⋆𝐍𝐈𝐓𝐑𝐎⋆҈͜͡•╯

╭═•⋆ঈ❥ JUEGOS
├➽ .Mates <modo>
├➽ .ppt <piedra/papel/tijera>
├➽ .slot <apuesta>
├➽ .tictactoe <nombre Sala>
├➽ .gay @user
├➽ .doxear @user
├➽ .follar @user
├➽ .love @user <medidor de amor>
├➽ .formarpareja <aleatoria>
├➽ .acertijo 
├➽ .top <texto random>
├➽ .gay2 @user
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ NIVEL & ECONOMIA
├➽ .trabajar 
├➽ .shop <Tienda>
├➽ .listprem 
├➽ .balance | .bal
├➽ .claim 
├➽ .top2 <tabla de calificación>
├➽ .levelup
├➽ .minar/2/3
├➽ .buy <cantidad>
├➽ .buyall
├➽ .transfer [tipo] [monto] [@tag]
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ REGISTRO
├➽ .reg <nombre.edad>
├➽ .mysn
├➽ .unreg <Num Serie>
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ STICKER
├➽ .stickersearch <text>
├➽ .emojimix <emoji&emoji>
├➽ .s
├➽ .sticker
├➽ .toimg <sticker>
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ IMAGEN
├➽ .imagen <texto>
├➽ .meme
├➽ .pinterest
├➽ .wallpaper
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ MAKER | anime
├➽ .loli
├➽ .neko
├➽ .messi
├➽ .cristiano Ronaldo 
├➽ .waifu 
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ ADMIN"S 
├➽ .Enable/disable 
├➽ .comangrupos <comandos para admin"s>
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ GRUPO
├➽ .delete
├➽ .delwarn @user
├➽ .demote (@tag)
├➽ .infogp
├➽ .hidetag
├➽ .invite <549xxx>
├➽ .kick @user
├➽ .link
├➽ .poll <hola|como|xd>
├➽ .perfil
├➽ .promote
├➽ .resetlink
├➽ .setbye <text>
├➽ .group *open/close*
├➽ .setwelcome <text>
├➽ .staff <admin"s>
├➽ .tagall <text>
├➽ .totag <texto>
├➽ .warn @user
├➽ .warns
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ 
├➽ .enable <option>
├➽ .disable <option>
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ ANIME
├➽ .waifu
├➽ .neko
├➽ .megumin
├➽ .loli
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ ANIME REACCION
├➽ .kill @user
├➽ .kiss @user
├➽ .pat @user
├➽ .slap @user
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ DESCARGAS
├➽ .instagram <link ig>
├➽ .mediafire <url>
├➽ .audio
├➽ .video 
├➽ .tiktok
├➽ .tiktokstalk
├➽ .twitter <url>
├➽ .ytmp3 <url>
├➽ .ytsearch
├➽ .ytmp4 <link yt>
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ TOOLS
├➽ .cal <ecuacion>
├➽ .google
├➽ .lyrics
├➽ .readmore <text1>|<text2>
├➽ .readvo
├➽ .ssweb <url>
├➽ .tourl
├➽ .trad <traductor>
├➽ .tts <texto a voz>
├➽ .wikipedia
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ Tecnología/ia
├➽ .ia <texto>
├➽ .ia2 <texto generador de imág>
├➽ .bot <texto>
├➽ .simi <texto>
├➽ .hd <Imagen>
├➽ .clima 
├➽ .pixel <imagen>
├➽ .horario <horario de los países de latam>
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ DATABASE
├➽ .delcmd <text>
├➽ .listcmd
├➽ .setcmd <txt>
├➽ .reporte <reportar errores>
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ OWNER
├➽ .expired <días>
├➽ .addprem <@tag>
├➽ .ban @user
├➽ .banchat
├➽ .listban
├➽ .cleartmp
├➽ .delexpired
├➽ .delprem @user
├➽ .getplugin <name file>
├➽ .getfile <name file>
├➽ .join <chat.whatsapp.com> <dias>
├➽ .reset <54xxx>
├➽ .restart
├➽ .unban @user
├➽ .unbanchat
├➽ .update
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯

╭═•⋆ঈ❥ AVANZADO
├➽ >
├➽ =>
├➽ $
╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯
❂𝐓𝐔𝐑𝐁𝐈𝐓𝐎 𝐁𝐎𝐓❂`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.register = true
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}