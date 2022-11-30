/** 

Yg Mau Sv Nomerku?

wa.me/6285875158363

Minimal Kasih Cr kalo mau reupload😡
Create By Dika Ardnt.
Recode By Naze & ( Nama Lu )

Kalau Sampai Ketemu Lagi Creator Bot
Yg Reupload Tanpa Kasih Cr 
Sc Akan Saya Encode

Base : Hisoka
Recode : Naze & ( Nama Lu )

**/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
	lolhuman: 'https://api.lolhuman.xyz',
	males: 'https://malesin.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
	'https://api.lolhuman.xyz': 'a243d5d9b0d811b81d63e6cf',
}

// Other
global.owner = ['628887816980']
global.ownernomer = "628887816980"
global.premium = ['628887816980']
global.packname = 'GansBOTz'
global.author = 'By Deffri Gans'
global.titlebot = `⫹⫺ WhatsApp Bot | By 𝙳𝚎𝚏𝚏𝚛𝚒 𝙶𝚊𝚗𝚜`
global.sessionName = 'deff'  //jangan diganti bro nanti error
global.jumlha = '999'
global.jumhal = '100000000000000'
global.jumlah = '1000000000'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: '✅Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    errapi: 'Error Mungkin Apikey Tidak Valid!',
    errmor: 'Error Kesalahan Sistem',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 20
}
global.thumb = fs.readFileSync('./media/image/logo.jpg')
global.faall = fs.readFileSync('./media/image/fake.jpg')
global.mygit = 'https://github.com/deffrigans'
global.myig = 'https://instagram.com/b4c00t.dtz'
global.myyt = 'https://youtube.com/channel/UCmEQy5B3GhmfNVSrHEzv-uA'
global.myytv = 'https://youtu.be/mNlNmrpifHE'
global.mygc = "https://chat.whatsapp.com/E4mPMyGkTmpCdlJiVDoLp8"
global.botname = 'GansBOTz-MD'
global.titlebot = `⫹⫺ WhatsApp Bot | By 𝙳𝚎𝚏𝚏𝚛𝚒 𝙶𝚊𝚗𝚜`
global.akulaku = 'Bot By Deffri Gans'
global.ytname = 'YT Surviv OFC'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
