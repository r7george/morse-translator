import { morseTranslator } from "./translate.js";
import { it, expect, describe } from "@jest/globals";

// Need to write tests to translate english to morse
// Going to use "describe to group together tests"

// Testing random letters to see if they translate correctly
describe("Testing single letter translations", () => {
  it("Should translate hello to '.... . .-.. .-.. ---'", () => {
    const result = morseTranslator("hello");
    expect(result).toBe(".... . .-.. .-.. ---");
  });
  
  it("Should translate world to '.-- --- .-. .-.. -..'", () => {
    const result = morseTranslator("world");
    expect(result).toBe(".-- --- .-. .-.. -..");
  });
});