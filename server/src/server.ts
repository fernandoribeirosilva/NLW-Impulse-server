import cors from "cors";
import express from "express";
import { route } from "./routers";

const server = express();

server.use(cors())
server.use(express.json());

server.use(route);

server.listen(4000, () => {
   console.log("server rodando")
})