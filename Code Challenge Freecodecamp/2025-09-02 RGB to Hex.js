/*
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

Input	Output
"rgb(255, 255, 255)"	"#ffffff"
"rgb(1, 2, 3)"	"#010203"
Make any letters lowercase.
Return a # followed by six characters. Don't use any shorthand values.
*/

function rgbToHex(rgb) {
  // Extract numbers using regex
  const match = rgb.match(/\d+/g);
  if (!match) return null; // handle invalid input

  // Convert to hex, pad with leading zeros if necessary
  const hex = match
    .map(num => {
      const h = Number(num).toString(16); // convert to hex
      return h.padStart(2, '0'); // ensure two digits
    })
    .join('');

  return `#${hex}`;
}