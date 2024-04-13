const handler = async (m, {conn, isPrems}) => {
  let enviando;
  if (enviando) return
  enviando = true
  const hasil = Math.floor(Math.random() * 5000);
  const time = global.db.data.users[m.sender].lastwork + 600000;
  if (new Date - global.db.data.users[m.sender].lastwork < 600000) throw `⚔️Has hecho un buen trabajo.⚔️\n\n "Vuelve más tarde para continuar trabajando. ${msToTime(time - new Date())} ⏳*`;
  conn.sendMessage(m.chat, {text: `🏞️ Te uniste a una gran aventura.\n\n🛠️ *${pickRandom(global.work)}\n\n Felicidades, has ganado. ${hasil} Experiencia para tu aventura.`}, {quoted: m});
  global.db.data.users[m.sender].exp += hasil;
  global.db.data.users[m.sender].lastwork = new Date() * 1;
  enviando = false
};
handler.help = ['work'];
handler.tags = ['xp'];
handler.command = /^(work|trabajar|chambear)$/i
handler.fail = null;
handler.register = true
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' minutos ' + seconds + ' segundos ';
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.work = [
Entendido, aquí tienes la traducción manteniendo las comas y el signo "'" en el medio:

'Eres un maestro alquimista, destilando misteriosas pociones en busca de secretos perdidos.',
'Eres un intrépido cazador de tesoros, explorando lugares olvidados en busca de riquezas ocultas.',
'Tienes un negocio de transmutación de metales, convirtiendo lo común en tesoros valiosos.',
'Exploras ruinas antiguas y encuentras una reliquia valiosa que te otorga conocimientos antiguos.',
'Trabajas como mercenario en una guerra épica, enfrentando desafíos con tu habilidad y valentía.',
'Eres un investigador paranormal, descubriendo los secretos ocultos del mundo espiritual.',
'Domas dragones para carreras, formando vínculos con estas majestuosas criaturas aladas.',
'Te conviertes en el mejor herrero del pueblo, forjando armas legendarias y artefactos poderosos.',
'Descubres un bosque encantado lleno de criaturas mágicas, estableciendo una conexión única con la naturaleza.',
'Eres un domador de bestias feroces, controlando las criaturas más salvajes con tu maestría animal.',
'Viajas en el tiempo y resuelves problemas históricos, influenciando el destino de civilizaciones pasadas.',
'Eres consejero real, proporcionando sabiduría y consejo a gobernantes y líderes.',
'Desarrollas tecnología futurista, impulsando la innovación y cambiando el curso del mundo.',
'Eres un maestro en el arte de la persuasión, convenciendo a otros con tu elocuencia y astucia.',
'Piloteas un mecha gigante en batallas épicas, defendiendo la tierra con tu destreza en la guerra de máquinas.',
'Diriges una granja de dragones, cuidando de estas majestuosas criaturas y criando dragones únicos.',
'Eres un espía internacional, infiltrándote en organizaciones secretas y desenmascarando conspiraciones oscuras.',
'Exploras el espacio y haces descubrimientos sorprendentes que te dan una visión única del universo.',
'Eres un mago renombrado, realizando trucos impresionantes y lanzando hechizos mágicos.',
'Eres un científico loco, creando invenciones extravagantes y experimentos inusuales.',
'Defiendes el reino contra un ejército invasor, liderando ejércitos y demostrando tu valentía en la batalla.',
'Eres un navegante audaz, explorando mares desconocidos y descubriendo islas llenas de tesoros.',
'Eres un maestro en el arte del sigilo, moviéndote entre las sombras y llevando a cabo misiones secretas.',
'Eres un chef renombrado, creando platos deliciosos que deleitan paladares en todo el mundo.',
'Investigas crímenes complejos como un detective hábil, resolviendo misterios intrigantes.',
'Eres un diplomático talentoso, negociando tratados y alianzas para mantener la paz entre las naciones.',
'Eres un chamán poderoso, canalizando energías espirituales para sanar y proteger.',
'Desarrollas aplicaciones mágicas para dispositivos encantados, mejorando la vida de las personas con tus inventos.',
'Eres un campeón en torneos de lucha, demostrando tu habilidad en combates cuerpo a cuerpo.',
'Eres un arquitecto visionario, diseñando ciudades futuristas y estructuras impresionantes.',
'Eres un psíquico con habilidades sobrenaturales, explorando mentes y prediciendo el futuro.',
'Eres un director de cine famoso, creando historias épicas que cautivan a las audiencias.',
'Eres un astrónomo y descubres un nuevo planeta, ampliando nuestro conocimiento del cosmos.',
'Eres un experto en supervivencia, enfrentando los peligros del mundo con ingenio y valentía.',
'Eres un músico talentoso que ofrece conciertos masivos, llenando el aire con melodías cautivadoras.',
'Eres un explorador submarino, sumergiéndote en las profundidades para descubrir tesoros olvidados.',
'Eres un diseñador de moda renombrado, creando tendencias y vistiendo a la gente con tu estilo único.',
'Eres un líder revolucionario, luchando por un mundo mejor y guiando a las masas hacia la libertad.',
'Eres un médico que descubre una cura para una enfermedad mortal, salvando innumerables vidas.',
'Eres un hacker informático, navegando por el ciberespacio y revelando secretos digitales.',
'Eres un jardinero botánico que encuentra una planta rara, descubriendo sus propiedades únicas.',
'Eres un cazador de mitos, explorando leyendas y descubriendo la verdad detrás de los cuentos.',
'Eres un arqueólogo que desentierra una ciudad antigua, revelando los secretos de civilizaciones pasadas.',
'Eres un líder espiritual respetado, guiando a otros hacia la iluminación y la paz interior.',
'Eres un jugador profesional, compitiendo en torneos de élite y demostrando tu habilidad en juegos.',
];
