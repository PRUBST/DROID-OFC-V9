import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, text, usedPrefix, command }) => {
        let img = (await axios.get(`https://github.com/DROIDITO1/ryan/blob/main/img%2Fhu.json`)).data
    let stiker = await sticker(null, global.API(`${pickRandom(img)}`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', { asSticker: true }, m)
    throw stiker.toString()   
}

handler.customPrefix = /^(@50258487658|@50240289706|tony|TONY|Tony|hola|Hola|HOLA|Ola|ola)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}