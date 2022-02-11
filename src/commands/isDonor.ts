// Dependencies
import { SlashCommandBuilder } from '@discordjs/builders';

// Typings
import { CommandInteractionWithClientWithCommands } from '../typings/discord.d';

// Services
import { toysLegendDonation } from '../services/toysLegendDonation';

export default {
  data: new SlashCommandBuilder()
    .setName('isdonor')
    .setDescription('Verify if the wallet is a donor!')
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

    const result = await toysLegendDonation.isDonator(address);

    const replyMessage = result ? `You're a donor` : `You aren't a donor`;

    await interaction.reply(replyMessage);
  },
};
