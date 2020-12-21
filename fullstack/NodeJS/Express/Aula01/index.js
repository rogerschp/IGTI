import express from 'express';

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req,res) => {
  const a = 3;
  const b = 5;
  const result = sum(a, b);
  res.send("Resultado:" + result);
});

 const sum = (a ,  b ) => {
  const result = a +  b;
  return result;
}

app.listen(3000, () => {
  console.log("API Started!");
});