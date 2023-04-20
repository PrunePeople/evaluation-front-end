// Récupération des éléments du DOM HTML
const modal = document.getElementById("modal");
const btn = document.getElementById("open-modal");
const span = document.getElementsByClassName("close")[0]; /* on récupère le premier élément de la liste */

// Fonction pour ouvrir la fenêtre modale au click sur le bouton
btn.addEventListener("click" , () => {
  modal.style.display = "block";
});

// Fonction pour fermer la fenêtre modale au click sur la croix qui est dans le span
span.addEventListener("click" , () => {
  modal.style.display = "none";
});

/*
Pour une question d'accessibilité on peut rajouter une fonction
qui ferme la fenêtre modale lorsque l'on clique en dehors de cette dernière
*/
window.addEventListener("click" , (event) => {
  if (event.target == modal) { // On vérifie si l'élément qui a été cliqué par l'utilisateur est la fenêtre modale
    modal.style.display = "none"; // Si l'utilisateur a cliqué en dehors de l'élément modal alors la modale est cachée à l'écran
  }
});
