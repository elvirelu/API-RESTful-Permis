const construireEntetes = () => {
    const entete = `
        <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">Permis Numéro</th>
                <th scope="col">Permis Date de début</th>
                <th scope="col">Permis Date de fin</th>
                <th scope="col">Gardien Territoire ex villes</th>
                <th scope="col">Animal Type de permis</th>
                <th scope="col">Animal Nom</th>
                </tr>
            </thead>
            <tbody>
    `;
    return entete;
}

const construireTR = (unPermis) =>{
    let tr=`<tr>
        <th scope="row">${unPermis.Permis_Numéro}</th>
        <td>${unPermis.Permis_Date_de_début}</td>
        <td>${unPermis.Permis_Date_de_fin}</td>
        <td>${unPermis.Gardien_Territoire_ex_villes}</td>
        <td>${unPermis.Animal_Type_de_permis}</td>
        <td>${unPermis.Animal_Nom}</td>
    </tr>`;
    return tr;
}

let lister = (listePermis) => {
    let resultat = construireEntetes();
    // console.log(listePermis);
    for(let unPermis of listePermis){
        resultat += construireTR(unPermis);
    }
    resultat += "</tbody></table>";
    document.getElementById('contenu').innerHTML = resultat;
}
      

let formPermis = (texte) => {
    let rep = `
    <form class="row g-3" id="formNouveau" name="formNouveau">

        <div class="col-12">
              <label class="form-label">Permis Numéro</label>
              <input type="text" class="form-control" id="idp" name="idp">
          </div>

        <div class="col-12">
              <label class="form-label">Permis Date de début</label>
              <input type="text" class="form-control" id="dated" name="dated">
          </div>

        <div class="col-12">
          <label class="form-label">Permis Date de fin</label>
          <input type="text" class="form-control" id="datef" name="datef">
        </div>

        <div class="col-12">
        <label class="form-label">Gardien Territoire ex villes</label>
        <input type="text" class="form-control" id="ville" name="ville">
    </div>

        <div class="col-12">
            <label class="form-label">Animal Type de permis</label>
            <input type="text" class="form-control" id="type" name="type">
        </div>

        <div class="col-12">
            <label class="form-label">Animal Nom</label>
            <input type="text" class="form-control" id="nom" name="nom">
        </div>`;
        if(texte == 'creer'){
            rep +=`<div class="col-12">
        <button class="btn btn-primary" type="button" onClick="requetesPermis('creer');">Enregistrer</button>
        </div>`;
        }
        else if(texte == 'modifier'){
            rep +=`<div class="col-12">
        <button class="btn btn-primary" type="button" onClick="requetesPermis('modifier');">Modifier</button>
        </div>`;
        }
      rep += `</form>`;
    $('#contenu').html(rep);
}

let formSupprimer = () => {
    let rep = `
    <form class="row g-3 needs-validation" novalidate>
    <div class="col-md-6">
        <label class="form-label">Permis Numéro</label>
        <input type="text" class="form-control" id="idp" name="idp" value="" required>
    </div>

   <div class="col-12">
        <button class="btn btn-primary" type="button" onClick="requetesPermis('supprimer');">Supprimer</button>
        </div>
    </form>`;
    $('#contenu').html(rep);
}