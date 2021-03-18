module.exports ={
    name: 'ban',
    description: "Lệnh ban",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send("Thành viên đã bị ban");
        }else{
            message.channel.send('Bạn không thể ban thành viên này');
        }
    }
}