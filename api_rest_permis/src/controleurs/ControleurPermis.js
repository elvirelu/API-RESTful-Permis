
const modelPermis = require("../models/ModelPermis");
const outils = require("../models/outils");
const env_vars = require("../utilitaires/env_vars");

// Permet  de générer des clés voir sur Google : npm uuid
// const { v4: uuidv4 } = require('uuid');
// const url = require("url");
const getAllPermis = async (req, res) => {
  // apiKeys=[uuidv4(),"abcd"]; //uuidv4() pour générer des clés
  // Du module url on va faire appel à req.query.apiKey pour obtenir le apiKey
  // envoyé par l'utilisateur.
  let apiKeyOK = await outils.testApiKey(req.query.apiKey);
  try {
    if(apiKeyOK){
      let listePermis = await modelPermis.getAllPermis();
      res.send({ status: "OK", donnees: listePermis });
    } else {
      res.send(env_vars.MSG_API_NOK);
    }
  } catch(e){
    res.send(env_vars.MSG_GRAVE);
  }
};

// const getPermis = (req, res) => {
//   const apiKeyOK = outils.testApiKey(req.query.apiKey);
//   try {
//       if(apiKeyOK){
//         const idp = req.params.id;
//         if (!idp) {
//         res.send(env_vars.MSG_INTROUVABLE);
//         }
//         const lePermis = modelPermis.getPermis(idf);
//         res.send({ status: "OK", donnees: lePermis });
//       } else {
//         res.send(env_vars.MSG_API_NOK);
//       }
//   } catch(e){
//     res.send(env_vars.MSG_GRAVE);
//   }   
// };

const creerPermis = async (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if(apiKeyOK){
          await modelPermis.creerPermis(req);
          // let listePermis = await modelPermis.getAllPermis();
          res.status(201).send({ status: "OK", donnees: "Bien Créé" });
      } else {
        res.status(500).send(env_vars.MSG_API_NOK);
      }
  } catch(e){
    res.status(500).send(env_vars.MSG_GRAVE);
  }   
};

const modifierPermis = async (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if(apiKeyOK){
          const idp = req.params.id;
          if (!idp) {
            res.send(env_vars.MSG_INTROUVABLE);
          }
          let respons = await modelPermis.getPermis(idp);
          if(respons.length > 0){
            await modelPermis.modifierPermis(idp, req);
            // let listePermis = await modelPermis.getAllPermis();
            res.send({ status: "OK", donnees: "Bien Modifié" });
          }else{
          res.send({ status: "NOK", donnees: "Donnees Introuvable" });
        }
      } else {
        res.send(env_vars.MSG_API_NOK);
      }
  } catch(e){
    res.send(env_vars.MSG_GRAVE);
  }   
};

const supprimerPermis = async (req, res) => {
  const apiKeyOK = outils.testApiKey(req.query.apiKey);
  try {
      if(apiKeyOK){
        const idp = req.params.id;
        if (!idp) {
          res.send(env_vars.MSG_INTROUVABLE);
        }
        let respons = await modelPermis.getPermis(idp);
        if(respons.length > 0){
          await modelPermis.supprimerPermis(idp);
          // let listePermis = await modelPermis.getAllPermis();
          res.send({ status: "OK", donnees: "Bien Supprimé" });
        }else{
          res.send({ status: "NOK", donnees: "Donnees Introuvable" });
        }
      } else {
        res.send(env_vars.MSG_API_NOK);
      }
  } catch(e){
    res.send(env_vars.MSG_GRAVE);
  }   
};

module.exports = {
  getAllPermis,
  // getPermis,
  creerPermis,
  modifierPermis,
  supprimerPermis
};