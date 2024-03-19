let handler = async (m, { conn, command, text }) => { 
  if (!text) throw `*Ingrese el @ o el nombre de la persona que quieras saber si te puedes ${command.replace('how', '')}*` 
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender 

  // Mensaje con reacción incluida
  await conn.sendMessage(m.chat, {
    text: `
 @!${text} 
 *¡PRUEBA!*
 
 *${text}*
 🤤🥵 *¡PRUEBA!* 🥵🤤`,
    mentions: {
      id: user,
      jid: user,
      tag: text
    },
    contextInfo: { mentionedJid: [user] },
    reaction: { text: '👍', key: '👍' } // Reacción incluida en el mensaje
  });
} 
