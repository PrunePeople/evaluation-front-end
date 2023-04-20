// récupérer les éléments du DOM
const passwordInput = document.querySelector('#password');
const showPasswordBtn = document.querySelector('#show-password');
const clearBtn = document.querySelector('#effacer-btn');
const contactForm = document.querySelector('#contact-form');

// fonction pour afficher/masquer le mot de passe
function togglePassword() {
  if (passwordInput.type === 'password') { /* Test si le type de l'input est de type password (par défaut: masqué) */
    passwordInput.type = 'text'; /* Change le type de l'input en text (par défaut, il devient donc visible) */
    showPasswordBtn.textContent = 'Masquer'; /* Change le texte du DOM HTML correspondant en "Masquer" */
  } else {
    passwordInput.type = 'password'; /* Sinon le type de l'input est en password */
    showPasswordBtn.textContent = 'Afficher'; /* Et le texte du DOM HTML en "Afficher" */
  }
}

// ajouter un événement au clic sur le bouton "Afficher/Masquer"
showPasswordBtn.addEventListener('click', togglePassword);

// ajouter un événement au clic sur le bouton "Effacer"
clearBtn.addEventListener('click', function() {
  contactForm.reset();
});