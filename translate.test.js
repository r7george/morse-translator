import { morseTranslator } from "./translate.js";
import { it, expect, describe } from "@jest/globals";

// Need to write tests to translate english to morse
// Going to use "describe to group together tests"

// Testing random letters to see if they translate correctly
describe("Testing single letter translations", () => {

  it("Should translate a to .-", () => {
    const result = morseTranslator("a");
    expect(result).toBe(".-");
  });
  
  it("Should translate i to ..", () => {
    const result = morseTranslator("i");
    expect(result).toBe("..");
  });

  it("Should translate m to --", () => {
    const result = morseTranslator("m");
    expect(result).toBe("--");
  });

  it("Should translate q to --.-", () => {
    const result = morseTranslator("q");
    expect(result).toBe("--.-");
  });

  it("Should translate s to ...", () => {
    const result = morseTranslator("s");
    expect(result).toBe("...");
  });

  it("Should translate y to -.--", () => {
    const result = morseTranslator("y");
    expect(result).toBe("-.--");
  });

});

// Testing random words to see if they translate correctly
describe("Testing word translations", () => {
  
  it("Should translate 'hello' to '.... . .-.. .-.. ---'", () => {
    const result = morseTranslator("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  });
  
  it("Should translate 'world' to '.-- --- .-. .-.. -..'", () => {
    const result = morseTranslator("world");
    expect(result).toBe(".-- --- .-. .-.. -..");
  });

});

// Testing sentences to see if they translate correctly
describe("Testing sentence translations", () => {
  
  it("Should translate 'hello world' to '.... . .-.. .-.. --- / .-- --- .-. .-.. -..'", () => {
    const result = morseTranslator("hello world");
    expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });
  
  it("Should translate 'this is a sentence' to '- .... .. ... / .. ... / .- / ... . -. - . -. -.-. .'", () => {
    const result = morseTranslator("this is a sentence");
    expect(result).toBe("- .... .. ... / .. ... / .- / ... . -. - . -. -.-. .");
  });

});

// Testing for capitalisation errors
describe("Testing to see whether capitalisation makes a difference", () => {

  it("Should translate 'HeLlO' to '.... . .-.. .-.. ---'", () => {
    const result = morseTranslator("HeLlO");
    expect(result).toBe(".... . .-.. .-.. ---");
  });
  
  it("Should translate 'wORLd' to '.-- --- .-. .-.. -..'", () => {
    const result = morseTranslator("wORLd");
    expect(result).toBe(".-- --- .-. .-.. -..");
  });

});