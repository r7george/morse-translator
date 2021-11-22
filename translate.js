// need to create an array of translation for english to morse within the function
export const morseTranslator = (word) => {
  const morseDictionary = [
    ["a", ".-"], ["b", "-..."], ["c", "-.-."], ["d", "-.."], ["e", "."], ["f", "..-."], ["g", "--."], ["h", "...."], ["i", ".."], ["j", ".---"], ["k", ".-."], ["l", ".-.."], ["m", "--"], ["n", "-."], ["o", "---"], ["p", ".--."], ["q", "--.-"], ["r", ".-."], ["s", "..."], ["t", "-"], ["u", "..-"], ["v", "...-"], ["w", ".--"], ["x", "-..-"], ["y", "-.--"], ["z", "--.."], [" ", "/"]
  ];

  const letterArr = word.split("");

  const letterMorseArr = letterArr.map((w) => {
    const translate = morseDictionary.filter((l) => {
      if(l.includes(w)) return l;
    })
    return translate;
  });

  const morseArr = letterMorseArr.map((l) => {
    return l[0][1];
  })

  const morseString = morseArr.join(" ");
  
  return morseString;  
}