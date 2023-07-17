/* https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75 */

function mergeAlternately(word1: string, word2: string): string {

    let i: number = 0;
    let j: number = 0;
    let result: string = '';

    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            result += word1[i];
            i++;
        }
        if (j < word2.length) {
            result += word2[j];
            j++;
        }
    }

    return result
};

/*
Declare two pointers, both number types, to iterate over each string
The result is a string that letters concat into
While iterating through the length of strings...
Add the first character from word1 as long as 'i<word.length'
Code will move on and ignore the blocks if the condition of 'i/j<word.length' isn't met
*/
