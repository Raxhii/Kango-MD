const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📁",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 ʜᴇʟʟᴏ ᴍʏ ᴅᴇᴀʀ ғʀɪᴇɴᴅ
     ${pushname}*
          
📍ʜᴇʀᴇ ɪs ᴛʜᴇ ʀᴇᴘᴏ ʟɪɴᴋ ғᴏʀ ᴋᴀɴɢᴏ xᴍᴅ❤️‍🔥👇

👨‍💻◦ https://github.com/OfficialHectorManuel/KANGO-XMD.git

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗎𝖻𝗌𝖼𝗋𝗂𝖻𝖾 𝖬𝗒 𝖸𝗈𝗎𝗍𝗎𝖻𝖾 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://youtube.com/@official_manuel 

📍𝖯𝗅𝖾𝖺𝗌𝖾 𝖥𝗈𝗅𝗅𝗈𝗐 𝖬𝗒 𝖶𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 👇

👨‍💻◦ https://whatsapp.com/channel/0029Va8YUl50bIdtVMYnYd0E

👨‍💻◦ https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ*
`
await conn.sendMessage(from,{image:{url: `https://i.imgur.com/05b4RaE.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
