const a_low = 97;
const z_low = 122;
const a_upper = 65;
const z_upper = 90;

const isInScope = (codeLetter, a, z) => codeLetter >= a && codeLetter <= z;

const move = (codeLetter, how) => String.fromCharCode(codeLetter + how);

const executionMove = (codeLetter, a, z) =>
  isInScope(codeLetter, a, z - 13)
    ? move(codeLetter, 13)
    : move(codeLetter, a - z + 12);

export const caesarCipher = (text) => {
  if (!text) {
    throw new Error(`You didn't say a word`);
  }
  if (typeof text !== "string") {
    throw new Error(`The parameter must be of type string`);
  }
  let codeText = "";
  for (const letter of text) {
    let codeLetter = letter.charCodeAt();
    if (isInScope(codeLetter, a_low, z_low)) {
      codeText += executionMove(codeLetter, a_low, z_low);
    } else if (isInScope(codeLetter, a_upper, z_upper)) {
      codeText += executionMove(codeLetter, a_upper, z_upper);
    } else {
      codeText += letter;
    }
  }
  return codeText;
};
