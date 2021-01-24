import { caesarCipher } from "./caesar-cipher";

const inputMessage = document.getElementById("message");
const outputMessage = document.getElementById("encrypted_message");

inputMessage.addEventListener("keyup", (e) => {
  if (e.target.value) {
    outputMessage.value = caesarCipher(e.target.value);
  }
});

outputMessage.addEventListener("keyup", (e) => {
  if (e.target.value) {
    inputMessage.value = caesarCipher(e.target.value);
  }
});
