// need to create an array of translation for english to morse within the function
export const morseTranslator = (letter) => {
  const morseDictionary = [
    ["a", ".-"], ["b", "-..."], ["c", "-.-."], ["d", "-.."], ["e", "."], ["f", "..-."], ["g", "--."], ["h", "...."], ["i", ".."], ["j", ".---"], ["k", ".-."], ["l", ".-.."], ["m", "--"], ["n", "-."], ["o", "---"], ["p", ".--."], ["q", "--.-"], ["r", ".-."], ["s", "..."], ["t", "-"], ["u", "..-"], ["v", "...-"], ["w", ".--"], ["x", "-..-"], ["y", "-.--"], ["z", "--.."]
  ];

  const translate = morseDictionary.map((l) => {
    if(l.includes(letter)) return l[1];
  });

  const translateFilter = translate.filter((l) => {
    return l != null;
  });

  return translateFilter.toString();
}