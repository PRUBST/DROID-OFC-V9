import { sticker } from '../lib/sticker.js';
import _0x128946 from 'node-fetch';
import _0xec8d6c from '@whiskeysockets/baileys';

let handler = async (_0x734089, { conn: _0x1952bd }) => {
  try {
    if (_0x734089['quoted']?.['sender']) _0x734089['mentionedJid']['push'](_0x734089['quoted']['sender']);
    if (!_0x734089['mentionedJid']['length']) _0x734089['mentionedJid']['push'](_0x734089['sender']);

    let _0x2d2066 = await _0x128946('https://nekos.life/api/kiss');
    let _0x16385f = await _0x2d2066['json']();
    let { url: _0x1309b9 } = _0x16385f;

    let senderName = _0x1952bd.getName(_0x734089.sender);

    let mentionedNames = _0x734089['mentionedJid']
      .map(_x34d5f8 => _x34d5f8 === _0x734089['sender'] ? 'alguien\x20' : _0x1952bd.getName(_x34d5f8))
      .join(',\x20');

    let message = senderName + (mentionedNames.length > 0 ? '\x20le dio besos a ' + mentionedNames : '\x20te dio besos');

    let _0x20fedb = await sticker(null, _0x1309b9, message);

    await _0x1952bd.sendFile(_0x734089.chat, _0x20fedb, null, { asSticker: true, quoted: _0x734089 });
  } catch (_0x44f6c6) {}
};

handler['command'] = /^(kiss|skiss|kis|besos|beso)$/i;
handler['register'] = true;
handler['limit'] = 3;

export default handler;