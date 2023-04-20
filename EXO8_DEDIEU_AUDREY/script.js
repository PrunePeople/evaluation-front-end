// Fonction qui génère un mot de passe aléatoire parmis certains caractères
function generatePassword(champ_cible) {
    var charset = 'azertyupqsdfghjkmwxcvbn23456789AZERTYUPQSDFGHJKMWXCVBN'; /* On définit une variable "charset" contenant tous les caractères qui peuvent être utilisés pour générer le mot de passe */
    var retVal = ''; /* On initialise une variable "retVal" pour stocker le mot de passe généré */
    lengthPassword = 16;  /* On définit la longueur du mot de passe */

    for (i = 0; i < lengthPassword; i++) {  /* On utilise une boucle "for" pour itérer à travers chaque caractère du mot de passe */
        var wpos = Math.round (Math.random () * charset.length); /* On génère un nombre aléatoire qui correspond à une position dans le "charset" */
        retVal += charset.substring(wpos,wpos+1); /* On ajoute le caractère correspondant à cette position dans la variable "retVal" */
    }
    document.getElementById(champ_cible).value = retVal; /* On sélectionne l'élément HTML correspondant au champ cible et on lui attribue la valeur du mot de passe généré */
}
