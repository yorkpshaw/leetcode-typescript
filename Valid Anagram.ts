/* https://leetcode.com/problems/valid-anagram/ */

function isAnagram(s: string, t: string): boolean {

    if (s.length !== t.length) {
            return false;
        }

        let first = {};
        let second = {};

        for (let val of s) {
            // first[val] = (first[val] ? first[val] : 0) + 1;
            first[val] ? first[val] += 1 : first[val] = 1;
        }

        for (let val of t) {
            // second[val] = (second[val] ? second[val] : 0) +1;
            second[val] ? second[val] += 1: second[val] = 1;

        }

        for (let key in first) {
            if (!(key in second)) {
                return false
            }
            if (first[key] !== second[key]) {
                return false
            }
        }

        return true;
};

// If lengths differ, return false
// Create an objects counter for both words
// Loop through both words
// Initialize a key to be 0 if it doesn't exist
// The ternary operator condition ? exprIfTrue : exprIfFalse works as follows: if condition is true, it evaluates exprIfTrue; otherwise, it evaluates exprIfFalse.
// If a key from the first does not exist in second, return false
// If the key/value pairs are not the same, return false
// Return true because all conditions passed
// O(n) Time
