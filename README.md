# API-RESTful-Permis
**Nom**: API RESTful Permis

**Description**: Le projet est découpé en deux parties: Permis Interface Graphic et API RESTful Permis

Patie 1: API RESTful Permis

Je crée un serveur Node avec express, un controleurPermis et un modelPermis
qui s’occupe de la base de données (MVC-DAO). J'utilise les routes

-app.get("/permis", …

-app.post("/permis", …

-app.put("/permis/:id", …

-app.delete("/permis/:id", …

Les réponses de l’API seront retournées au client en format JSON.

Patie 2: Site Web Permis

Pour pouvoir utiliser mon api les membres doivent créer un compte sur mon site (nom,
prénom, courriel et mot de passe) et recevront une clé (générée par sha1)
Cette clé est comme réponse à enregistrement de membre.

Lorsqu’un membre désire obtenir la liste de vos permis il va envoyer une
requête par get de la manière suivante: localhost:8181/permis?apiKey=la clé de l’utilisateur

Lorsque la requête va tomber dans la route du serveur app.get("/permis", … )
la donnée de apiKey est récupéré et cette clé est validé dans la table membres. Si la clé existe, 
la liste des permis est retourné, sinon un message explicite est retourné
pour que le membre vérifie sa clé ou qu’il crée un compte.

**Utilisation**: Il faut démarer Permis Interface Graphic sur la port 8181 et démarer API RESTful Permis sur la port 4000.

Vous devez vous inscrire et faire la connection avec votre compte. Ensuite, vous pouvez faire CRUD sur permis dans le site web.
