// On définit un tableau avec les noms des images que nous avons dans notre dossier
var images = ['10.jpg', '11.jpg', "12.jpg", '13.jpg', '14.jpg'];

// On récupère la div qui contient l'image de fond
var bgImg = document.querySelector('.bg-img');

// On définit une fonction qui va changer l'image de fond aléatoirement
function changeBackgroundImage() {
  var randomIndex = Math.floor(Math.random() * images.length);   // On choisit un nombre aléatoire entre 0 et la longueur de notre tableau d'images
  bgImg.style.backgroundImage = 'url(./src/img/' + images[randomIndex] + ')';   // On définit l'image de fond de la div avec l'image aléatoire choisie
}

// On appelle la fonction pour changer l'image de fond lors du chargement de la page
changeBackgroundImage();
