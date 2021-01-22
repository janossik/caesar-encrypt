import { caesarCipher } from "./caesar-cipher";

const inputMessage = document.getElementById("message");
const outputMessage = document.getElementById("emcrypt_message");

inputMessage.addEventListener("keyup", (e) => {
  outputMessage.value = caesarCipher(e.target.value);
});
