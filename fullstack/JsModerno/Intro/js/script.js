'use strict'; // O JavaScript acusa mais erros.

// var x let

//var tem escopo abrangente
//let tem escopo reduzido

function withVar() {
  for(var i = 0; i < 10; i++) {
    console.log('var' + i)
  }

  i = 20;
  console.log(i);
}

function withLet() {
  for(let i = 0; i < 10; i++) {
    console.log('let' + i)
  }

 // i = 20;
  //console.log(i);
}

withVar();
withLet();

//const - não podemos reatribuir valores.

// const c = 10;
// c = 20;

const d = [];
console.log(d);

d.push(1);
console.log(d);

//Function normal
function sum(a,b) {
  return a + b;
}
console.log(sum(2,2));
//ArrowFunction

const sum2 = (a,b) => {
  return a + b;
}

const sum3 = (a,b) => a + b;

console.log(sum2(1,1));
console.log(sum3(2,1));