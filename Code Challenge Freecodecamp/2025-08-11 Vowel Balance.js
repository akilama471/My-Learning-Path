//Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

function isBalanced(word) {
  let length = word.length;
  let firstPart, secondPart;

  if (length % 2 === 1) {
    let mid = Math.floor(length / 2);
    firstPart = word.slice(0, mid);
    secondPart = word.slice(mid + 1);
  } else {
    let mid = length / 2;
    firstPart = word.slice(0, mid);
    secondPart = word.slice(mid);
  }
 
  const countVowels = (str) => {
    return (str.match(/[aeiou]/gi) || []).length;
  }

  let v1 = countVowels(firstPart);
  let v2 = countVowels(secondPart);

  console.log("First Part:", firstPart, "Vowels:", v1);
  console.log("Second Part:", secondPart, "Vowels:", v2);

  return v1 === v2;
}