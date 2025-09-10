/*
Given two strings representing your army and an opposing army, each character from your army battles the character at the same position from the opposing army using the following rules:

Characters a-z have a strength of 1-26, respectively.
Characters A-Z have a strength of 27-52, respectively.
Digits 0-9 have a strength of their face value.
All other characters have a value of zero.
Each character can only fight one battle.
For each battle, the stronger character wins. The army with more victories, wins the war. Return the following values:

"Opponent retreated" if your army has more characters than the opposing army.
"We retreated" if the opposing army has more characters than yours.
"We won" if your army won more battles.
"We lost" if the opposing army won more battles.
"It was a tie" if both armies won the same number of battles.
*/
function battle(myArmy, opposingArmy) {
    // Check for retreats first
    if (myArmy.length > opposingArmy.length) {
        return "Opponent retreated";
    }
    if (myArmy.length < opposingArmy.length) {
        return "We retreated";
    }
    
    const getStrength = (char) => {
        if (char >= 'a' && char <= 'z') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        } else if (char >= 'A' && char <= 'Z') {
            return char.charCodeAt(0) - 'A'.charCodeAt(0) + 27;
        } else if (char >= '0' && char <= '9') {
            return char.charCodeAt(0) - '0'.charCodeAt(0);
        } else {
            return 0;
        }
    };
    
    let myVictories = 0;
    let opposingVictories = 0;
    
    // Battle each character at the same position
    for (let i = 0; i < myArmy.length; i++) {
        const myStrength = getStrength(myArmy[i]);
        const opposingStrength = getStrength(opposingArmy[i]);
        
        if (myStrength > opposingStrength) {
            myVictories++;
        } else if (opposingStrength > myStrength) {
            opposingVictories++;
        }
        // If strengths are equal, no one wins that battle
    }
    
    if (myVictories > opposingVictories) {
        return "We won";
    } else if (opposingVictories > myVictories) {
        return "We lost";
    } else {
        return "It was a tie";
    }
}