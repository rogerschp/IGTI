/*const array = [1,2,3,4,5,6];

function f5(){
  return [array
  .map(item => item * 2)
  .filter(item => item % 3 === 0)
  .reduce((accumulator, current) => accumulator + current, 0);]
};

f3();

const array = [1,2,3,4,5,6,7,8];

function f5(){
  return [...array, 9,10];
};

f5();*/
/*function example(n1, n2 = 20){
  return n1 + n2 / 4;
}
example(10);*/

// const array = [1,2,3,4,5,6,7,8,9,10];

// function f1(){
//   return array.map(item => item ** 2);
// }
// f1();

// const array = [1,'2','3',4,5]

// function f2(){
//   return array.filter(item => typeof item === 'string');
// }
// f2();

function p4() {
  let interval = null;
  let i = 0;
  let array = []

  interval = setInterval(() => {
    array.push(i++);

    if (i === 5) {
      clearInterval(interval);
      console.log(array);
    }
  }, 1000);
}

p4();