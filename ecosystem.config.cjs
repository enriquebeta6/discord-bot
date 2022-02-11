module.exports = {
  apps: [
    {
      name: 'discord-bot',
      script: 'build/index.js',
      node_args: '--experimental-specifier-resolution=node',
    },
  ],
};
