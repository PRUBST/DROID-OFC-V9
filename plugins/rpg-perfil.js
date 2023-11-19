import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, participants, isPrems }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;

  if (!(who in global.db.data.users)) throw `El usuario que está mencionando no está registrado en mi base de datos`;

  try {
    let ppBuffer = await conn.getProfilePictureThumb(who);
    let ppBase64 = `data:image/jpeg;base64,${ppBuffer.toString('base64')}`;

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

    conn.sendMessage(m.chat, { text: str, thumbnail: ppBase64 }, 'extendedTextMessage', { quoted: m });

  } catch (e) {
    // Maneja la excepción si la obtención de la imagen falla
    throw `Error al obtener la imagen de perfil: ${e}`;
  }
};

handler.help = ['profile [@user]'];
handler.tags = ['xp'];
handler.command = /^perfil|profile?$/i;

export default handler