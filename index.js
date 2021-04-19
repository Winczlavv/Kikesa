const discord = require('discord.js');
const bot = new discord.Client();

const config = require('./config.json');
bot.config = config;
const prefix = bot.config.prefix

bot.login(config.token);

bot.on('ready', () => {

    console.log(`${bot.user.username} est en ligne dans ${bot.guilds.cache.size} serveur(s)`)

    let statuses = ['bullying sammy'];

    setInterval(() => {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "PLAYING"})
    }, 3000);


    setInterval(function() {
        var date = new Date();
        var heure = date.getHours();
        var guild = bot.guilds.cache.get("757260530384764928");
        var martin = guild.members.cache.get("425430874645856287");
    
        if(heure === 00) {
            
            martin.send("SAMMY < ALL");
            console.log("CHEH")
        }
     }, 1);
});
