import express from "express";

const app = express();

app.all("/testAll", (req, res) => {
  res.send(req.method);
});

app.listen(3000, () => {
  console.log("API Started!");
});