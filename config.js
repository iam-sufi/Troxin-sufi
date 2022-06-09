//═══════[© 2022 Troxin-sufi Bot Inc.]════════\\

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': 'Troxin777', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['917510734295'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['917510734295'] //another owner number
global.premium = ['917510734295'] //premium number
global.pengguna = 'Sufi' //username
global.botnma = '⁩ꪶ𝛿𝑈𝐹𝛪-𝛽𝛳𝛵ꫂ⁩' //bot name
global.ownernma = 'ansif' //owner name
global.packname = '⁩⁩⁩⁩⁩ꪶ𝛿𝑈𝐹𝛪-𝛽𝛳𝛵ꫂ' //sticker package name
global.author = '⁩ꪶ𝛿𝑈𝐹𝛪-𝛽𝛳𝛵ꫂ' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Dᴏɴᴇ ✓',
    admin: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Aᴅᴍɪɴ!',
    botAdmin: 'Bᴏᴛ Mᴜsᴛ Bᴇ Aᴅᴍɪɴ Fɪʀsᴛ!',
    owner: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Oᴡɴᴇʀ',
    group: 'Fᴇᴀᴛᴜʀᴇ Usᴇᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘs!',
    private: 'Fᴇᴀᴛᴜʀᴇs Usᴇᴅ Oɴʟʏ Fᴏʀ Pʀɪᴠᴀᴛᴇ Cʜᴀᴛ!',
    bot: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Iɴ Oɴʟʏ Fᴏʀ Tʜᴇ Bᴏᴛ Nᴜᴍʙᴇʀ',
    wait: 'Pʟᴇᴀsᴇ Wᴀɪᴛ A Mɪɴᴜᴛᴇ ...',
    endLimit: 'Yᴏᴜʀ Dᴀɪʟʏ Lɪᴍɪᴛ Hᴀs Exᴘɪʀᴇᴅ, Tʜᴇ Lɪᴍɪᴛ Wɪʟʟ Bᴇ Rᴇsᴇᴛ Eᴠᴇʀʏ 12 Hᴏᴜʀs',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./TurboMedia/slayer.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
