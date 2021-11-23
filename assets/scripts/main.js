import { englishTranslator, morseTranslator } from "./translate.js";

const input = document.querySelector("#translatorInput");
const output = document.querySelector("#translatorOutput");

const submitBtn = document.querySelector("#submitBtn");
const clearBtn = document.querySelector("#clearBtn");
const switchBtn = document.querySelector("#switchBtn");

const labels = document.querySelectorAll(".translator__label");


const handleTranslateClick = () => {
  if (labels[0].innerHTML == "English") {
    const inputJS = input.value;
    const outputJS = englishTranslator(inputJS);
    output.value = outputJS;
  }
  else {
    const inputJS = input.value;
    const outputJS = morseTranslator(inputJS);
    output.value = outputJS;
  }
}

const handleClearClick = () => {
  input.value = "";
  output.value = "";
}

const handleSwitchClick = () => {
  if(labels[0].innerHTML == "English") {
    labels[0].innerHTML = "Morse";
    labels[1].innerHTML = "English";
  }
  else if (labels[0].innerHTML == "Morse") {
    labels[0].innerHTML = "English";
    labels[1].innerHTML = "Morse";
  }
}

submitBtn.addEventListener("click", handleTranslateClick);
clearBtn.addEventListener("click", handleClearClick);
switchBtn.addEventListener("click", handleSwitchClick);
