import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `🚫 *Ya estás registrado. ¿Quieres cambiar tu Nombre de registro o edad?\n/unreg (número de serie)
/myns (para ver tu número de serie)*`;
  if (!Reg.test(text)) throw `📵️ Formato incorrecto

🧑🏻‍💻️ Uso del comamdo: */reg nombre.edad*
👉🏻 Ejemplo: */reg tony.17*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '🍃𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝚀𝚄𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲Í𝙾 𝙴𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝚀𝚄𝙴 𝙿𝙾𝙽𝙴𝚁 𝚃𝚄 𝙽𝙾𝙼𝙱𝚁𝙴🍃';
  if (!age) throw '🚫 *Error: Te falta poner tu edad.*';
  if (name.length >= 30) throw '*Ése nombre es demasiado largo, porfavor reduce el texto.*';
  age = parseInt(age);
  if (age > 70) throw '*Quieres jugar al bot abuel/a😹?*';
  if (age < 11) throw '*🧑🏻‍💻 Mi sistema no permite registrar a personas con menos de 11 años. Por favor, inténtelo con otra edad.*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `╭•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╮
╽ ❮❮❮ REGISTRO ❯❯❯
├⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆⋆
┃Nombre: *\`${name}\`*
┃Edad: *\`${age}\`*
┃Numero de serie:
*\`${sn}\`*
╰•⋆҈͜͡.𝐃𝐑𝐎𝐈𝐃⋆𝐌𝐃⋆҈͜͡•╯

 >  .menu "para ver el Menu completo.
`;
  await conn.sendFile(m.chat, pp, 'hades.jpg', caption);

  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(Reg|reg)$/i;
export default handler;