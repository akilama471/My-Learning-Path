// Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

// The function should handle "red", "green", or "blue" as an input argument.
// If the input is not one of those, the function should return "Invalid color".
// The function should return a random six-character hex color code where the input color value is greater than any of the others.
// Example of valid outputs for a given input:
// 

//1. generateHex("yellow") should return "Invalid color".
//2. generateHex("red") should return a six-character string.
//3. generateHex("red") should return a valid six-character hex color code.
//4. generateHex("red") should return a valid hex color with a higher red value than other colors.
//5. Calling generateHex("red") twice should return two different hex color values where red is dominant.
//6. Calling generateHex("green") twice should return two different hex color values where green is dominant.
//7. Calling generateHex("blue") twice should return two different hex color values where blue is dominant.


//Input	Output
//"red"	"FF0000"
//"green"	"00FF00"
//"blue"	"0000FF"

// Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

// The function should handle "red", "green", or "blue" as an input argument.
// If the input is not one of those, the function should return "Invalid color".
// The function should return a random six-character hex color code where the input color value is greater than any of the others.
// Example of valid outputs for a given input:
// 

//1. generateHex("yellow") should return "Invalid color".
//2. generateHex("red") should return a six-character string.
//3. generateHex("red") should return a valid six-character hex color code.
//4. generateHex("red") should return a valid hex color with a higher red value than other colors.
//5. Calling generateHex("red") twice should return two different hex color values where red is dominant.
//6. Calling generateHex("green") twice should return two different hex color values where green is dominant.
//7. Calling generateHex("blue") twice should return two different hex color values where blue is dominant.


//Input	Output
//"red"	"FF0000"
//"green"	"00FF00"
//"blue"	"0000FF"

function generateHex(color) {
    if (color !== "red" && color !== "green" && color !== "blue") {
        return "Invalid color";
    }

    let r = 0, g = 0, b = 0;

    if (color === "red") {
        r = Math.floor(Math.random() * 255) + 1; // Ensure r is 1–255
        g = Math.floor(Math.random() * r); // g < r
        b = Math.floor(Math.random() * r); // b < r
    } else if (color === "green") {
        g = Math.floor(Math.random() * 255) + 1; // Ensure g is 1–255
        r = Math.floor(Math.random() * g); // r < g
        b = Math.floor(Math.random() * g); // b < g
    } else if (color === "blue") {
        b = Math.floor(Math.random() * 255) + 1; // Ensure b is 1–255
        r = Math.floor(Math.random() * b); // r < b
        g = Math.floor(Math.random() * b); // g < b
    }

    // Convert to two-digit hex values and combine
    return `${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}