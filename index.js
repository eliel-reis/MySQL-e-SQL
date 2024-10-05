import express from "express";
const app = express();

app.listen(9000, () => {
  const data = new Date();
  console.log("Servidor node iniciado em: " + data);
});
