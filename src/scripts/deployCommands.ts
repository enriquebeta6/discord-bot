// Dependencies
import dotenv from 'dotenv';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

// Commands
import { getCommands } from '../commands';

dotenv.config();

async function main() {
  const commands = await getCommands();
  const commandsArray = commands.map((command) => command.data.toJSON());

  const { TOKEN = '', CLIENT_ID = '', GUILD_ID = '' } = process.env;

  const rest = new REST({ version: '9' }).setToken(TOKEN);

  await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
    body: commandsArray,
  });

  console.log('Successfully registered application commands.');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
