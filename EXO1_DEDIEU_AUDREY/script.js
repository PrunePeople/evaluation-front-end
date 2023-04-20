// Récupération des éléments du DOM HTML
var modal = document.getElementById("modal");
var btn = document.getElementById("open-modal");
var span = document.getElementsByClassName("close")[0]; /* on récupère le premier élément de la liste */

// Fonction pour ouvrir la fenêtre modale au click sur le bouton
btn.onclick = function() {
  modal.style.display = "block";
}

// Fonction pour fermer la fenêtre modale au click sur la croix qui est dans le span
span.onclick = function() {
  modal.style.display = "none";
}

/*
Pour une question d'accessibilité on peut rajouter une fonction
qui ferme la fenêtre modale lorsque l'on clique en dehors de cette dernière
*/
window.onclick = function(event) {
  if (event.target == modal) { // On vérifie si l'élément qui a été cliqué par l'utilisateur est la fenêtre modale
    modal.style.display = "none"; // Si l'utilisateur a cliqué en dehors de l'élément modal alors la modale est cachée à l'écran
  }
}
