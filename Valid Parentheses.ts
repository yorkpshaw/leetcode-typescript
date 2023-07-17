/* https://leetcode.com/problems/valid-parentheses/ */

function isValid(s: string): boolean {
    const stack: Array<any> = [];
    const characters = { ')': '(', '}': '{', ']': '['};
    for (const char of s) {

    if (!characters[char]){
        stack.push(char);
    }
    else if (stack.pop() !== characters[char]){
        return false;
    }
    }
    return stack.length === 0;
};

/*
Output is a true or false statement
Declare a stack variable, type array with type any in the array. Used to temporarily store current/next char
Create a reference object for the characters we are checking for, with closing char as keys and opening char as value
Loop through the string's characters with a for of loop to get the specific string
If the current character we're checking out is not a key in the characters object, then push that into stack --- checking if it is open
If it is an open bracket, push to stack...next iteration, we are checking if the opening bracket in the stack corresponds with the current character's value in the characters object
If it doesn't, then always return false
If it does, then answer remains true and we move on
*/

/*
Alternate Solution that doesn't have stack.pop()
function isValid(s: string): boolean {
    const stack: string[] = [];
    const characters = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
      if (!characters[char]) {
        stack.push(char);
      } else if (stack[stack.length - 1] !== characters[char]) {
        return false;
      } else {
        stack.pop();
      }
    }

    return stack.length === 0;
  }
  */
