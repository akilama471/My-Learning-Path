/*
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence
*/

function isPangram(sentence, letters) {
  // Normalize input
  const normalizedLetters = new Set(letters.toLowerCase());

  // Extract only a-z characters, convert to lowercase
  const cleanedSentence = sentence.toLowerCase().replace(/[^a-z]/g, "");

  // Convert sentence into a set of letters
  const sentenceLetters = new Set(cleanedSentence);

  // 1. Check if every required letter exists in sentence
  for (let letter of normalizedLetters) {
    if (!sentenceLetters.has(letter)) {
      return false;
    }
  }

  // 2. Check if there are no extra letters
  for (let letter of sentenceLetters) {
    if (!normalizedLetters.has(letter)) {
      return false;
    }
  }

  return true;
}
