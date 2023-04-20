/*
La fonction "updateProgressBar" met à jour une barre de progression sur la page web en fonction de la position de défilement de la fenêtre. 
Cette fonction est appelée à chaque événement de défilement de la fenêtre en utilisant l'écouteur d'événements "onscroll".
*/
function updateProgressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; // Récupérer la quantité de défilement de la fenêtre pour les navigateurs (document.body) et les autres navigateurs (document.documentElement)
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; // Calculer la hauteur de la page en soustrayant la hauteur visible de la fenêtre à la hauteur totale de la page
  var scrolled = (winScroll / height) * 100; // Calculer la position de défilement en pourcentage
  document.getElementById("myBar").style.width = scrolled + "%"; // Modifier la largeur de la barre de progression en fonction de la position de défilement
}

window.onscroll = function() {updateProgressBar()}; // Ajouter un événement de défilement à la fenêtre + Appeler la fonction "updateProgressBar" à chaque événement de défilement
