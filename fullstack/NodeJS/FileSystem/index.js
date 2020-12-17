import {promises as fs} from "fs";

//init();
writeReadJson();

//Utilizando promisse com async-await
async function init () {
    try {
       await fs.writeFile("teste.txt", "bla bla bla")
        await fs.appendFile("teste.txt","\nteste appen file")
          const data = await fs.readFile("teste.txt", "utf-8")
            console.log(data);
   }catch(err){
     console.log(err);
   } 
 }

 async function writeReadJson() {
  try{
    
    const arrayCarros = ["Gol", "Parati", "Opala" ];
    
    const obj = {carros: arrayCarros}
    
    await fs.writeFile("teste.json",  JSON.stringify(obj));
    
    const data = JSON.parse(await fs.readFile("teste.json"));
    
    data.carros.push("Chevet");

    await fs.writeFile("teste.json", JSON.stringify(data));
  }catch(err){
    console.log(err);
  }
 }

//Utilizando promises sem async/await.
/*fs.writeFile("teste.txt", "bla bla bla").then(() => {
  fs.appendFile("teste.txt","\nteste appen file").then(() => {
    fs.readFile("teste.txt", "utf-8").then(resp  => {
      console.log(resp);
    }).catch(err => {
      console.log(err);
    });
  }).catch(err => {
    console.log(err);
  });
}).catch(err => {
  console.log(err);
});*/

//Utilizando com callbacks
//import fs from "fs";

//Escrevendo no arquivo, caso não tenha um arquivo com o nome passado, ele cria um na raiz do projeto
/*
fs.writeFile("teste.txt", "bla bla bla", (err) => {
  if (err) {
    console.log(err);
  } else {
    //Concatenando no arquivo.
    fs.appendFile("teste.txt", "\ntest append file", (err) => {
      if (err) {
        console.log(err);
      } else {
        //Lendo o arquivo
        fs.readFile("teste.txt", "utf-8", (err, data) => {
          if(err) {
            console.log(err);
          } else {
            console.log(data);
          }
        })
      }
    })
  }
});*/
/* Utilizando de forma Sincrona
try {
  console.log("1");
  fs.writeFileSync("teste.txt", "bla bla bla");
  console.log("2");
  const data = fs.readFileSync("teste.txt", "utf-8");
  console.log(data);
  console.log("3");
} catch(err) {
  console.log(err);
}*/