module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteśmy na tym samym kanale głosowym !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Halo Karthus !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Już jest zapauzowane,ty chcesz załamać czasoprzestrzeń czy co?!`);

        const success = client.player.pause(message);

        if (success) message.channel.send(`${client.emotes.success} - Piosenka ${client.player.getQueue(message).playing.title} została zapauzowana !`);
    },
};