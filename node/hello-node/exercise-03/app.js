// Based on Example: TinyCLI at https://nodejs.org/api/readline.html#readline_example_tiny_cli
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> '
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('Well hello there friend! Good to see you today.');
      break;
    case 'hola':
      console.log('Hola! que bueno verte');
      break;
    case 'bonjour':
      console.log('Bonjour! content de te voir.');
      break;
    case 'bye':
      console.log('Have a great day!');
      process.exit(0);
      break;
    default:
      console.log(`Say what? I don't understand '${line.trim()}'. I'm just a simple computer.`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});