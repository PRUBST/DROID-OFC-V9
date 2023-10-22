import MessageType from '@whiskeysockets/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.sendButton(m.chat, '[❗] No estás en ningún juego en una fila', wm, null, [['INICIAR SALA DE JUEGO', `${usedPrefix}ttt partida nueva`]], m)
delete conn.game[room.id]
await m.reply('[ ✔ ] the game in tic-tac-toe was removed')}
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
handler.register = true
export default handler
