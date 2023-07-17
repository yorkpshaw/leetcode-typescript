/* https://leetcode.com/problems/roman-to-integer/description/ */

function romanToInt(s: string): number {

    const numerals: { [key: string]: number } = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
    };

    let integer = 0;

    for (let i = 0; i < s.length; i++) {
    let cur = numerals[s[i]];
    let next = numerals[s[i + 1]];

    if (cur < next) {
        integer -= cur;
    } else {
        integer += cur;
    }
    }

    return integer;
};

/*
Create a reference object storing roman numerals and their values. Key of type string, value of type number
Add each integer's value to a counting result variable
Set a current pointer to the value of the current numeral and the next one
If the next roman num's value is larger, then it's 4/9/40/90/400/900/etc. and we have to subtract current first to make up for it
IV = 0-1+5 = 4
IX = 0-1+10 = 9
*/
