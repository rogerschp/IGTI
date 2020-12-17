import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

questions();

function questions () {
  rl.question("Digite um numero: ", number => {
    if(parseInt(number) === -1) {
      rl.close();
    } else {
      const multiplos = [];
      for (let i = 0; i < number; i++) {
        if ((i % 3 === 0 ) || (i % 5 === 0)) {
          multiplos.push(i);
        }
}
console.log(multiplos);
    questions();
    }
  });
}

