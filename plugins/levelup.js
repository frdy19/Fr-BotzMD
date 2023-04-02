import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
ʟᴇᴠᴇʟ ${user.level} 📊
*${user.exp - min} / ${xp}*
ᴋᴜʀᴀɴɢ *${max - user.exp}* ʟᴀɢɪ! ✨
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `.             ${user.role}`
        let str = `
*🎉 𝗦 𝗘 𝗟 𝗔 𝗠 𝗔 𝗧 🎉*
*${before}* ➔ *${user.level}* [ *${user.role}* ]`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendButton(m.chat, str, botdate, img, [['ɪɴᴠᴇɴᴛᴏʀʏ', '.inv']], m)
        } catch (e) {
            conn.sendButton(m.chat, str, botdate, img, [['ɪɴᴠᴇɴᴛᴏʀʏ', '.inv']], m)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler