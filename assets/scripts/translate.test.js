import { englishTranslator, morseTranslator } from "./translate.js";
import { it, expect, describe } from "@jest/globals";

// Need to write tests to translate english to morse
// Going to use "describe to group together tests"

// Testing random letters to see if they translate correctly
describe("Testing single letter translations for english to morse", () => {

  it("Should translate a to .-", () => {
    const result = englishTranslator("a");
    expect(result).toBe(".-");
  });
  
  it("Should translate i to ..", () => {
    const result = englishTranslator("i");
    expect(result).toBe("..");
  });

  it("Should translate m to --", () => {
    const result = englishTranslator("m");
    expect(result).toBe("--");
  });

  it("Should translate q to --.-", () => {
    const result = englishTranslator("q");
    expect(result).toBe("--.-");
  });

  it("Should translate s to ...", () => {
    const result = englishTranslator("s");
    expect(result).toBe("...");
  });

  it("Should translate y to -.--", () => {
    const result = englishTranslator("y");
    expect(result).toBe("-.--");
  });

});

// Testing random words to see if they translate correctly
describe("Testing word translations for english to morse", () => {
  
  it("Should translate 'hello' to '.... . .-.. .-.. ---'", () => {
    const result = englishTranslator("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  });
  
  it("Should translate 'world' to '.-- --- .-. .-.. -..'", () => {
    const result = englishTranslator("world");
    expect(result).toBe(".-- --- .-. .-.. -..");
  });

});

// Testing sentences to see if they translate correctly
describe("Testing sentence translations for english to morse", () => {
  
  it("Should translate 'hello world' to '.... . .-.. .-.. --- / .-- --- .-. .-.. -..'", () => {
    const result = englishTranslator("hello world");
    expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });
  
  it("Should translate 'this is a sentence' to '- .... .. ... / .. ... / .- / ... . -. - . -. -.-. .'", () => {
    const result = englishTranslator("this is a sentence");
    expect(result).toBe("- .... .. ... / .. ... / .- / ... . -. - . -. -.-. .");
  });

});

// Testing for capitalisation errors
describe("Testing to see whether capitalisation makes a difference for english to morse", () => {

  it("Should translate 'HeLlO' to '.... . .-.. .-.. ---'", () => {
    const result = englishTranslator("HeLlO");
    expect(result).toBe(".... . .-.. .-.. ---");
  });
  
  it("Should translate 'wORLd' to '.-- --- .-. .-.. -..'", () => {
    const result = englishTranslator("wORLd");
    expect(result).toBe(".-- --- .-. .-.. -..");
  });

});

// Testing for only alphabet and spaces within input
describe("Testing for alphabet/space as inputs for english to morse", () => {

  it("Should translate 'Hi!' to 'Invalid Input'", () => {
    const result = englishTranslator("Hi!");
    expect(result).toBe("Invalid Input");
  });
  
  it("Should translate '12345' to 'Invalid Input'", () => {
    const result = englishTranslator("12345");
    expect(result).toBe("Invalid Input");
  });

});


/* MORSE TO ENGLISH */

// Testing random letters to see if they translate correctly
describe("Testing single letter translations for morse to english", () => {

  it("Should translate .- to a", () => {
    const result = morseTranslator(".-");
    expect(result).toBe("a");
  });
  
  it("Should translate .. to i", () => {
    const result = morseTranslator("..");
    expect(result).toBe("i");
  });

  it("Should translate -- to m", () => {
    const result = morseTranslator("--");
    expect(result).toBe("m");
  });

  it("Should translate --.- to q", () => {
    const result = morseTranslator("--.-");
    expect(result).toBe("q");
  });

  it("Should translate ... to s", () => {
    const result = morseTranslator("...");
    expect(result).toBe("s");
  });

  it("Should translate -.-- to y", () => {
    const result = morseTranslator("-.--");
    expect(result).toBe("y");
  });

});

// Testing random words to see if they translate correctly
describe("Testing word translations for morse to english", () => {
  
  it("Should translate '.... . .-.. .-.. ---' to 'hello'", () => {
    const result = morseTranslator(".... . .-.. .-.. ---");
    expect(result).toBe("hello");
  });
  
  it("Should translate '.-- --- .-. .-.. -..' to 'world'", () => {
    const result = morseTranslator(".-- --- .-. .-.. -..");
    expect(result).toBe("world");
  });

});

// Testing sentences to see if they translate correctly
describe("Testing sentence translations for morse to english", () => {
  
  it("Should translate '.... . .-.. .-.. --- / .-- --- .-. .-.. -..' to 'hello world'", () => {
    const result = morseTranslator(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    expect(result).toBe("hello world");
  });
  
  // This test has all the letters of the alphabet so v useful
  it("Should translate '- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.' to 'the quick brown fox jumps over the lazy dog'", () => {
    const result = morseTranslator("- .... . / --.- ..- .. -.-. -.- / -... .-. --- .-- -. / ..-. --- -..- / .--- ..- -- .--. ... / --- ...- . .-. / - .... . / .-.. .- --.. -.-- / -.. --- --.");
    expect(result).toBe("the quick brown fox jumps over the lazy dog");
  });

});


// Testing for relevant inputs
describe("Testing for alphabet/space as inputs for morse to english", () => {

  it("Should translate 'Hi!' to 'Invalid Input'", () => {
    const result = morseTranslator("Hi!");
    expect(result).toBe("Invalid Input");
  });
  
  it("Should translate '12345' to 'Invalid Input'", () => {
    const result = morseTranslator("12345");
    expect(result).toBe("Invalid Input");
  });

});