module.exports = {
    name: 'clear',
    description: "Xoá tin nhắn",
    async execute(message,args){
        if(!args[0]) return message.reply("Hãy nhập số tin nhắn mà bạn muốn xoá!");
        if(isNaN(args[0])) return message.reply("Hãy nhập chỉ số!");

        if(args[0]>1000) return message.reply("Bạn không thể xoá hơn 1000 tin nhắn");
        if(args[0]<1) return message.reply("Số tin nhắn muốn xoá phải lớn hơn 0");
        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}