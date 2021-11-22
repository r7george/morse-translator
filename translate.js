// need to create an array of translation for english to morse within the function
export const morseTranslator = (word) => {
  // an array of all the morse code translations
  const morseDictionary = [
    ["a", ".-"], ["b", "-..."], ["c", "-.-."], ["d", "-.."], ["e", "."], ["f", "..-."], ["g", "--."], ["h", "...."], ["i", ".."], ["j", ".---"], ["k", ".-."], ["l", ".-.."], ["m", "--"], ["n", "-."], ["o", "---"], ["p", ".--."], ["q", "--.-"], ["r", ".-."], ["s", "..."], ["t", "-"], ["u", "..-"], ["v", "...-"], ["w", ".--"], ["x", "-..-"], ["y", "-.--"], ["z", "--.."], [" ", "/"]
  ];

  // to make the input is put to lowercase
  const wordLC = word.toLowerCase();

  // to split the input word/s into an array
  const letterArr = wordLC.split("");

  // get an array (within an array) or all the morse code translations
  const letterMorseArr = letterArr.map((w) => {
    const translate = morseDictionary.filter((l) => {
      if(l.includes(w)) return l;
    })
    return translate;
  });

  // access the required morse translation
  const morseArr = letterMorseArr.map((l) => {
    return l[0][1];
  })

  // making the array into a string with a space between
  const morseString = morseArr.join(" ");
  
  return morseString;  
}


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



