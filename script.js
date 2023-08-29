var nomAgent = "James Bond";

var elementAffichage = document.getElementById("affichageNom");

if (elementAffichage) {
elementAffichage.textContent = "Nom de l'agent : " + nomAgent;
} else {
console.error("L'élément d'affichage n'existe pas.");
}
