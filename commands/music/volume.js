module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Nie jesteś na kanale głosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteśmy na tym samym kanale głosowym !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} -Nic aktualnie nie !`);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(`${client.emotes.error} - Prosze podaj poprawny numer **(∞ głośność)** !`);

        if (Math.round(parseInt(args[0])) < 0 || Math.round(parseInt(args[0])) > Infinity) return message.channel.send(`${client.emotes.error} - Prosze podaj poprawny numer **(∞ głośność)** !`);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(`${client.emotes.success} - Głośność ustawiona na **${parseInt(args[0])}%** !`);
    },
};