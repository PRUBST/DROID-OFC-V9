export async function all(m) {

    // cuando alguien envía un enlace de un grupo al dm del bot
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('Abre este enlace')) && !m.isBaileys && !m.isGroup) {
     this.sendButton(m.chat, `Invitar bot a un grupo 
        
  Hola 👋🏻 @${m.sender.split('@')[0]} 
  quieres rentar el bot para tú grupo? 
  Usa el comando: /join más el enlace de tu grupo.
ejemplo: /join https://chat.whatsapp.com/GQnDkiNEyio2euVeq9FMkV


 m, { mentions: [m.sender] })
  } 

   return !0
}