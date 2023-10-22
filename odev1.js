const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Yariçapi girin: ', (radius) => {
  const pi = Math.PI;
  const area = pi * Math.pow(radius, 2);
  console.log(`Yariçapi ${radius} olan dairenin alani: ${area}`);
  rl.close();
});