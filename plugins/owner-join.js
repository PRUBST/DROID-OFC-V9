let linkRegex=/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i,handler=async(_0x2dfc8b,{conn:_0x1c6165,text:_0x34d773,isMods:_0x186caf,isOwner:_0x47a671,isPrems:_0x246328})=>{let _0x1f1f94=(_0x2dfc8b['quoted']?_0x2dfc8b['quoted']['text']?_0x2dfc8b['quoted']['text']:_0x34d773:_0x34d773)||_0x34d773,[_0x3933cc,_0x2c74d6]=_0x1f1f94['match'](linkRegex)||[];if(!_0x2c74d6)throw'[\x20⚠️\x20𝐀𝐋𝐄𝐑𝐓𝐀\x20⚠️\x20]\x20Ingresa\x20tu\x20enlace\x20junto\x20con\x20el\x20comando.\x0a\x20Ejemplo:\x0a\x20/join\x20https://chat.whatsapp.com/GQnDkiNEyio2euVeq9FMkV';if(_0x246328||_0x186caf||_0x47a671||_0x2dfc8b['fromMe']){let _0x368347=await _0x1c6165['groupAcceptInvite'](_0x2c74d6);await _0x2dfc8b['reply']('THE\x20BOT\x20HAS\x20JOINED\x20SUCCESSFULLY\x20ENJOY\x20THE\x20BOT✔️');}else{const _0x33f568=global['owner']['filter'](([_0x5cafbf])=>_0x5cafbf);for(let _0x12927a of _0x33f568['map'](([_0x18bc89])=>[_0x18bc89]+'@s.whatsapp.net')['filter'](_0x3069d8=>_0x3069d8!=_0x1c6165['user']['jid']))await _0x2dfc8b['reply']('[❗𝐈𝐍𝐅𝐎❗]\x20BOT\x20REQUEST\x20FOR\x20A\x20GROUP\x20[❗𝐈𝐍𝐅O❗]*\x0a\x0a*—◉\x20REQUEST\x20NUMBER:*\x20'+'wa.me/'+_0x2dfc8b['sender']['split']('@')[0x0]+'\x0a*—◉\x20LINK\x20WHERE\x20THE\x20BOT\x20IS\x20REQUESTED*'+_0x1f1f94,_0x12927a);await _0x2dfc8b['reply']('[❗𝐈𝐍𝐅𝐎❗]\x20Por\x20favor,\x20espera\x20unos\x20minutos\x20para\x20que\x20me\x20una\x20a\x20tu\x20grupo.\x20Esto\x20podría\x20tardar\x20horas\x20o\x20días.\x20Solo\x20hare\x20una\Revisión \x20del\x20nombre\x20y\x20la\x20descripción\x20de\x20tu\x20grupo\x20para\x20asegurarme\x20de\x20que\x20no\x20sea\x20un\x20grupo\x20de\x20contenido\x20porno\x20y\x20gore.');}};handler['help']=['join\x20[chat.whatsapp.com]'],handler['tags']=['register'],handler['command']=/^join|nuevogrupo$/i,handler['register']=!![],handler['register']=!![];export default handler;