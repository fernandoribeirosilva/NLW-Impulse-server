import express from "express";

const server = express();

server.get('/users', (req, res) => {
   return res.send('Hello World!');
});

server.listen(3000, () => {
   console.log("server rodando")
})