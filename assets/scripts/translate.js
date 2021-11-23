// an array of all the morse code translations
  const morseDictionary = [
    ["a", ".-"], ["b", "-..."], ["c", "-.-."], ["d", "-.."], ["e", "."], ["f", "..-."], ["g", "--."], ["h", "...."], ["i", ".."], ["j", ".---"], ["k", "-.-"], ["l", ".-.."], ["m", "--"], ["n", "-."], ["o", "---"], ["p", ".--."], ["q", "--.-"], ["r", ".-."], ["s", "..."], ["t", "-"], ["u", "..-"], ["v", "...-"], ["w", ".--"], ["x", "-..-"], ["y", "-.--"], ["z", "--.."], [" ", "/"]
  ];

export const englishTranslator = (word) => {
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

export const morseTranslator = (morsePhrase) => {
  // Testing to see if there are any invalid characters in the morse phrase
  // uses hexadecimal to get the characters within regex
  if (/^[\x20\x2D-\x2F]+$/.test(morsePhrase)) {
    const morseSplitArr = morsePhrase.split(" ");

    const morseArr = morseSplitArr.map((w) => {
      const translate = morseDictionary.filter((l) => {
        if(l.includes(w)) return l;
      })
      return translate;
    });

    // access the required morse translation
    const letterArr = morseArr.map((l) => {
      return l[0][0];
    });

    // making the array into a string with a space between
    const letterString = letterArr.join("");
    
    return letterString;
    
    
  }
  else {
    return `Invalid Input`;
  }
}


