let requetesMembres = (action) => {
    switch(action){
        case 'connexion':
            let formConnex={
                'courriel': $('#courriel').val(),
                'motdepass': $('#motdepass').val(),
                'action':'connexion'
            };
            $.ajax({
                url: "/membre",
                type: "POST",
                data: formConnex,
                dataType:'json',
                async: true, 
                success: (result) => {
                    alert(result.status);
                    sessionStorage.setItem("apikey", result.donnees[0].cle);
                },
                fail: (e) => {
                    alert(`Gros probléme : ${e.message}`);
                }
            });   
        break;

        case 'inscrire':
            let formMembre = {
                'nom': $('#nom').val(),
                'prenom': $('#prenom').val(),
                'courriel': $('#courriel').val(),
                'motdepass': $('#motdepass').val(),
                'action':'inscrire'
            };
            $.ajax({
                url:"/membre",
                type:"POST",
                data: formMembre,
                dataType:'json', 
                async: true, 
                success: (msg) => {
                    alert(msg.msg);
                },
                fail: (e) => {
                    alert(`Gros probléme : ${e.message}`);
                }
            });
            break;
        }

    }    