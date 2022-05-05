import express from "express";
import { route } from "./routers";

const server = express();

server.use(express.json());

server.use(route);

server.listen(3000, () => {
   console.log("server rodando")
})