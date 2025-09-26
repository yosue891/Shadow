import fetch from 'node-fetch';

let handler = async (m, { conn}) => {
  await m.react('🎀');

  let username = await conn.getName(m.sender);

  // Lista con único contacto
  let list = [
    {
      displayName: "🌸 Hatsune Miku Creator 🌸",
      vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:Hatsune Miku\nTEL;type=CELL;waid=523328418129:+52 33 2841 8129 \nEND:VCARD`
}
  ];

  const canalInfo = {
    title: '💙 Canal Oficial de Miku 💙',
    body: 'Haz clic para ver el canal del bot estilo Miku',
    thumbnailUrl: 'https://qu.ax/LOLkr.jpg',
    sourceUrl: 'https://whatsapp.com/channel/0029Vb6sgWdJkK73qeLU0J0N',
    mediaType: 1,
    renderLargerThumbnail: true
};

  // Enviar contacto con preview
  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: `${list.length} Contacto`,
      contacts: list
},
    contextInfo: {
      externalAdReply: canalInfo
}
}, { quoted: m});

  // Mensaje decorado personalizado estilo Miku
  let txt = `🌸 𝙄𝙉𝙁𝙊 𝘿𝙀 𝙇𝘼 𝘾𝙍𝙀𝘼𝘿𝙊𝙍𝘼 🌸

> 💙 𝗛𝗮𝘁𝘀𝘂𝗻𝗲 𝗠𝗶𝗸𝘂 💙

🎧 𝗘𝗡𝗟𝗔𝗖𝗘 𝗗𝗘𝗟 𝗖𝗔𝗡𝗔𝗟 🎶:
💙 https://whatsapp.com/channel/0029Vb6sgWdJkK73qeLU0J0N

📱 𝗡𝗨́𝗠𝗘𝗥𝗢 𝗗𝗘 𝗠𝗜𝗞𝗨:
+57 317 1514640 ☟
https://wa.me/523328418129?text=

🎀 𝗖𝗢𝗗𝗘 𝗗𝗘𝗟 𝗕𝗢𝗧:
https://wa.me/527289103061?text=.code`;

  // Enviar mensaje decorado con preview al final
  await conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      externalAdReply: canalInfo
}
}, { quoted: m});
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^(owner|creator|creador|dueño)$/i;

export default handler;
