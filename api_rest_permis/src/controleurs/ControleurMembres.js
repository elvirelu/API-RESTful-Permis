
const modelMembres = require("../models/ModelMembres");

const getCle = async (req, res) => {
  let cle = await modelMembres.getCle(req);
  res.send({"status":"OK","donnees": cle});
};

const creerMembre = async (req, res) => {
  let msg = await modelMembres.creerMembre(req);
  res.send({"msg":msg});
};

module.exports = {
  getCle,
  creerMembre,
};