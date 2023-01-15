
const con = require("../basedonnees/bdconnection");
// const bdusers = require("../basedonnees/users.json");

const testApiKey = async (userApiKey) => {
  let requette = "SELECT * FROM membres WHERE cle=?";
  let connection = await con.connection;
  let result = await connection.execute(requette,[userApiKey]);
  // bdusers.users.find((user) => user.apiKey == userApiKey);
  if(result[0].length>0){
    return true;
  }
  else{
    return false;
  }
}

module.exports = { testApiKey };