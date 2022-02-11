module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteśmy na tym samym kanale głosowym !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nic aktualnie nie gram !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Ale jak mam gosciu wznowic już wznowioną piosenkę?!`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Piosenka ${client.player.getQueue(message).playing.title}wznowiona !`);
    },
};