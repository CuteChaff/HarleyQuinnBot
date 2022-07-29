const Discord = require("discord.js")

const TOKEN = "OTk4MjUzOTcxMzgwNjU0MTQx.GkWiSg.CPL2MAui3MhK44hTDppIaFQ_36DrAK86G2fiHM"

const client = new Discord.Client({
    intents: [
       "Guilds",
       "GuildMessages"
    ]  
    
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messagecreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello")
    }
}) 

client.login(TOKEN)