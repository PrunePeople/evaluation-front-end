const el_textarea = document.querySelector("#message");
const el_counter = document.querySelector("#textarea-counter");
const maxlength = el_textarea.getAttribute("maxlength");

/**
 * @description Rajoute le compteur de caractères saisie dans le textarea
 */

function addTextareaCounter() {
  el_counter.innerText = "0/" + maxlength;
  el_textarea.addEventListener("keyup", () => {
    let value_length = el_textarea.value.length;
    el_counter.innerText = value_length + "/" + maxlength;
    if (value_length > maxlength - 2) {
      addWarningMessage();
    } else {
      removeWarningMessage();
    }
  });
}

const el_warningMessage = document.querySelector("small");

/**
 * @description Injecte le message warning si counter > maxlength -2
 */

function addWarningMessage() {
  el_counter.style.color = "red";
  el_warningMessage.textContent =
    "Attention, vous êtes proche de la limite de caractères autorisés";
  el_warningMessage.style.display = "block";
}

/**
 * @description Supprime le message warning si counter < maxlength -2
 */

function removeWarningMessage() {
  el_counter.style.color = "green";
  el_warningMessage.textContent = "";
  el_warningMessage.style.display = "none";
}

addTextareaCounter();
