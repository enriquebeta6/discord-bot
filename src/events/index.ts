// Dependencies
import fs from 'fs';
import path from 'path';

// Typings
import { ClientWithCommands } from '../typings/discord.d';

const excludeFiles = ['index.ts'];

export async function setEvents(client: ClientWithCommands) {
  const eventsPath = path.join(__dirname);

  const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith('.ts') && !excludeFiles.includes(file));

  for (const file of eventFiles) {
    const eventPath = path.join(__dirname, file);
    const { default: event } = await import(eventPath);

    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
}
