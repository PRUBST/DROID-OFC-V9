import { sticker } from '../lib/sticker.js';
import _0x1991d6 from 'node-fetch';
import _0x2740d7 from '@whiskeysockets/baileys';

let handler = async (_0x35e648, { conn: _0x3e4cc2 }) => {
  try {
    if (_0x35e648['quoted']?.['sender']) _0x35e648['mentionedJid']['push'](_0x35e648['quoted']['sender']);
    if (!_0x35e648['mentionedJid']['length']) _0x35e648['mentionedJid']['push'](_0x35e648['sender']);

    let _0x5dd342 = await _0x1991d6('https://neko-love.xyz/api/v1/slap');
    let _0x45bd07 = await _0x5dd342['json']();
    let { url: _0x5ffa8a } = _0x45bd07;

    let senderName = _0x3e4cc2.getName(_0x35e648.sender);
    let _0x36863e = await sticker(null, _0x5ffa8a, senderName + '\x20le\x20dio\x20una\x20bofetada\x20a\x20' + _0x35e648['mentionedJid']['map'](_x243a9a => _x243a9a === _0x35e648['sender'] ? 'alguien\x20' : _0x3e4cc2.getName(_x243a9a) + '\x20le\x20dio\x20una\x20bofetada\x20a\x20')['join'](',\x20'));

    _0x3e4cc2['sendFile'](_0x35e648['chat'], _0x36863e, null, { 'asSticker': !![] });
  } catch (_0x110262) {}
};

handler['help'] = ['slap'];
handler['tags'] = ['General'];
handler['command'] = /^slap/i;
handler['register'] = !![];
handler['limit'] = 0x3;

export default handler;
