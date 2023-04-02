import fetch from 'node-fetch'
import moment from 'moment-timezone'
import { promises, readFileSync } from 'fs'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, command, text }) => {
let { limit, role, level, exp, premiumTime } = db.data.users[m.sender]
  let name = await conn.getName(m.sender)
  m.reply(`${htki} Menampilkan Bug Menu ${htka}`)
  let tag = `@${m.sender.replace(/@.+/, '')}`
  let zyko = `${ucapan()}, ${tag}`
  let res = JSON.parse(readFileSync('./json/emoji.json'))
  let em = res.emoji
  let imgr = flaaa2
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let bug = `
█▓▒░►───────═❏ 
█❏ *ɴᴀᴍᴇ:* ${name}
█❏ *ᴛᴀɢ:* ${tag}
█❏ *sᴛᴀᴛᴜᴀ:* ${premiumTime > 0 ? 'Premium' : 'Free user' }
█❏ *ʟɪᴍɪᴛ:* ${limit}
█❏ *ʀᴏʟᴇ:* ${role}
█❏ *ʟᴇᴠᴇʟ:* ${level}
█❏ *xᴘ:* ${exp}
█▓▒░►───────═❏
         
╔════ ≪ °*𝕭𝖚𝖌 𝕰𝖒𝖔𝖙𝖊*° ≫ ════╗
║❏➣ ${usedPrefix}🌹 628xxxx
║❏➣ ${usedPrefix}🌻 628xxxx
║❏➣ ${usedPrefix}😎 628xxxx
║❏➣ ${usedPrefix}👽 628xxxx
║❏➣ ${usedPrefix}🗿 628xxxx
║❏➣ ${usedPrefix}😃 628xxxx
║❏➣ ${usedPrefix}💀 628xxxx
║❏➣ ${usedPrefix}😅 628xxxx
║❏➣ ${usedPrefix}🥶 628xxxx
║❏➣ ${usedPrefix}®️ 628xxxx
║❏➣ ${usedPrefix}🐓 628xxxx
║❏➣ ${usedPrefix}😱 628xxxx
║❏➣ ${usedPrefix}🍩 628xxxx
║❏➣ ${usedPrefix}😝 628xxxx
║❏➣ ${usedPrefix}💩 628xxxx
║❏➣ ${usedPrefix}🤬 628xxxx
║❏➣ ${usedPrefix}😈 628xxxx
║❏➣ ${usedPrefix}🌷 628xxxx
║❏➣ ${usedPrefix}🌹 628xxxx
╚════ ≪ °${nameown}° ≫ ════╝

╔════ ≪ °*𝕭𝖚𝖌 𝕲𝖗𝖔𝖚𝖕*° ≫ ════╗
║❏➣ ${usedPrefix}buggc 62888@g.us
║❏➣ ${usedPrefix}buggcrash 62888@g.us
╚════ ≪ °${nameown}° ≫ ════╝

𝗕𝘁 : 𝗟𝗲𝗴𝗮𝗰𝘆 𝗕𝗼𝘁
*𝗡𝗼𝘁𝗲:* 𝗝𝗮𝗻𝗴𝗮𝗻 𝘀𝗮𝗹𝗮𝗵 𝗴𝘂𝗻𝗮𝗸𝗮𝗻 𝗳𝗶𝘁𝘂𝗿 𝗯𝘂𝗴 𝗯𝗼𝘁 𝗶𝗻𝗶

*𝗡𝗼𝘁𝗲:* 𝗚𝘂𝗻𝗮𝗸𝗮𝗻𝗹𝗮𝗵 𝗳𝗶𝘁𝘂𝗿 𝗯𝘂𝗴 𝗯𝗼𝘁 𝗶𝗻𝗶 𝘂𝗻𝘁𝘂𝗸 𝗼𝗿𝗮𝗻𝗴 𝘆𝗮𝗻𝗴 𝗯𝗲𝗿𝘀𝗮𝗹𝗮𝗵 `
conn.send2ButtonImg(m.chat, imgr + 'Bug Menu', zyko, bug + '\n\n' + botdate + '\n\n' + wm, em.getRandom() + ' Menu', '.menu', em.getRandom() + 'Owner', '.owner',  fkontak, { contextInfo: { externalAdReply: { showAdAttribution: true,
  mediaUrl: 'https://chat.whatsapp.com/FQH6CI63LJCBTySzClHrrg',
  mediaType: 2, 
  description: sgc,
  title: "𝗝𝗼𝗶𝗻 𝗞𝘂𝘆",
  body: wm2,
  thumbnail: fs.readFileSync('./thumbnail.jpg'),
  sourceUrl: sig, 
}}
  })
}   
handler.help = ['bugmenu']
handler.tags = ['bugmenu']
handler.command = /^(bugmenu)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}