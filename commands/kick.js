module.exports ={
    name: 'kick',
    description: "Lệnh kick",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("Thành viên đã bị kick");
        }else{
            message.channel.send('Bạn không thể kick thành viên này');
        }
    }
}