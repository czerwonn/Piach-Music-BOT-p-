module.exports = {
    name: 'queue',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteśmy na tym samym kanale głosowym !`);

        const queue = client.player.getQueue(message);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Nic nie gram aktualnie !`);

        message.channel.send(`**Kolejka serwerowa - ${message.guild.name} ${client.emotes.queue} ${client.player.getQueue(message).loopMode ? '(powtórka)' : ''}**\nCurrent : ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
            return `**#${i + 1}** - ${track.title} | ${track.author} (ten chłop to chciał : ${track.requestedBy.username})`
        }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `I **${queue.tracks.length - 5}** inne piosenki...` : `W playliście **${queue.tracks.length}** piosenka(i)...`}`));
    },
};