import { Request, Response } from "express";
import fetch from 'node-fetch';

export class ControleurPermis {
  private static CtrP_Instance: any;

  private ControleurPermis() {}

  public static getControleurPermis(): ControleurPermis | any {
    try {
      if (this.CtrP_Instance == null) {
        this.CtrP_Instance = new ControleurPermis();
      }
      return this.CtrP_Instance;
    } catch (e) {
      return { msg: "Oups!" };
    }
  }

public appelPermisAPI = async (req:Request, type:string) =>{
  let response;
  let url="";
  if(req.body.cle == ""){
    return {"status":"Il faut faire la connexion"};
  }
  else{
    url = "http://localhost:4000/api/v1/permis?apiKey="+ req.body.cle;
  }
  if(req.body.Permis_Numéro != undefined && (type == 'PUT' || type == 'DELETE')) {
    url = "http://localhost:4000/api/v1/permis" + req.body.Permis_Numéro + "?apiKey=" + req.body.cle;
  }
  if (type == 'POST' || type == 'PUT') {
    response = await fetch(url, {method: type, headers: {'Content-Type': 'application/json'}, body: JSON.stringify(req.body)});
  } else {
    response = await fetch(url, {method: type});
  }
  let responseJson = await response.json();
  return responseJson;
}

public GetAll = async (req: Request): Promise<any> => {
  return await this.appelPermisAPI(req,'GET');
}

public creerPermis = async (req: Request): Promise<any> => {
  return await this.appelPermisAPI(req,'POST');
}

public modifierPermis = async (req: Request): Promise<any> => {
  return await this.appelPermisAPI(req,'PUT');
}

public supprimerPermis = async (req: Request): Promise<any> => {
  return await this.appelPermisAPI(req,'DELETE');
}

public async determinerAction(req: Request) {
  let action = req.body.action;
  switch (action) {
    case "tous":
      return await this.GetAll(req);
    case "creer":
      return await this.creerPermis(req);
    case "modifier":
      return await this.modifierPermis(req);
    case "supprimer":
      return await this.supprimerPermis(req);
    default:
      return { msg: "Action invalide!" };
  }
}

}