const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE","CHANNEL","REACTION"]});

const prefix = "lv";

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Louis Vuitton Bot is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'bruh'){
        client.commands.get('bruh').execute(message,args);
    }
    if(command === 'embeds'){
        client.commands.get('embeds').execute(message,args,Discord);
    }
    else if(command == 'clear'){
        client.commands.get('clear').execute(message,args);
    }
    else if(command == 'kick'){
        client.commands.get('kick').execute(message,args);
    }
    else if(command == 'ban'){
        client.commands.get('ban').execute(message,args);
    }
    else if(command == 'reactionrole'){
        client.commands.get('reactionrole').execute(message,args,Discord,client);
    }
});

client.login('ODIyMTA2NzA3ODUzMTgwOTc5.YFNciQ.BAGE0tGsXVAdMnVTZJhIKw-ZDmM');