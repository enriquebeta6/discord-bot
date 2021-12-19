// Typing
import { CommandInteractionWithClientWithCommands } from '../typings/discord.d';

export default {
  name: 'interactionCreate',
  async execute(interaction: CommandInteractionWithClientWithCommands) {
    if (!interaction.isCommand() || !interaction.client.commands) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      });
    }
  },
};
