import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
let kataanimesad = pickRandom(global.kataanine)
	let url = 'https://api.lolhuman.xyz/api/random/husbu?apikey=2da1fcd209f20ae428d8482f'
	let cap = `🐦Kataanimesad: ${kataanimesad}\n     ${wm}`
	conn.sendButton(m.chat, 'Bojone Gepenk🐦', cap, await(await fetch(url)).buffer(), [['Menu', '.menuv2',],['Next',`.${command}`,]],m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.limit = true
export default handler
global.kataanine = [
        "ᴅɪ ᴅᴜɴɪᴀ ꜱᴀɴᴀ, ᴍᴀᴜᴘᴜɴ ᴅɪ ᴅᴜɴɪᴀ ꜱɪɴɪ, ᴍᴇɴᴀɴɢɪꜱ ᴅɪꜱᴀᴀᴛ ꜱᴇᴅɪʜ ɪᴛᴜ ᴛᴀᴋ ᴀᴘᴀ. – ᴋɪʀɪᴛᴏ",
        "ᴀᴋᴜ ᴍᴇɴʏᴜᴋᴀɪᴍᴜ, ʙᴀʜᴋᴀɴ ᴅɪꜱᴀᴀᴛ ᴋᴀᴜ ᴍᴇᴍɪʟɪʜ ᴅɪᴀ, ᴀᴋᴜ ꜱᴀɴɢᴀᴛ ᴛᴇʀʟᴜᴋᴀ ᴅᴀɴ ꜱᴇᴅɪʜ. – ᴛᴏᴜᴍᴀ ᴋᴀᴢᴜꜱᴀ",
        "ᴍᴜʟᴀ-ᴍᴜʟᴀ, ᴋᴀᴜ ʜᴀʀᴜꜱ ᴍᴇɴɢᴜʙᴀʜ ᴅɪʀɪᴍᴜ ꜱᴇɴᴅɪʀɪ, ᴀᴛᴀᴜ ᴛᴀᴋ ᴀᴋᴀɴ ᴀᴅᴀ ʏᴀɴɢ ʙᴇʀᴜʙᴀʜ ᴜɴᴛᴜᴋᴍᴜ. – ɢɪɴᴛᴏᴋɪ",
        "ꜱᴀʏᴀ ᴅᴀᴛᴀɴɢ ᴜɴᴛᴜᴋᴍᴜ, ɪᴛᴜ ᴛɪᴅᴀᴋ ᴍᴜᴅᴀʜ, ᴋᴀʀᴇɴᴀ ᴋᴀᴜ ꜱᴀɴɢᴀᴛ ᴊᴀᴜʜ. – ᴛᴀᴋɪ ᴛᴀᴄʜɪʙᴀɴᴀ",
        "ᴍᴇꜱᴋɪᴘᴜɴ ᴍᴇɴʏᴀᴋɪᴛᴋᴀɴ ᴅᴀɴ ꜱᴜʟɪᴛ, ꜱᴇᴛɪᴀᴘ ᴏʀᴀɴɢ ʜᴀʀᴜꜱ ᴍᴇɴɢʜᴀʀɢᴀɪ ᴀʀᴛɪɴʏᴀ ʜɪᴅᴜᴘ. – ʏᴀᴛᴏ, ɴᴏʀᴀɢᴀᴍɪ",
        "ꜱᴇᴄᴀʀᴀ ʙᴀᴛɪɴ ᴀᴋᴜ ᴛᴇʀꜱɪᴋꜱᴀ, ꜱᴇᴄᴀʀᴀ ᴇᴍᴏꜱɪ ᴀᴋᴜ ᴋᴀᴄᴀᴜ, ꜱᴇᴄᴀʀᴀ ᴍᴇɴᴛᴀʟ ᴀᴋᴜ ᴅᴇᴘʀᴇꜱɪ, ᴛᴀᴘɪ ꜱᴇᴄᴀʀᴀ ꜰɪꜱɪᴋ ᴀᴋᴜ ᴛᴇʀꜱᴇɴʏᴜᴍ. –ɴᴀʀᴜᴛᴏ",
        "ᴋᴀᴜ ᴛᴀᴋᴋᴀɴ ʙɪꜱᴀ ᴍᴇɴɢʜɪɴᴅᴀʀ ʟᴀʀɪ, ᴛᴇʀʟᴇʙɪʜ ᴍᴇɴɢʜɪɴᴅᴀʀ ᴅᴀʀɪ ꜱᴇꜱᴜᴀᴛᴜ ʏᴀɴɢ ɪɴɢɪɴ ᴋᴀᴜ ʟᴜᴘᴀᴋᴀɴ. –ɢɪɴᴛᴀᴍᴀ",
        "ᴍᴇꜱᴋɪ ᴍᴀᴛᴀᴍᴜ ᴘᴇɴᴜʜ ᴅᴇɴɢᴀɴ ᴀɪʀ ᴍᴀᴛᴀ, ᴀᴋᴜ ᴀᴋᴀɴ ᴛᴇʀꜱᴇɴʏᴜᴍ ᴀɢᴀʀ ᴋᴀᴜ ᴛᴀᴋ ᴍᴇʀᴀꜱᴀ ꜱᴇᴅɪʜ. –ᴘᴇᴀᴄᴇ ꜱɪɢɴ",
        "ꜱᴀɴᴀᴇ ꜱᴀɴ ᴍᴇɴɢᴀᴛᴀᴋᴀɴ ᴋᴇᴘᴀᴅᴀ ꜱᴀʏᴀ, ᴛᴇᴍᴘᴀᴛ ᴅɪᴍᴀɴᴀ ꜱᴀʏᴀ ʙɪꜱᴀ ᴍᴇɴᴀɴɢɪꜱ ᴀᴅᴀʟᴀʜ ᴅɪ ᴛᴏɪʟᴇᴛ, ᴀᴛᴀᴜ ᴅɪ ʟᴇɴɢᴀɴ ᴀʏᴀʜ. – ᴜꜱʜɪᴏ ᴏᴋᴀᴢᴀᴋɪ.",
        "ᴋᴀʟᴀᴜ ɪᴛᴜ ᴀᴅᴀʟᴀʜ ᴋᴇɴᴀɴɢᴀɴ ʏᴀɴɢ ʙᴇʀᴀʀᴛɪ, ᴊᴀɴɢᴀɴ ᴅɪʟᴜᴘᴀᴋᴀɴ. ꜱᴇʙᴀʙ ᴊɪᴋᴀ ᴍᴀɴᴜꜱɪᴀ ᴍᴀᴛɪ, ᴍᴇʀᴇᴋᴀ ʜᴀɴʏᴀ ʙɪꜱᴀ ʜɪᴅᴜᴘ ᴅᴀʟᴀᴍ ᴋᴇɴᴀɴɢᴀɴ ᴏʀᴀɴɢ ʟᴀɪɴ - (ᴅᴇᴛᴇᴄᴛɪᴠᴇ ᴄᴏɴᴀɴ)",
        "ʙᴀɢᴀɪᴍᴀɴᴀ ᴋᴀᴍᴜ ʙɪꜱᴀ ʙᴇʀɢᴇʀᴀᴋ ᴍᴀᴊᴜ ᴋᴀʟᴀᴜ ᴋᴀᴍᴜ ᴛᴇʀɪꜱ ᴍᴇɴʏᴇꜱᴀʟɪ ᴍᴀꜱᴀ ʟᴀʟᴜ? - ᴇᴅᴡᴀʀᴅ ᴇʟʀɪᴄ ",
        "ᴘᴇʀʙᴇᴅᴀᴀɴ ᴀɴᴛᴀʀᴀ ᴘᴇᴍᴜʟᴀ ᴅᴀɴ ᴍᴀꜱᴛᴇʀ ᴀᴅᴀʟᴀʜ ʙᴀʜᴡᴀ ᴍᴀꜱᴛᴇʀ ᴛᴇʟᴀʜ ɢᴀɢᴀʟ ʟᴇʙɪʜ ᴅᴀʀɪ ʏᴀɴɢ ᴛᴇʟᴀʜ ᴅɪᴄᴏʙᴀ ᴘᴇᴍᴜʟᴀ. - ᴋᴏʀᴏ-ꜱᴇɴꜱᴇɪ (ᴀɴꜱᴀᴛꜱᴜ ᴋʏᴏᴜꜱʜɪᴛꜱᴜ)",
        "ᴋɪᴛᴀ ʜᴀʀᴜꜱ ᴍᴇɴᴊᴀʟᴀɴɪ ʜɪᴅᴜᴘ ᴋɪᴛᴀ ꜱᴇᴘᴇɴᴜʜɴʏᴀ. ᴋᴀᴍᴜ ᴛɪᴅᴀᴋ ᴘᴇʀɴᴀʜ ᴛᴀʜᴜ, ᴋɪᴛᴀ ᴍᴜɴɢᴋɪɴ ꜱᴜᴅᴀʜ ᴍᴀᴛɪ ʙᴇꜱᴏᴋ. - ᴋᴀᴏʀɪ ᴍɪʏᴀᴢᴏɴᴏ (ꜱʜɪɢᴀᴛꜱᴜ ᴡᴀ ᴋɪᴍɪ ɴᴏ ᴜꜱᴏ)",
        "ꜱᴜᴀᴛᴜ ꜱᴀᴀᴛ ᴀᴋᴀɴ ᴅᴀᴛᴀɴɢ ʜᴀʀɪ ᴅɪ ᴍᴀɴᴀ ꜱᴇᴍᴜᴀ ᴀᴋᴀɴ ᴍᴇɴᴊᴀᴅɪ ᴋᴇɴᴀɴɢᴀɴ. - ᴇʀᴢᴀ ꜱᴄᴀʀʟᴇᴛ (ꜰᴀɪʀʏ ᴛᴀɪʟ)",
        "ᴊɪᴋᴀ ʙᴇʀᴋᴀᴛᴀ ꜱᴇʟᴀᴍᴀᴛ ᴛɪɴɢɢᴀʟ ᴍᴇᴍʙᴜᴀᴛᴍᴜ ꜱᴇᴅɪʜ, ᴍᴀᴋᴀ ᴀᴋᴜ ᴀᴋᴀɴ ᴛɪɴɢɢᴀʟ ᴅɪ ꜱɪꜱɪᴍᴜ. - ɴɪᴄʜᴇ (ᴛᴇɢᴀᴍɪ ʙᴀᴄʜɪ)",
        "ᴀɪʀ ᴍᴀᴛᴀ ᴘᴀʟꜱᴜ ʙɪꜱᴀ ᴍᴇɴʏᴀᴋɪᴛɪ ᴏʀᴀɴɢ ʟᴀɪɴ. ᴛᴀᴘɪ ꜱᴇɴʏᴜᴍᴀɴ ᴘᴀʟꜱᴜ ʜᴀɴʏᴀ ᴀᴋᴀɴ ᴍᴇɴʏᴀᴋɪᴛɪ ᴅɪʀɪᴍᴜ ꜱᴇɴᴅɪʀɪ. - ᴄ.ᴄ (ᴄᴏᴅᴇ ɢᴇᴀꜱꜱ)",
        "ᴛᴇʀꜱᴇɴʏᴜᴍʟᴀʜ ꜱᴇʟᴀʟᴜ ᴡᴀʟᴀᴜᴘᴜɴ ʜᴀᴛɪᴍᴜ ꜱᴇᴅᴀɴɢ ᴛᴇʀʟᴜᴋᴀ. - ᴋᴀɢᴏᴍᴇ (ɪɴᴜʏᴀꜱʜᴀ)",
        "ʟᴇʙɪʜ ʙᴀɪᴋ ᴍᴇɴᴇʀɪᴍᴀ ᴋᴇᴊᴜᴊᴜʀᴀɴ ʏᴀɴɢ ᴘᴀʜɪᴛ, ᴅᴀʀɪ ᴘᴀᴅᴀ ᴋᴇʙᴏʜᴏɴɢᴀɴ ʏᴀɴɢ ᴍᴀɴɪꜱ. - ꜱᴏɪᴄʜɪʀᴏ ʏᴀɢᴀᴍɪ (ᴅᴇᴀᴛʜ ɴᴏᴛᴇ)",
        "ᴋᴇɢᴀɢᴀʟᴀɴ ꜱᴇᴏʀᴀɴɢ ᴘʀɪᴀ ʏᴀɴɢ ᴘᴀʟɪɴɢ ꜱᴜʟɪᴛ ʏᴀɪᴛᴜ ᴋᴇᴛɪᴋᴀ ᴅɪᴀ ɢᴀɢᴀʟ ᴜɴᴛᴜᴋ ᴍᴇɴɢʜᴇɴᴛɪᴋᴀɴ ᴀɪʀ ᴍᴀᴛᴀ ꜱᴇᴏʀᴀɴɢ ᴡᴀɴɪᴛᴀ. - ᴋᴀꜱᴜᴋᴀ ʜᴇɪᴡᴀᴊɪᴍᴀ",
        "ᴀᴋᴜ ᴛᴀᴋ ʙᴇʀɴɪᴀᴛ ᴍᴇɴɢᴜʟᴀɴɢ ᴀᴘᴀᴘᴜɴ, ꜱᴇʙᴀʙ ꜱᴇᴍᴜᴀ ᴘᴇɴᴅᴇʀɪᴛᴀᴀɴ ʏᴀɴɢ ᴋᴜʟᴀʟᴜɪ ᴛᴇʟᴀʜ ᴍᴇᴍʙᴜᴀᴛᴋᴜ ᴍᴇɴᴇᴍᴜᴋᴀɴ ᴋᴇʙᴀʜᴀɢɪᴀᴀɴ ɪɴɪ. -ᴋᴇɴ ᴋᴀɴᴇᴋɪ (ᴛᴏᴋʏᴏ ɢʜᴏᴜʟ)",
        "ᴋᴇɪʜᴅᴜᴘᴀɴ ɪᴛᴜ ꜱᴇᴘᴇʀᴛɪ ʟᴀɴɢɪᴛ ᴛᴇʀᴜꜱ ʙᴇʀɢᴇʀᴀᴋ ᴅᴀɴ ʙᴇʀᴘɪɴᴅᴀʜ. ʟᴀɴɢɪᴛ ᴛᴀᴋ ᴀᴋᴀɴ ᴍᴇɴᴊᴀᴅɪ ᴄᴇʀᴀʜ ꜱᴇʟᴀᴍᴀɴʏᴀ, ꜱᴀʟᴊᴜ ᴘᴜɴ ᴛᴀᴋ ꜱᴇʟᴀᴍᴀɴʏᴀ ᴊᴀᴛᴜʜ. ᴛᴀɴᴊɪʀᴏᴜ (ᴋɪᴍᴇᴛꜱᴜ ɴᴏ ʏᴀɪʙᴀ)",
        "ᴋᴇᴍᴀɴɢᴀɴ ʏᴀɴɢ ᴅɪᴘᴇʀᴏʟᴇʜ ᴅᴀʀɪ ᴋᴇʀᴊᴀ ᴋᴇʀᴀꜱ ᴍᴇɴɢʜᴀꜱɪʟᴋᴀɴ ᴋᴇꜱᴇɴᴀɴɢᴀɴ ʏᴀɴɢ ᴊᴀᴜʜ ʟᴇʙɪʜ ʙᴇꜱᴀʀ ᴋᴜʀᴏᴋᴏ (ᴋᴜʀᴏᴋᴏ ɴᴏ ʙᴀꜱᴋᴇᴛ)",
        "ᴀᴋᴜ ᴛɪᴅᴀᴋ ʙɪʟᴀɴɢ ᴋᴀᴍᴜ ᴀᴋᴀɴ ʙᴇʀʜᴀꜱɪʟ ᴊɪᴋᴀ ᴛᴀᴋ ᴍᴇɴʏᴇʀᴀʜ, ᴛᴀᴘɪ ᴊɪᴋᴀ ᴋᴀᴍᴜ ᴍᴇɴʏᴇʀᴀʜ ᴍᴀᴋᴀ ᴛɪᴅᴀᴋ ᴀᴅᴀ ʟᴀɢɪ ʏᴀɴɢ ᴛᴇʀꜱɪꜱᴀ ᴀᴏᴍɪɴᴇ ᴅᴀɪᴋɪ (ᴋᴜʀᴏᴋᴏ ɴᴏ ʙᴀꜱᴋᴇᴛ)",
        "ʜᴜᴋᴜᴍ ᴛɪᴅᴀᴋʟᴀʜ ᴍᴇʟɪɴᴅᴜɴɢɪ ᴏʀᴀɴɢ-ᴏʀᴀɴɢ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ʟᴀʜ ʏᴀɴɢ ᴍᴇʟɪɴᴅᴜɴɢɪ ʜᴜᴋᴜᴍ. ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ꜱᴇʟᴀʟᴜ ᴍᴇᴍʙᴇɴᴄɪ ᴋᴇᴊᴀʜᴀᴛᴀɴ ᴅᴀɴ ꜱᴇʟᴀʟᴜ ᴍᴇɴᴄᴀʀɪ ʜɪᴅᴜᴘ ꜱᴇʟᴀʏᴀᴋɴʏᴀ. ʜᴜᴋᴜᴍ ᴀᴅᴀʟᴀʜ ᴘᴇʀᴋᴜᴍᴘᴜʟᴀɴ ᴅᴀʀɪ ᴘᴇʀᴀꜱᴀᴀɴ ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ɪᴛᴜ. ɪᴛᴜ ʙᴜᴋᴀɴʟᴀʜ ᴘᴇɴɢᴀᴡᴀꜱᴀɴ ᴍᴀᴜᴘᴜɴ ꜱɪꜱᴛᴇᴍ. ɪᴛᴜ ᴀᴅᴀʟᴀʜ ᴘᴇʀᴀꜱᴀᴀɴ ʏᴀɴɢ ʟᴇᴍᴀʜ ᴅᴀɴ ᴛᴀᴋ ᴛᴇʀɢᴀɴᴛɪᴋᴀɴ ʏᴀɴɢ ꜱᴇᴍᴜᴀ ᴏʀᴀɴɢ ᴍɪʟɪᴋɪ ᴅᴀʟᴀᴍ ʜᴀᴛɪ ᴍᴇʀᴇᴋᴀ. ᴅɪʙᴀɴᴅɪɴɢᴋᴀɴ ᴅᴇɴɢᴀɴ ᴀᴍᴀʀᴀʜ ᴅᴀɴ ᴋᴇʙᴇɴᴄɪᴀɴ ɪᴛᴜ ᴀᴅᴀʟᴀʜ ꜱᴇꜱᴜᴀᴛᴜ ʏᴀɴɢ ʙɪꜱᴀ ꜱᴀɴɢᴀᴛ ᴍᴜᴅᴀʜ ʜᴀɴᴄᴜʀ. ꜱᴇᴘᴀɴᴊᴀɴɢ ᴡᴀᴋᴛᴜ, ᴏʀᴀɴɢ-ᴏʀᴀɴɢ ʙᴇʀᴅᴏᴀ ᴜɴᴛᴜᴋ ᴅᴜɴɪᴀ ʏᴀɴɢ ʟᴇʙɪʜ ʙᴀɪᴋ. ᴀɢᴀʀ ᴅᴏᴀ-ᴅᴏᴀ ɪᴛᴜ ᴛᴇʀᴜꜱ ᴍᴇᴍᴘᴜɴʏᴀɪ ᴍᴀᴋɴᴀ, ᴍᴀᴋᴀ ᴋɪᴛᴀ ʜᴀʀᴜꜱ ʙᴇʀᴜꜱᴀʜᴀ ʏᴀɴɢ ᴛᴇʀʙᴀɪᴋ ᴜɴᴛᴜᴋ ᴍᴇʟɪɴᴅᴜɴɢɪɴʏᴀ ʜɪɴɢɢᴀ ᴀᴋʜɪʀ. ʙᴇʀᴊᴜᴀɴɢᴀɴʟᴀʜ!!! -ᴛꜱᴜɴᴇᴍᴏʀɪ ᴀᴋᴀɴᴇ (ᴘꜱʏᴄʜᴏ-ᴘᴀꜱꜱ)",
        "ᴊᴀɴɢᴀɴ ᴋᴀᴛᴀᴋᴀɴ ᴛɪᴅᴀᴋ ᴍᴜɴɢᴋɪɴ ʟᴀɢɪ. ᴋᴀᴛᴀ ɪᴛᴜ ᴊᴜꜱᴛʀᴜ ᴍᴇɴɢʜɪʟᴀɴɢᴋᴀɴ ᴋᴇꜱᴇᴍᴘᴀᴛᴀɴ -ᴀʀɪᴀ (ʜɪᴅᴀɴ ɴᴏ ᴀʀɪᴀ)",
        "ᴊᴀɴɢᴀɴ ᴍᴇɴʏᴇʀᴀʜ ᴜɴᴛᴜᴋ ʙᴇʀᴋᴀᴛᴀ ᴀᴋᴜ ɪɴɢɪɴ ʜɪᴅᴜᴘ ɪɴɪ ʙᴇʀᴀʀᴛɪ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴍᴇɴᴊᴀᴅɪ ᴏʀᴀɴɢ ʏᴀɴɢ ᴍᴇᴍʙᴏꜱᴀɴᴋᴀɴ ꜱᴇᴘᴇʀᴛɪ ɪᴛᴜ. ᴊɪᴋᴀ ᴘᴜɴʏᴀ ᴋᴇʙᴇʀᴀɴɪᴀɴ ᴜɴᴛᴜᴋ ᴛɪᴅᴀᴋ ᴍᴇɴʏᴇʀᴀʜ, ᴋᴀᴜ ᴀᴋᴀɴ ʙɪꜱᴀ",
        "ᴀᴋᴜ ᴛᴀᴋ ʙɪꜱᴀ ꜱᴇᴍᴜᴅᴀʜ ɪᴛᴜ ᴍᴇɴɢᴀᴛᴀᴋᴀɴ ᴋᴇꜱɪᴍᴘᴜʟᴀɴ ʜᴀɴʏᴀ ᴅᴀʀɪ ᴘᴇʀᴋᴀᴛᴀᴀɴ ᴏʀᴀɴɢ ʟᴀɪɴ, ᴀᴋᴜ ʙᴀʀᴜ ʙɪꜱᴀ ᴍᴇᴍᴜᴛᴜꜱᴋᴀɴ ᴀᴘᴀ ʏᴀɴɢ ᴋᴜʟᴀᴋᴜᴋᴀɴ ꜱᴇᴛᴇʟᴀʜ ᴍᴇʟɪʜᴀᴛɴʏᴀ ꜱᴇɴᴅɪʀɪ. -ᴋᴇɴ ᴋᴀɴᴇᴋɪ (ᴛᴏᴋʏᴏ ɢʜᴏᴜʟ)",
        "ᴛɪᴅᴀᴋ ꜱᴇᴍᴜᴀ ʜᴀʟ ᴅɪ ᴅᴜɴɪᴀ ɪɴɪ ʙɪꜱᴀ ᴅɪʙᴇʟɪ ᴅᴇɴɢᴀɴ ᴜᴀɴɢ -ᴋᴜʀᴏᴏ ʜᴀᴢᴀᴍᴀ (ʏᴏᴜɴɢ ʙʟᴀᴄᴋ)",
        "ᴘᴀʜʟᴀᴡᴀɴ ʙᴜᴋᴀɴ ʜᴀɴʏᴀ ᴛᴇʀᴜꜱ ᴍᴇɴʏᴇʟᴀᴍᴀᴛᴋᴀɴ ꜱɪᴀᴘᴀ ᴘᴜɴ ʏɢ ᴅɪʜᴀᴅᴀᴘᴀɴɴʏᴀ ꜱᴀᴊᴀ. ᴛᴇʀᴋᴀᴅᴀɴɢ ᴘᴀʜʟᴀᴡᴀɴ ᴊᴜɢᴀ ᴘᴇʀʟᴜ ᴍᴇɴɢᴏʀʙᴀɴᴋᴀɴ ᴅɪʀɪ ᴜɴᴛᴜᴋ ᴍᴇɴʏᴇʟᴀᴍᴀᴛᴋᴀɴ ʙᴀɴʏᴀᴋ ᴏʀᴀɴɢ (ᴛꜱᴜʙᴀꜱᴀ ᴍɪꜱᴜᴅᴀᴄʜɪ ~ ɢᴀᴛᴄʜᴀᴍᴀɴ ᴄʀᴏᴡᴅꜱ)"
]
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

