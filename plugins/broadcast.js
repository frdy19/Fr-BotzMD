import moment from 'moment-timezone'

let handler  = async (m, { conn, text }) => {
//━━━━━━━━[ TIMER ]━━━━━━━━//
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let waktuwib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
  let chats = Object.keys(await conn.chats)
    let pesan = m.quoted && m.quoted.text ? m.quoted.text : text
  conn.reply(m.chat, `Mengirim Broadcast Ke ${chats.length} Chat ${chats.length} `, m)

  for (let id of chats) {
let bcbg = `${pickRandom(['https://telegra.ph/file/bca700eefeeed8f2cb054.jpg', 'https://telegra.ph/file/ec9831cc3b7001690d6dd.jpg','https://telegra.ph/file/177f7054ebddc6d1f8375.jpg','https://telegra.ph/file/90d4254ae53b4d268b2b9.jpg','https://telegra.ph/file/a6e4013afa98e283ee6a7.jpg','https://telegra.ph/file/2cf9cf86466d9fad58e52.jpg','https://telegra.ph/file/f62c45fb2e087187f065e.jpg','https://telegra.ph/file/fec157267ed3cf69021e1.jpg','https://telegra.ph/file/419672df2fb86a057cb26.jpg'])}`

       await conn.delay(1500)

       conn.send3ButtonImg(id, bcbg, `${global.namebot} 𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧\n`,`
┏━ ❮❮ 𝗣𝗘𝗦𝗔𝗡 ❯❯
┣❲ ${pesan} ❳
┖─┅┈⸔⸔⬫
┏┬┬┬┬┬┬┬┬┬┬┬┬┬⁛⸙⸙
┃⫹⫺ 𝗥𝗨𝗡𝗧𝗜𝗠𝗘 : ${uptime} ${muptime}
┃⫹⫺ 𝗧𝗔𝗡𝗚𝗚𝗔𝗟 : ${date}
┃⫹⫺ 𝗪𝗔𝗞𝗧𝗨 : ${time}
┖──┈┈┈〠⸙࿉༐
`,
   'Menu','.menu',
     'Owner','.owner',
       'Donasi','.donasi'
       )

     }

  m.reply(`Suksess Broadcastke ${chats.length} `)

}

handler.help = ['broadcast','bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

export default handler

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }