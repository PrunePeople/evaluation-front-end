// Récupération des éléments du DOM et mise dans constante
const paragraph = document.querySelector('p');
const btnEnlarge = document.getElementById('more');
const btnReduce = document.getElementById('less');
const currentFontSize = document.getElementById('current-font');


// --------- Optimisation ---------

// Fonction pour modifier la taille du texte
function changeFontSize(value) {
  const currentFontSizeValue = parseInt(getComputedStyle(paragraph).fontSize);
  paragraph.style.fontSize = (currentFontSizeValue + value) + 'px';
  updateCurrentFontSize();
}

// Événements pour les boutons
btnEnlarge.addEventListener('click', () => {
  changeFontSize(1); // Rajoute 1 px à chaque click
});

btnReduce.addEventListener('click', () => {
  changeFontSize(-1); // Enlève 1 px à chque click
});



// Fonction pour afficher la taille de la police actuelle dans le DOM HTML
function updateCurrentFontSize() {
  const currentFontSizeValue = parseInt(getComputedStyle(paragraph).fontSize);
  currentFontSize.textContent = `Taille police actuelle: ${currentFontSizeValue}px.`;
}
