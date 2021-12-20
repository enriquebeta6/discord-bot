// Dependencies
import { SlashCommandBuilder } from '@discordjs/builders';

// Typings
import { CommandInteractionWithClientWithCommands } from '../typings/discord.d';

export default {
  data: new SlashCommandBuilder()
    .setName('website')
    .setDescription('Replies with project website!'),
  async execute(interaction: CommandInteractionWithClientWithCommands) {
    await interaction.reply('https://toyslegend.io/');
  },
};
