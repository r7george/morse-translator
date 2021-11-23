import { morseTranslator } from "./translate.js";

const englishInput = document.querySelector("#translatorInput");
const morseOutput = document.querySelector("#translatorOutput");
const submitBtn = document.querySelector("#submitBtn");
const clearBtn = document.querySelector("#clearBtn");

const handleTranslateClick = () => {
  const input = englishInput.value;
  const output = morseTranslator(input);
  morseOutput.value = output;
}

const handleClearClick = () => {
  englishInput.value = "";
  morseOutput.value = "";
}

submitBtn.addEventListener("click", handleTranslateClick);
clearBtn.addEventListener("click", handleClearClick);