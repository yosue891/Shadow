import PhoneNumber from 'awesome-phonenumber';

let handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, { react: { text: '👋', key: m.key } });

  let creators = [
    {
      number: '523328418129',
      name: 'Miku',
      org: 'Creador',
      label: 'Creador +52 33 2841 8129',
      region: 'México',
      email: 'miku@example.com',
      website: 'https://miku-bot.vercel.app/',
      description: 'Bot oficial de Miku',
    },
    {
      number: '527891030681',
      name: 'Miku Dev',
      org: 'Creador',
      label: 'Creador +52 789 103 0681',
      region: 'México',
      email: 'devmiku@example.com',
      website: 'Próximamente',
      description: 'Desarrollador del bot',
    },
  ];

  let contacts = creators.map(({ number, name, org, label, region, email, website, description }) => {
    let cleanNumber = number.replace(/[^0-9]/g, '');
    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name};;;
FN:${name}
ORG:${org}
TEL;type=CELL;waid=${cleanNumber}:${PhoneNumber('+' + cleanNumber).getNumber('international')}
X-ABLabel:${label}
EMAIL;type=INTERNET:${email}
X-ABLabel:Email
ADR:;;${region};;;;
X-ABLabel:Region
URL:${website}
X-ABLabel:Website
NOTE:${description}
END:VCARD`.trim();

    return { vcard, displayName: name };
  });

  await conn.sendMessage(m.chat, {
    contacts: {
      displayName: 'Creadores',
      contacts
    }
  }, { quoted: m });

  // Mensaje personalizado después de enviar los contactos
  await conn.sendMessage(m.chat, {
    text: 'Este es el número de mis creadores 😸❤️'
  }, { quoted: m });
};

handler.help = ['creadores'];
handler.tags = ['info'];
handler.command = ['creador', 'owner', 'dueño', 'creadores'];

export default handler;
