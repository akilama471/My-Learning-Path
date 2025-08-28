// Given a string, return a jumbled version of that string where each word is transformed using the following constraints:
// The first and last letters of the words remain in place
// All letters between the first and last letter are sorted alphabetically.
// The input strings will contain no punctuation, and will be entirely lowercase.

function jbelmu(text) {
  return text.split(" ").map(word => {
    if (word.length <= 2) return word; // nothing to sort

    const first = word[0];
    const last = word[word.length - 1];
    const middle = word.slice(1, -1).split("").sort().join("");

    return first + middle + last;
  }).join(" ");
}
