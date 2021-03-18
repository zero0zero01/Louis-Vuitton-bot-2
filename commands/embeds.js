module.exports = {
    name: 'embeds',
    description: "Tạo bảng",
    execute(message, args, Discord){
        const newEmbed= new Discord.MessageEmbed()
        .setColor('#f0ff00')
        .setTitle('LUẬT LỆ!')
        .addFields(
            {name: 'Rule 1', value: 'Hãy tốt'},
            {name: 'Rule 2', value: 'Hãy bruh'},
        )
        .setImage('https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg')
        .setFooter('^stupid cat');
        message.channel.send(newEmbed);
    }
}