export async function before(m, { conn, isAdmin, isBotAdmin, isROwner }) {
  if (m.isBaileys && m.fromMe) return !0
  if (m.isGroup) return !1
  if (!m.message) return !0
  if (m.sender === conn.user?.jid) return
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('code') || m.text.includes('qr')) return !0

  const chat = global.db.data.chats[m.chat]
  const bot = global.db.data.settings[conn.user.jid] || {}

  // Evita responder a newsletters
  if (m.chat === '120363401404146384@newsletter') return !0

  if (bot.antiPrivate && !isROwner) {
    const groupLink = 'https://chat.whatsapp.com/FjEcxfnZrB8IHRva32CJXw?mode=ems_copy_t' // Reemplaza con tu enlace real
    const imageUrl = 'https://qu.ax/prDPR.jpg' // Reemplaza con la URL de tu imagen

    const caption = `ꕥ Hola @${m.sender.split`@`[0]}, mi dueño ha desactivado los comandos en los chats privados. Serás bloqueado.\n\nSi deseas usar el bot, únete a nuestro grupo:\n${groupLink}`

    await conn.sendFile(m.chat, imageUrl, 'grupo.jpg', caption, m, false, { mentions: [m.sender] })
    await conn.updateBlockStatus(m.chat, 'block')
  }

  return !1
      }
