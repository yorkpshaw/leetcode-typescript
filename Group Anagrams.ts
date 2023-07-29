/* https://leetcode.com/problems/group-anagrams/ */

function groupAnagrams(strs: string[]): string[][] {
    let obj: { [key: string]: string[] } = {};

    for (let str of strs) {
        let letters = str.split("").sort().join("");
        obj[letters] ? obj[letters].push(str) : obj[letters] = [str];
    }

    return Object.values(obj);
}
/*
Store the results in the value of an object
Iterate over each string in the array,
    Split, sort, join each string on each iteration so each key in the object is the same
    If it is present, then push the current string being iterated into the object's value which is an array of strings
    If not, set the key-value pair where the value is an array of the first string
Return the object's values, which returns an array of the values
*/
