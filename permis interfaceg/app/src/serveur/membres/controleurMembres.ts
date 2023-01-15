import { Request, Response } from "express";
import fetch from 'node-fetch';

export class ControleurMembres {
  private static CtrM_Instance: any;

  private ControleurMembres() {}

  public static getControleurMembres(): ControleurMembres | any {
    try {
      if (this.CtrM_Instance == null) {
        this.CtrM_Instance = new ControleurMembres();
      }
      return this.CtrM_Instance;
    } catch (e) {
      return { msg: "Oups!" };
    }
  }

public GetCle = async (req: Request): Promise<any> => {
  let url = "http://localhost:4000/api/v1/membre?courriel=" + req.body.courriel + "&motdepass=" + req.body.motdepass;
  let response = await fetch(url, {method: 'GET'});
  return await response.json();
}

public creerMembre = async (req: Request): Promise<any> => {
  let url = "http://localhost:4000/api/v1/membre";
  let response = await fetch(url, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(req.body)});
  // console.log(response);
  return await response.json();;
}

public async determinerAction(req: Request) {
  let action = req.body.action;
  switch (action) {
    case "connexion":
      return await this.GetCle(req);
    case "inscrire":
      return await this.creerMembre(req);
    default:
      return { msg: "Action invalide!" };
  }
}
}