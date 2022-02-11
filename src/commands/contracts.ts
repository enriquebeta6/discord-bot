// Dependencies
import { SlashCommandBuilder, hyperlink } from '@discordjs/builders';

// Typings
import { CommandInteractionWithClientWithCommands } from '../typings/discord.d';

export default {
  data: new SlashCommandBuilder()
    .setName('contracts')
    .setDescription('Replies with all project contracts!'),
  async execute(interaction: CommandInteractionWithClientWithCommands) {
    const {
      TOYS_LEGEND_DONATION_CONTRACT_ADDRESS = '',
      TOYS_LEGEND_WHITE_LIST_CONTRACT_ADDRESS = '',
    } = process.env;

    const whitelist = hyperlink(
      TOYS_LEGEND_WHITE_LIST_CONTRACT_ADDRESS,
      `https://bscscan.com/address/${TOYS_LEGEND_WHITE_LIST_CONTRACT_ADDRESS}`
    );

    const donations = hyperlink(
      TOYS_LEGEND_DONATION_CONTRACT_ADDRESS,
      `https://bscscan.com/address/${TOYS_LEGEND_DONATION_CONTRACT_ADDRESS}`
    );

    const replyMessage = [
      `Official Toys Legend Contracts`,
      `📑 WhiteList: ${whitelist}`,
      `📑 Donations: ${donations}`,
    ].join('\n\n');

    await interaction.reply(replyMessage);
  },
};
