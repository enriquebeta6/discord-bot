// Dependencies
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { Collection } from 'discord.js';

// Typings
import { Command } from '../typings/discord.d';

const excludeFiles = ['index.ts', 'index.js'];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function getCommands() {
  const commands = new Collection<string, Command>();

  const commandFiles = fs
    .readdirSync(__dirname)
    .filter((file) => /ts|js$/g.test(file) && !excludeFiles.includes(file));

  for (const file of commandFiles) {
    const fileURL = pathToFileURL(path.join(__dirname, file));

    const { default: command } = await import(fileURL.href);

    commands.set(command.data.name, command);
  }

  return commands;
}
