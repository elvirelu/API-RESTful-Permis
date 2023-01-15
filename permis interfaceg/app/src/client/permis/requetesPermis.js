let requetesPermis = (action) => {
switch(action){
    case 'tous':
        $.ajax({
            url:"/permis",
            type:"POST",
            data:{'action':'tous', "cle": sessionStorage.getItem('apikey')},
            dataType:'json', 
            async: true, 
            success: (listePermis) => {
                if(sessionStorage.getItem('apikey')==undefined){
                    alert(listePermis.status);
                }else{
                    alert(listePermis.status);
                    lister(listePermis.donnees);
                }
            },
            fail: (e) => {
                alert(`Gros probléme : ${e.message}`);
            }
        });
    break;

    case 'creer':
        let formPermis = {
            'Permis_Numéro': $('#idp').val(),
            'Permis_Date_de_début': $('#dated').val(),
            'Permis_Date_de_fin': $('#datef').val(),
            'Gardien_Territoire_ex_villes': $('#ville').val(),
            'Animal_Type_de_permis': $('#type').val(),
            'Animal_Nom': $('#nom').val(),
            'action':'creer',
            "cle": sessionStorage.getItem('apikey')
        }
        $.ajax({
            url:"/permis",
            type:"POST",
            data: formPermis,
            dataType:'json', 
            async: true, 
            success: (listePermis) => {
                alert(listePermis.donnees);
            },
            fail: (e) => {
                alert(`Gros probléme : ${e.message}`);
            }
        });
    break;

    case 'modifier':
        let formPermisM = {
            'Permis_Numéro': $('#idp').val(),
            'Permis_Date_de_début': $('#dated').val(),
            'Permis_Date_de_fin': $('#datef').val(),
            'Gardien_Territoire_ex_villes': $('#ville').val(),
            'Animal_Type_de_permis': $('#type').val(),
            'Animal_Nom': $('#nom').val(),
            'action':'modifier',
            "cle": sessionStorage.getItem('apikey')
        }
        $.ajax({
            url:"/permis",
            type:"POST",
            data: formPermisM,
            dataType:'json', 
            async: true, 
            success: (listePermis) => {
                alert(listePermis.donnees);
            },
            fail: (e) => {
                alert(`Gros probléme : ${e.message}`);
            }
        });
        break;

    case 'supprimer':
        $.ajax({
            url:"/permis",
            type:"POST",
            data: {'action':'supprimer', 'Permis_Numéro': $('#idp').val(), "cle": sessionStorage.getItem('apikey')},
            dataType:'json', 
            async: true, 
            success: (listePermis) => {
                alert(listePermis.donnees);
            },
            fail: (e) => {
                alert(`Gros probléme : ${e.message}`);
            }
        });
        break;
    }

}