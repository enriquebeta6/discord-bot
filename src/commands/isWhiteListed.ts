// Dependencies
import { SlashCommandBuilder } from '@discordjs/builders';

// Typings
import { CommandInteractionWithClientWithCommands } from '../typings/discord.d';

// Services
import { toysLegendWhiteList } from '../services/toysLegendWhiteList';

export default {
  data: new SlashCommandBuilder()
    .setName('iswhitelisted')
    .setDescription('Verify if the wallet is whitelisted!')
    .addStringOption((option) =>
      option
        .setName('address')
        .setDescription('The wallet address to verify')
        .setRequired(true)
    ),
  async execute(interaction: CommandInteractionWithClientWithCommands) {
    const address = interaction.options.getString('address');

    if (!address) {
      await interaction.reply('You need to provide an address!');

      return;
    }

    const result = await toysLegendWhiteList.whitelist(address);

    const replyMessage = result
      ? `You're whitelisted`
      : `You aren't whitelisted`;

    await interaction.reply(replyMessage);
  },
};
