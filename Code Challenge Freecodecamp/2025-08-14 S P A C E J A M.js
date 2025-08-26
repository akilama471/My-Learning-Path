// Given a string, remove all spaces from the string, insert two spaces between every character, convert all alphabetical letters to uppercase, and return the result.
// Non-alphabetical characters should remain unchanged (except for spaces).

function spaceJam(str) {
  // Remove all spaces and split into array of characters
  let chars = str.replace(/\s/g, '').split('');
  
  // Convert alphabetical characters to uppercase and join with two spaces
  return chars
    .map(char => /[a-zA-Z]/.test(char) ? char.toUpperCase() : char)
    .join('  ');
}