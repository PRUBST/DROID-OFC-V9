import { createHash } from 'crypto';

let handler = async (m, { conn, usedPrefix, participants, isPrems }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

  if (!(who in global.db.data.users)) {
    // Si no encuentra el perfil, envía la imagen predeterminada
    let ppDefault = 'https://i.imgur.com/HE1dWt6.png';
    return conn.sendMessage(m.chat, { image: { url: ppDefault } }, 'extendedTextMessage', { quoted: m });
  }

  let pp;
  try {
    pp = await conn.getProfilePicture(who);
  } catch (e) {
    // Maneja la excepción si la obtención de la imagen falla
    throw `Error al obtener la imagen de perfil: ${e}`;
  }

  if (pp) {
    let { name, role, role2, level, limit, money, exp, joincount, lastclaim, registered, regTime, age, premiumTime } = global.db.data.users[who];
    let username = conn.getName(who);
    let prem = global.prems.includes(who.split `@`[0]);
    let sn = createHash('md5').update(who).digest('hex');
    let str = `╭「➻❥DROID-8-MD➻❥」
│➯ *𝙽𝙾𝙼𝙱𝚁𝙴:* ${username} ${registered ? '(' + name + ') ' : ''}
│➯ *link:* wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
│➯ *⚓Rango:* ${role}
│➯ *📊Poder:* ${role2}
│➯ *✳️️Nivel:* ${level}
│➯ *🧿Experiencia:* ${exp}
│➯ *💎Diamantes:* ${limit} Usos
│➯ *👾Droid-Coins:* ${money}
│➯ *💵dolares:* ${joincount}
│➯ *💥Registrado:* ${registered ? 'Si' : 'No'}
│➯ *✔️premium:* ${premiumTime > 0 ? 'Si' : (isPrems ? 'Si' : 'No') || ''}
│➯ *📝número de serie:* 
│➯ *${sn}*
╰───────────────╯`;

    return conn.sendMessage(m.chat, { image: { url: pp } }, 'extendedTextMessage', { quoted: m });
  } else {
    throw 'No se pudo encontrar la imagen de perfil.';
  }
};

handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;

export default handler
