// Dependencies
import { ClientWithCommands } from '../typings/discord.d';

export default {
  name: 'ready',
  once: true,
  async execute(client: ClientWithCommands) {
    console.log(`Ready! Logged in as ${client?.user?.tag}`);
  },
};
