// Dependencies
import { SlashCommandBuilder } from '@discordjs/builders';

// Typings
import { CommandInteractionWithClientWithCommands } from '../typings/discord.d';

// Command
import linkCommand from './links';

export default {
  data: new SlashCommandBuilder()
    .setName('token')
    .setDescription('Replies with token info!'),
  async execute(interaction: CommandInteractionWithClientWithCommands) {
    const replyMessage = [
      'IMPORTANT',
      `Our TLC Token (Toys Legend Coin) is not yet listed.`,
      `As soon as it is available for sale you will find the contracts on our official website toyslegend.io.`,
      `We recommend you to be informed through our social networks and to be careful with fake tokens.`,
    ].join('\n\n');

    await interaction.reply(replyMessage);
    await linkCommand.execute(interaction, true);
  },
};
