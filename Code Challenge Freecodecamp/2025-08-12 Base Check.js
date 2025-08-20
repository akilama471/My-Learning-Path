//Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.

function isValidNumber(str, base) {
  str = str.toUpperCase();

  for (let ch of str) {
    let value;

    if (ch >= '0' && ch <= '9') {
      value = ch.charCodeAt(0) - '0'.charCodeAt(0);
    } else if (ch >= 'A' && ch <= 'Z') {
      value = ch.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    } else {
      return false;
    }
    if (value >= base) return false;
  }

  return true;
}