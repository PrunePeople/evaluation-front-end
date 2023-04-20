// récupérer les éléments du DOM

const passwordInput = document.querySelector('#password');
const showPasswordImg = document.querySelector('#show-password');
const contactForm = document.querySelector('#contact-form');
//Stockage des chemin des images dans un tableau
const eyePathImgArray = ["./src/img/eye_close.png", "./src/img/eye_open.png"];



// fonction pour afficher/masquer le mot de passe
function togglePassword() {
  if (passwordInput.type === 'password') { 
    passwordInput.type = 'text';
    showPasswordImg.src = eyePathImgArray[1];
  } else {
    passwordInput.type = 'password';
    showPasswordImg.src = eyePathImgArray[0];
  }
}

// ajouter un événement au clic sur le bouton "Afficher/Masquer"
showPasswordImg.addEventListener('click', togglePassword);

