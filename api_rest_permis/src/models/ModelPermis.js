const con = require("../basedonnees/bdconnection");

const getAllPermis = async () => {
  const requette = "SELECT Permis_Numéro,Permis_Date_de_début,Permis_Date_de_fin,Gardien_Territoire_ex_villes,Animal_Type_de_permis,Animal_Nom FROM permis";
  let connection = await con.connection;
  let results = await connection.execute(requette);
  return results[0];
};

const getPermis = async (idp) => {
  const requette = "SELECT Permis_Numéro,Permis_Date_de_début,Permis_Date_de_fin,Gardien_Territoire_ex_villes,Animal_Type_de_permis,Animal_Nom FROM permis WHERE Permis_Numéro=?";
  let connection = await con.connection;
  let result = await connection.execute(requette,[idp]);
  return result[0];
}

const creerPermis = async (req) => { 
  let permis = [req.body.Permis_Numéro,
    req.body.Permis_Date_de_début,
    req.body.Permis_Date_de_fin,
    req.body.Gardien_Territoire_ex_villes,
    req.body.Animal_Type_de_permis,
    req.body.Animal_Nom
  ];
  const requette = "INSERT INTO permis(Permis_Numéro,Permis_Date_de_début,Permis_Date_de_fin,Gardien_Territoire_ex_villes,Animal_Type_de_permis,Animal_Nom) VALUES (?,?,?,?,?,?)";
  let connection = await con.connection;
  await connection.execute(requette,permis);
}

const modifierPermis = async (idp, req) => {
  let permis = [
    req.body.Permis_Date_de_début,
    req.body.Permis_Date_de_fin,
    req.body.Gardien_Territoire_ex_villes,
    req.body.Animal_Type_de_permis,
    req.body.Animal_Nom,
    idp
  ];
  const requette = "UPDATE permis SET Permis_Date_de_début=?, Permis_Date_de_fin=?, Gardien_Territoire_ex_villes=?, Animal_Type_de_permis=?, Animal_Nom=? WHERE Permis_Numéro=?";
  let connection = await con.connection;
  await connection.execute(requette,permis);
}

const supprimerPermis = async (idp) => {
  const requette = "DELETE FROM permis WHERE Permis_Numéro=?";
  let connection = await con.connection;
  await connection.execute(requette,[idp]);
}

module.exports = { 
  getAllPermis, 
  creerPermis,
  getPermis,
  modifierPermis,
  supprimerPermis
};