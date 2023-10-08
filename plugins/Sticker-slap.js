import { sticker } from '../lib/sticker.js';
import fetch from 'node-fetch';
import MessageType from '@whiskeysockets/baileys';

let handler = async (m, { conn }) => {
  try {
    if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender);
    if (!m.mentionedJid.length) m.mentionedJid.push(m.sender);
    let res = await fetch('https://neko-love.xyz/api/v1/slap');
    let json = await res.json();
    let { url } = json;
    let mentionedNames = [];
    
    for (let user of m.mentionedJid) {
      let contact = conn.contacts[user];
      if (contact) {
        mentionedNames.push(contact.notify);
      } else {
        mentionedNames.push(`+${user.split('@')[0]}`);
      }
    }

    let senderName = conn.contacts[m.sender] ? conn.contacts[m.sender].notify : `+${m.sender.split('@')[0]}`;
    let message = `${senderName} le dio una bofetada a ${mentionedNames.join(', ')}`;
    
    let stiker = await sticker(null, url, message);
    conn.sendFile(m.chat, stiker, null, { asSticker: true });
  } catch (e) {}
};

handler.help = ['slap'];
handler.tags = ['General'];
handler.command = /^slap/i;
handler.register = true;
handler.register = true;

export default handler;