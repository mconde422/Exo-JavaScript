## Les variables et les conditions en JavaScript
En JavaScript, une variable sert à stocker une donnée (comme un nombre, un texte, un booléen…).
On peut déclarer une variable avec let, const ou var.

let : pour une variable qui peut changer de valeur.

const : pour une variable dont la valeur ne change pas.

var : ancienne façon de déclarer une variable (on évite aujourd’hui).

    let age = 25;         
    const pays = "Guinée"; 
    var nom = "Ali";       

Les conditions permettent d’exécuter un bloc de code seulement si une condition est vraie.
La condition classique est if 
Exemple avec if, else if, else 

## les function et l'évenement onclick

Une fonction est un ensemble d’instructions regroupées sous un nom.
On l’utilise pour :
    éviter de répéter du code
    organiser le code
    exécuter une action spécifique

        function direBonjour() {
        console.log("Bonjour !");
        }

        direBonjour();

onclick est un événement : il permet d’exécuter un code lorsqu’un utilisateur clique sur un élément de la page (par exemple : un bouton, une image, un lien...).

    <button onclick="direBonjour()">Clique ici</button>

    <script>
    function direBonjour() {
        alert("Bonjour !");
    }
    </script>
<img src="Devoir/Capture d’écran 2025-06-24 165538.png" alt="capture d'ecran" width="400" height="200"/>


## Les méthodes et les événements
 Une méthode est une fonction associée à un objet.
    En JavaScript, presque tout est objet : les tableaux, les chaînes de caractères, les nombres, etc.
  | Objet  | Méthodes utiles                                               | Exemple               |
| ------ | ------------------------------------------------------------- | --------------------- |
| String | `toUpperCase()`, `toLowerCase()`, `slice()`, `trim()`         | `"abc".toUpperCase()` |
| Array  | `push()`, `pop()`, `join()`, `shift()`, `unshift()`, `sort()` | `[1,2].push(3)`       |
| Number | `toFixed()`, `toString()`                                     | `3.14.toFixed(1)`     |
  

## Les API

L'API a été conçue pour offrir un accès simple, sécurisé et efficace aux fonctionnalités principales de notre application.
Elle permet aux développeurs d’interagir avec nos données et nos services via des requêtes HTTP standard (GET, POST, PUT, DELETE).

Fonctionnalités principales
Accès aux données : récupérer, ajouter, modifier ou supprimer des ressources.

Réponses au format JSON : pour une intégration facile avec vos applications front-end ou mobiles.

fetch('https://api.exemple.com/ressources')
  .then(response => {
    if (!response.ok) {
    }
    return response.json();
  })
  .then(data => {
    console.log("Données récupérées :", data);
  })
  .catch(error => {
    console.error("Erreur lors du fetch :", error);
  });
