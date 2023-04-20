/*
Cette fonction ajoute ou supprime la classe "scrolled" à un élément de navigation et à tous les éléments ul, li et a 
en fonction de la position de défilement de la fenêtre.
*/
window.addEventListener('scroll', function() { // Ajouter un événement de défilement à la fenêtre
  var nav = document.querySelector('nav'); // Récupérer l'élément de navigation
  var ul = document.querySelectorAll('ul'); // Récupérer tous les éléments ul
  var li = document.querySelectorAll('li'); // Récupérer tous les éléments li
  var a = document.querySelectorAll('a'); // Récupérer tous les éléments a

  if (window.pageYOffset > 0) { // Vérifier si la position de défilement est supérieure à 0

    nav.classList.add('scrolled'); // Ajouter la classe "scrolled" à l'élément de navigation

    ul.forEach(function(element) { // Ajouter la classe "scrolled" à chaque élément ul
      element.classList.add('scrolled');
    });

    li.forEach(function(element) { // Ajouter la classe "scrolled" à chaque élément li
      element.classList.add('scrolled');
    });

    /*
    parcourt tous les éléments "a" sélectionnés dans le document HTML en utilisant la méthode forEach, 
    puis ajoute la classe CSS "scrolled" à chacun de ces éléments en utilisant la propriété classList 
    et la méthode add.
    */
    a.forEach(function(element) { // Ajouter la classe "scrolled" à chaque élément a
      element.classList.add('scrolled');
    });

  } else { // Sinon...

    nav.classList.remove('scrolled'); // Supprimer la classe "scrolled" de l'élément de navigation

    ul.forEach(function(element) {
      element.classList.remove('scrolled'); // Supprimer la classe "scrolled" de chaque élément ul
    });

    li.forEach(function(element) {
      element.classList.remove('scrolled'); // Supprimer la classe "scrolled" de chaque élément li
    });

    a.forEach(function(element) {
      element.classList.remove('scrolled'); // Supprimer la classe "scrolled" de chaque élément a
    });
  }
});
