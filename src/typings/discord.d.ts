// Dependencies
import {
  Client,
  Collection,
  CommandInteraction,
  SlashCommandBuilder,
} from 'discord.js';

export interface Command {
  data: SlashCommandBuilder;
  execute: (interaction: CommandInteraction) => Promise<void>;
}

export interface ClientWithCommands extends Client {
  commands?: Collection<string, Command>;
}

export interface CommandInteractionWithClientWithCommands
  extends CommandInteraction {
  readonly client: ClientWithCommands;
}
