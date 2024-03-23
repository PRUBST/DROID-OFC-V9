import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `*Ya estás registrado. ¿Quieres cambiar tu registro o tu edad? /unreg (número de serie)
/myns (para ver tu número de serie)`;
  if (!Reg.test(text)) throw `*Error:👉 Usó correcto del comando:*\n*/reg nombre.edad\n Ejemplo: /reg droid.17*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '🍃𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝚀𝚄𝙴 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲Í𝙾 𝙴𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝚀𝚄𝙴 𝙿𝙾𝙽𝙴𝚁 𝚃𝚄 𝙽𝙾𝙼𝙱𝚁𝙴🍃';
  if (!age) throw '*☘️𝙷𝙾𝙻𝙰 𝚃𝙴 𝙸𝙽𝙵𝙾𝚁𝙼𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙾 𝚃𝚄 𝙴𝙳𝙰𝙳 𝙴𝙽 𝙴𝙻 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝚀𝚄𝙴 𝙿𝙾𝙽𝙴𝚁𝚃𝙴 𝚃𝚄 𝙴𝙳𝙰𝙳🌱*';
  if (name.length >= 20) throw '*☘️𝙷𝙾𝙻𝙰 😊𝙾𝚈𝙴 𝙿𝚄𝙴𝙳𝙴𝚂 𝙿𝙾𝙽𝙴𝚁 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴 𝙼Á𝚂 𝙲𝙾𝚁𝚃𝙾🌴𝚈𝙰 𝚀𝚄𝙴 𝙴𝙻 𝚀𝚄𝙴 𝙴𝚂𝚃Á𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙾 𝙼Á𝚂 𝙲𝙾𝚁𝚃𝙾🌹️*';
  age = parseInt(age);
  if (age > 70) throw '*Quieres jugar al bot abuel/a😹?*';
  if (age < 11) throw '*🧑🏻‍💻 MI sistema no permite que registre alguien con menos de 11 años, intena con otra edad*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `📃ᴿᵉᵍⁱˢᵗʳᵒ ᶜᵒᵐᵖˡᵉᵗᵃᵈᵒ ⁱⁿᶠᵒʳᵐᵃᶜⁱóⁿ ᵈᵉˡ ʳᵉᵍⁱˢᵗʳᵒ
🪪ᴺᵒᵐᵇʳᵉ ${name}
☃️ᵉᵈᵃᵈ ${age}
📃ᴺúᵐᵉʳᵒ ᵈᵉ ˢᵉʳⁱᵉ
 ${sn}

🌟ᴬʰᵒʳᵃ ᵗᵉ ᵉⁿᶜᵘᵉⁿᵗʳᵃˢ ʳᵉᵍⁱˢᵗʳᵃᵈ@ ᵉⁿ ᵐⁱ ᵇᵃˢᵉ ᵈᵉ ᵈᵃᵗᵒˢ ᵈⁱˢᶠʳᵘᵗᵃ ᵈᵉˡ ᵇᵒᵗ 🤖

📃ˢⁱ ᵈᵉˢᵉᵃˢ ᶜᵃᵐᵇⁱᵃʳ ᵗᵘ ʳᵉᵍⁱˢᵗʳᵒ ᵉˡⁱᵐⁱⁿᵃ ᵗᵘ ⁿúᵐᵉʳᵒ ᵈᵉ ˢᵉʳⁱᵉ ᵉʲᵉᵐᵖˡᵒ

🪪/ᵘⁿʳᵉᵍ ${sn}

ᴰᵉˢᵖᵘᵉˢ ᵗᵉ ᵛᵘᵉˡᵛᵉˢ ᵃ ʳᵉᵍⁱˢᵗʳᵃʳ`;
  await conn.sendFile(m.chat, pp, 'hades.jpg', caption);

  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(Reg|reg)$/i;
export default handler;