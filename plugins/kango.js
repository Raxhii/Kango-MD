const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "Kango",
    desc: "Check bot online or not.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `👋 𝙷𝚎𝚕𝚕𝚘 ${pushname} 𝙸'𝚖 not dead yet

*I'm Kango MD Whatsapp Bot Created By Hector Manuel 🍂✨*

| *Version*: 1.0.0
| *Memory*: 38.09MB/7930MB
| *Owner*: Hector Manuel

I am Kango md whatsapp bot. How can I help you.
To get the menu, type as .menu . If you need to know something about the bot,
type as owner and direct the question to me.
You can also recommend me to you sis 😄..Good day.

*°🇬🇭™️ 𝐊𝐚𝐧𝐠𝐨-𝐌𝐃*

 > © ▂▃▅▇█▓▒░𝙿𝚘𝚠𝚎𝚛𝚎𝚍 𝙱𝚢 𝙷𝚎𝚌𝚝𝚘𝚛 𝙼𝚊𝚗𝚞𝚎𝚕░▒▓█▇▅▃▂`
return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
