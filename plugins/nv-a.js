import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

 await conn.sendMessage(m.chat, { react: { text: '👨🏻‍💻', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `╭「➻❥DROID-8-MD➻❥」
┃➯👋🏻 *HOLA: ${taguser}*
┃➯📅 *FECHA ACTUAL: ${date}*
︎├──────────⋆
┃❮❮❮ *CANAL OFC* ❱❱❱
┃❤ *SÍGUEME EN MI CANAL* ❤️
┃HAZ CLICK PARA VER MI CANAL
┃         Y SÍGUEME 
┃PA RECIBIR INFO SOBRE EL BOT
︎╰───────────────╯
        *\`DROID-MENU\`*
         *\`COMANDOS\`* 👇 
✫᭢━━━━━━━━━᭥✫᭢
╭─「➻❥ *Estadísticas* ➻❥」
├➽ *👑Nivel:* ${level}
├➽ *📃Experiencia:* ${exp}
├➽ *🛡Rango:* ${role}
├➽ *💎Diamantes:* ${limit}
├➽ *🧑🏻‍💻DROID-Coins:* ${money}
├➽ *💵dolares:* ${joincount}
├➽ *Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *ACERCA DE:📝*
├➽ *.join <se une el bot a tu grupo>*
├➽ *.logos <menu de logos>*
├➽ *.link <de del grupo actual>*
├➽ *.menu2 <audios del bot>*
├➽ *.animes [imagenes]*
├➽ *.grupos <grupos del creador>*
├➽ *.owner [creador]*
├➽ *.enable [Opciones para admin"s]*
├➽ *.hidetag <texto>
├➽ *.tagall*
├➽ *.shop [tienda]*
├➽ *.reporte [reportar cmd con errores]*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *JUEGOS* 🎮
├➽ *tictactoe <nombre de la sala>*
├➽ *.Mates <modo>*
├➽ *.ppt <papel/piedra/tijera>*
├➽ *.gay* <@tag> [perfil gay]*
├➽ *.doxear <@tag>*
├➽ *.Top <ejemplo: <.top pendejos>*
├➽ *.love <@tag>*
├➽ *.pvp <@tag>*
├➽ *.juego [piedra/papel/tijera]*
├➽ *.acertijo*
├➽ *.formarpareja [parejas ramdon]*
├➽ *.slot [ruleta]*
︎╰───────────────
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *CHATGPT* 📡
├➽ *.ia *<Chatgpt>*
├➽ *.ia2 <Regenerador de imágenes>*
├➽ *.iavoz <respuesta con audio>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *REGISTRO* 🧑🏻‍💻
├➽ *.reg <nombre.edad>*
├➽ *.unreg <número de serie>*
├➽ *.mysn <Tú número de serie>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *STICKERS* ❥」
├➽ *.s*
├➽ *.sticker*
├➽ *.stickersearch <buscador de 📦 de stickers>
├➽ *.sermoverbg [sticker sin fondo]*
├➽ *.scircle [sticker circular]*
├➽ *.emojimix ☺&😈*
├➽ *.attp*
├➽ *.dados*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *FUN* 🤖
├➽ *.lolice @tag*
├➽ *.simpcard @tag*
├➽ *.hornycard <licencia virtual FUN>*
├➽ *.estúpido @tag*
├➽ *.meme*
├➽ *.toimg*
├➽ *.mp3 <vídeo a Audio>*
├➽ *.readvo*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *PREMIUM* 🏆 
├➽ *.join <se une el bot a tu grupo>* 
├➽ *.mediafire <link>*
├➽ *.ia2 <Regenerador de imágenes*
├➽ *.horario <de todos los países>*
︎╰────────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *MAKER* ❥」
├➽ *.lolivid*
├➽ *.loli*
├➽ *.neko*
├➽ *.waifu*
├➽ *.messi*
├➽ *.cr7*
├➽ *.kpop*
├➽ *.blackpink*
├➽ *.cat*
├➽ *.wallpaper*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *GRUPO*  ❥」
├➽ *.promote @tag*
├➽ *.demote @tag*
├➽ *.infogp <info del grupo>*
├➽ *.hidetag*
├➽ *.afk <razón>
├➽ *.delete*
├➽ *.warn @tag*
├➽ *.unwarn @tag*
├➽ *.ban @tag*
├➽ *.unban @tag*
├➽ *.kick @tag*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *TRANSFERENCIA"S*
├➽ *.transferjoincount <cantidad>* @tag
├➽ *.transferlimit <cantidad>* @tag
├➽ *.transferxp <cantidad>* @tag
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *ECONOMÍA Y RECOMPENSAS* ❥」
├➽ *.minar*
├➽ *.minar2*
├➽ *.minar3*
├➽ *.claim*
├➽ *.coffer*
├➽ *.bal* 
├➽ *.busyall*
├➽ *.bus <cantidad>* 
├➽ *.buyall*
├➽ *.buy <cantidad>*
├➽ *.dolares*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *REACCIONES* ❥」
├➽ *.kiss <tag>*
├➽ *.pat* <tag>*
╰───────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭──「❥ *DESCARGAS ⎙*
├➽ *.wikipedia <busqueda>*
├➽ *.animeinfo <nombre>*
├➽ *.audio* <nombre de la música>
├➽ *.video* <nombre del video>
├➽ *.ytmp3 <url>
├➽ *.ytmp4 <url>*
├➽ *.tiktok* <link>
├➽ *.mediafire <link>*
├➽ *.twitter*
├➽ *.google*
├➽ *.ytbuscar*
├➽ *.gdrive*
╰────────────────╯
✫᭢━━━━━━━━━᭥✫᭢
╭─「❥ *TOOLS* 🧑🏻‍💻
├➽ *.hd <imagen>*
├➽ *.calculadora*
├➽ *.perfil*
├➽ *.clima*
├➽ *.styletext <texto>
├➽ *.covid*
├➽ *.horario*
︎╰────────────────╯
 *\`©2020\`*
 *\`©𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂\`*`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
            const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": global.imagen1, "mediaUrl": `https://whatsapp.com/channel/0029Va80EZC5fM5f8fXgsQ0F`, "sourceUrl": `https://whatsapp.com/channel/0029Va80EZC5fM5f8fXgsQ0F`}}}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {text: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": global.imagen1, "mediaUrl": `https://whatsapp.com/channel/0029Va80EZC5fM5f8fXgsQ0F`, "sourceUrl": `https://whatsapp.com/channel/0029Va80EZC5fM5f8fXgsQ0F`}}}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '> ⓘ Ocurrio un error inesperado, intentelo de nuevo...', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|ayuda|commands|commandos|cmd)$/i;
handler.register = true
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}