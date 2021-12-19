// Dependencies
import fs from 'fs';
import path from 'path';
import { Collection } from 'discord.js';

// Typings
import { Command } from '../typings/discord.d';

const excludeFiles = ['index.ts'];

export async function getCommands() {
  const commands = new Collection<string, Command>();

  const commandsPath = path.join(__dirname);

  const commandFiles = fs
    .readdirSync(commandsPath)
    .filter((file) => file.endsWith('.ts') && !excludeFiles.includes(file));

  for (const file of commandFiles) {
    const commandPath = path.join(__dirname, file);
    const { default: command } = await import(commandPath);

    commands.set(command.data.name, command);
  }

  return commands;
}
