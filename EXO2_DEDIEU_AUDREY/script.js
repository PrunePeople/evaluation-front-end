// Création de constantes en sélectionnant des éléments DOM HTML à partir des classes CSS
const menuBtn = document.querySelector('.hamburger-menu'); // Bouton du menu hamburger
const navMenu = document.querySelector('.nav-menu'); // Barre de navigation
const closeBtn = document.querySelector('.close-btn'); // Croix de fermeture

// Ecouteur d'evenement du clic du menu hamburger pour montrer la barre de naviagtion latérale
menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Ecouteur d'evenement du clic sur la croix de fermeture pour cacher la barre de navigation latérale
closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('show');
});

// Ecouteur d'événement de transition pour afficher / masquer la croix de fermeture rouge
navMenu.addEventListener('transitionend', () => {
  if (navMenu.classList.contains('show')) { // Vérifie si l'élément navMenu contient la classe CSS "show"
    closeBtn.style.display = 'block'; // Si c'est le cas, définit la propriété CSS "display" du bouton de fermeture closeBtn sur "block"
  } else {
    closeBtn.style.display = 'none'; // Si l'élément navMenu ne contient pas la classe CSS "show", définit la propriété CSS "display" du bouton de fermeture closeBtn sur "none"
  }
});
