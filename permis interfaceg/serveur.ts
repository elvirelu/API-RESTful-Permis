// Importation des modules nécessaires au fichier serveur.ts
import express from "express";
import { NextFunction, Request, Response } from "express";
import bodyParser = require("body-parser");
import http from "http";
import path from "path";
import {ControleurPermis} from "./app/src/serveur/permis/controleurPermis";
import {ControleurMembres} from "./app/src/serveur/membres/controleurMembres";

// Création d'un serveur Node dont les requêtes entrantes
// et sortantes sont gérées par express.

const exp = express();
const serveur = http.createServer(exp);
const porte = 8181;
serveur.listen(porte); 
console.log(`\nServeur démarré sur le port ${porte}`);

exp.use(express.static(__dirname + "/app/src"));

exp.use(bodyParser.json());

exp.use(bodyParser.text());

exp.use(express.urlencoded({ extended: true }));

let CtrP = ControleurPermis.getControleurPermis();
let CtrM = ControleurMembres.getControleurMembres();

exp.get("/", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname + "/app/src/index.html"));
});

exp.all("/membre",async (req:Request, res:Response) =>{
	try{
		let reponse = await CtrM.determinerAction(req);
		// console.log(reponse);
		res.header('Content-type','application/json');
		res.header('Charset','utf8');
		res.send(reponse); 
	}catch(err){
		console.log(err);
	}
});

exp.all("/permis",async (req:Request, res:Response) =>{
	try{
		let reponse = await CtrP.determinerAction(req);
		res.header('Content-type','application/json');
		res.header('Charset','utf8');
		res.send(reponse); 
	}catch(err){
		console.log(err);
	}
});