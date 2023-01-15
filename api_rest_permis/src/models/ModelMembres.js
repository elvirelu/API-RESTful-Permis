const con = require("../basedonnees/bdconnection");
const sha1 = require("sha1");

const getCle = async (req) => {
  let resultCle;
  const requetteTrouve = "SELECT * FROM membres WHERE courriel=?";
  const requetteCle = "SELECT cle FROM membres WHERE courriel=? AND motdepass=?";
  let connection = await con.connection;
  let result = await connection.execute(requetteTrouve,[req.query.courriel]);
  if(result[0].length>0){  
    resultCle = await connection.execute(requetteCle,[req.query.courriel, req.query.motdepass]);
    if(resultCle[0].length>0){
      // console.log(resultCle[0]);
      return resultCle[0];
    }
    else{
      return "mot de pass n'est pas correct"
    }
  }
  else{
    return "courriel n'exist pas."
  }
}

const creerMembre = async (req) => { 
  let membre = [
    req.body.nom,
    req.body.prenom,
    req.body.courriel,
    req.body.motdepass,
    sha1(process.hrtime())
  ];
  const requette = "INSERT INTO membres VALUES (0,?,?,?,?,?)";
  let connection = await con.connection;
  await connection.execute(requette,membre);
  return "Bien enregistré"
}

module.exports = { 
  creerMembre,
  getCle,
};