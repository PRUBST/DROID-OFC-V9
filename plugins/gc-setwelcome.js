let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('[❗] Mensaje de bienvenida cnfigurado correctamente')
} else throw `[❗] Ingresa al mensaje de bienvenida. Ejemplo1:*\n*/setwelcome bienvenido al grupo @user*\n*Ejemplo2:\n*/setwelcome ╭•⋆҈͜͡.➣❂𝐃𝐑𝐎𝐈𝐃❂◄⋆҈͜͡•╮
╽Bienvenid@ al grupo
┃
╿️@⁨user
╿️🍄🍓🍄🍓🍄🍓🍄 
├──────────⋆
 ╿️.s | .audio/video | /menu3
├──────────⋆
┃  ⚠️ PROHIBIDO ⚠️
├──────────⋆
┃🚯 SPAM/ ENLACES 
┃🚯 PORNO/ CP
╿ 🚯GORE/ INSULTAR 
╿
├──────────⋆
┃ 💦💦💦💦💦💦
┃Lee la descripción
╿️Del Grupo 💫💫💫
╰•⋆҈͜͡.𝑶𝑭𝑪⋆𝑻𝑶𝑵𝒀⋆҈͜͡•╯

🧑🏻‍💻️ *SÍGUEME EN TIKTOK* 😻
http://tiktok.com/@tony.1p)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['setwelcome'] 
handler.admin = true
handler.register = true
export default handler
