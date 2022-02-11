// Dependencies
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

// Typings
import { ClientWithCommands } from '../typings/discord.d';

const excludeFiles = ['index.ts', 'index.js'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setEvents(client: ClientWithCommands) {
  const eventFiles = fs
    .readdirSync(__dirname)
    .filter((file) => /(ts|js)$/g.test(file) && !excludeFiles.includes(file));

  for (const file of eventFiles) {
    const fileURL = pathToFileURL(path.join(__dirname, file));
    const { default: event } = await import(fileURL.href);

    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
}
