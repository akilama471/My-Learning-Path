/*
Given a string, return its camel case version using the following rules:

Words in the string argument are separated by one or more characters from the following set: space ( ), dash (-), or underscore (_). Treat any sequence of these as a word break.
The first word should be all lowercase.
Each subsequent word should start with an uppercase letter, with the rest of it lowercase.
All spaces and separators should be removed.

1. toCamelCase("hello world") should return "helloWorld".
2. toCamelCase("HELLO WORLD") should return "helloWorld".
3. toCamelCase("secret agent-X") should return "secretAgentX".
4. toCamelCase("FREE cODE cAMP") should return "freeCodeCamp".
5. toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".
*/

function toCamelCase(s) {
    s = s.toLowerCase().split(/[\s-_]+/).map((word, index) => {
    if (index > 0) word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
  }).join("");
  return s;
}