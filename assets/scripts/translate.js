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
  
  // checking whether it's only alphabets & space being entered
  if (/^[A-Za-z ]+$/.test(wordLC)) {
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
    });

    // making the array into a string with a space between
    const morseString = morseArr.join(" ");
    
    return morseString;  
  }
  else {
    return `Invalid Input`;
  }
}


