let handler = async (m, { conn, args, command }) => {
await m.reply('🧑🏻‍💻 Lo siento, Mi tiempo en éste grupo finalizo. 😿  Adiós a todos') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|leave|salirdelgrupo|salir)$/i
handler.group = true
handler.rowner = true
handler.register = true
export default handler
