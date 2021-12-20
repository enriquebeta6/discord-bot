// Dependencies
import { SlashCommandBuilder, hideLinkEmbed } from '@discordjs/builders';

// Typings
import { CommandInteractionWithClientWithCommands } from '../typings/discord.d';

export default {
  data: new SlashCommandBuilder()
    .setName('links')
    .setDescription('Replies with all project links!'),
  async execute(
    interaction: CommandInteractionWithClientWithCommands,
    isFollowUp = false
  ) {
    const webpage = hideLinkEmbed('https://toyslegend.io/');
    const twitter = hideLinkEmbed('https://twitter.com/ToysLegendNFT');
    const instagram = hideLinkEmbed('https://www.instagram.com/toyslegendnft/');
    const telegram = hideLinkEmbed('https://t.me/toyslegendnft');

    const replyMessage = [
      'Official Toys Legend Networks',
      ``,
      `📣 Web page : ${webpage}`,
      `📣 Twitter : ${twitter}`,
      `📣 Instagram : ${instagram}`,
      `📣 Discord : https://discord.com/invite/fvm54EJFs7`,
      `📣 Telegram : ${telegram}`,
    ].join('\n');

    if (!isFollowUp) {
      await interaction.reply(replyMessage);
    } else {
      await interaction.followUp(replyMessage);
    }
  },
};
