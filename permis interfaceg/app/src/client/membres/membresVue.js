let formEnregMembre = () =>{
    let rep = `
    <form>
    <div class="mb-3 col-md-4">
      <label for="nom" class="form-label">Nom</label>
      <input type="text" class="form-control" id="nom" name="nom">
    </div>
    <div class="mb-3 col-md-4">
      <label for="prenom" class="form-label">Prenom</label>
      <input type="text" class="form-control" id="prenom" name="prenom">
    </div>
    <div class="mb-3 col-md-4">
      <label for="courriel" class="form-label">Courriel</label>
      <input type="email" class="form-control" id="courriel" name="courriel">
    </div>
    <div class="mb-3 col-md-4">
      <label for="motdepass" class="form-label">Mot de pass</label>
      <input type="password" class="form-control" id="motdepass" name="motdepass">
    </div>
    <button type="button" class="btn btn-primary" onclick="requetesMembres('inscrire');">S'inscrire</button>
  </form>
    `;
    $('#contenu').html(rep);
}

let formConnexion = () =>{
    let rep=`
    <form>
    <div class="mb-3 col-md-4">
      <label for="courriel" class="form-label">Courriel</label>
      <input type="email" class="form-control" id="courriel" name="courriel">
    </div>
    <div class="mb-3 col-md-4">
      <label for="motdepass" class="form-label">Mot de pass</label>
      <input type="password" class="form-control" id="motdepass" name="motdepass">
    </div>
    <button type="button" class="btn btn-primary" onclick="requetesMembres('connexion');">Connecter</button>
  </form>
    `;
    $('#contenu').html(rep);
}