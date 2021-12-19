// Dependencies
import dotenv from 'dotenv';
import { Client, Intents } from 'discord.js';

// Typings
import { ClientWithCommands } from './typings/discord.d';

// Events
import { setEvents } from './events';

// Commands
import { getCommands } from './commands';

dotenv.config();

async function main() {
  const client: ClientWithCommands = new Client({
    intents: [Intents.FLAGS.GUILDS],
  });

  client.commands = await getCommands();

  await setEvents(client);

  client.login(process.env.TOKEN);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
