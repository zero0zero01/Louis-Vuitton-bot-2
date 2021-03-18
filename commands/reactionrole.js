module.exports ={
    name: 'reactionrole',
    description: "Lệnh react để nhận role",
    async execute(message,args,Discord,client){
        const channel = '822143575810506832';
        const Team1role=message.guild.roles.cache.find(role => role.name === "Team1");
        const Team2role=message.guild.roles.cache.find(role => role.name === "Team2");

        const T1emoji='👌';
        const T2emoji='👍';
        
        let embed = new Discord.MessageEmbed()
        .setColor('#42eb53')
        .setTitle('Hãy chọn role')
        .setDescription('Chọn số 1 nếu bạn bruh và chọn số 2 nếu bạn lmao\n\n'
        + `${T1emoji} cho bruh\n`
        + `${T2emoji} cho lmao`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(T1emoji);
        messageEmbed.react(T2emoji);
        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
    
            if(reaction.message.channel.id == channel) {
                if(reaction.emoji.name == T1emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Team1role);
                }
                if(reaction.emoji.name == T2emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Team2role);
                }
            } else {return;}
        });
        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;
    
            if(reaction.message.channel.id == channel) {
                if(reaction.emoji.name == T1emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Team1role);
                }
                if(reaction.emoji.name == T2emoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Team2role);
                }
            } else {return;}
        });
    }

}
