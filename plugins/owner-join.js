let linkRegex=/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i,handler=async(_0x2dfc8b,{conn:_0x1c6165,text:_0x34d773,isMods:_0x186caf,isOwner:_0x47a671,isPrems:_0x246328})=>{let _0x1f1f94=(_0x2dfc8b['quoted']?_0x2dfc8b['quoted']['text']?_0x2dfc8b['quoted']['text']:_0x34d773:_0x34d773)||_0x34d773,[_0x3933cc,_0x2c74d6]=_0x1f1f94['match'](linkRegex)||[];if(!_0x2c74d6)throw'[\x20⚠️\x20𝐀𝐋𝐄𝐑𝐓𝐀\x20⚠️\x20]\x20ERROR\x20TRY\x20AGAIN\x20CHECK\x20THAT\x20YOUR\x20LINK\x20IS\x20NOT\x20EXPIRED\x20AN\x20EXAMPLE\x0a/join\x20https://chat.whatsapp.com/KXaAogRpQWOFwlAcP9JkQX';if(_0x246328||_0x186caf||_0x47a671||_0x2dfc8b['fromMe']){let _0x368347=await _0x1c6165['groupAcceptInvite'](_0x2c74d6);await _0x2dfc8b['reply']('THE\x20BOT\x20HAS\x20JOINED\x20SUCCESSFULLY\x20ENJOY\x20THE\x20BOT✔️');}else{const _0x33f568=global['owner']['filter'](([_0x5cafbf])=>_0x5cafbf);for(let _0x12927a of _0x33f568['map'](([_0x18bc89])=>[_0x18bc89]+'@s.whatsapp.net')['filter'](_0x3069d8=>_0x3069d8!=_0x1c6165['user']['jid']))await _0x2dfc8b['reply']('[❗𝐈𝐍𝐅𝐎❗]\x20BOT\x20REQUEST\x20FOR\x20A\x20GROUP\x20[❗𝐈𝐍𝐅O❗]*\x0a\x0a*—◉\x20REQUEST\x20NUMBER:*\x20'+'wa.me/'+_0x2dfc8b['sender']['split']('@')[0x0]+'\x0a*—◉\x20LINK\x20WHERE\x20THE\x20BOT\x20IS\x20REQUESTED*'+_0x1f1f94,_0x12927a);await _0x2dfc8b['reply']('[❗𝐈𝐍𝐅𝐎❗]\x20THE\x20REQUEST\x20HAS\x20BEEN\x20SENT\x20TO\x20THE\x20BOT\x20OWNER\x20YOU\x20CAN\x20ALSO\x20CONTACT\x20THE\x20SUBBOTS\x20AND\x20YOU\x20CAN\x20ASK\x20THEM\x20IN\x20THE\x20KINDEST\x20WAY\x20TO\x20JOIN\x20YOUR\x20GROUP\x0a\x20THE\x20ONLY\x20THING\x20WE\x20ASK\x20OF\x20THEM\x20IS\x20THAT😉');}};handler['help']=['join\x20[chat.whatsapp.com]'],handler['tags']=['owner'],handler['command']=/^join|nuevogrupo$/i,handler['rowner']=!![],handler['register']=!![];export default handler;
