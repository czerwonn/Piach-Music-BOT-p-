module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filtr [nazwa filtru]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - NIe jesteś na kanale głosowym !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Nie jesteśmy na tym samym kanale głosowym !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - Halo Karthus !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Prosze NAPISZ JAKI FILTR WLACZYC ALBO WYLACZYC TAKIE TRUDNE???????????????`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Takie coś w ogóle istnieje? (...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Dodaję ten filtr do utworu, mała notka: im dłużej trwa piosenka, tym dłużej będzie się mulić bot.`);
        else message.channel.send(`${client.emotes.music} - Wyrzucam ten filtr z utworu, mała notka: im dłuzej trwa pisoenka, tym dłużej będzie się mulić bot`);
    },
};