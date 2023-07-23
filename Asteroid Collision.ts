/* https://leetcode.com/problems/asteroid-collision/ */

function asteroidCollision(asteroids: number[]): number[] {
    let l = 0;
    let r = 1;

    while (l >= 0 && r < asteroids.length) {
        if (asteroids[l] > 0 && asteroids[r] < 0) {
            if (Math.abs(asteroids[l]) > Math.abs(asteroids[r])) {
                asteroids.splice(r, 1);
                // r++; <--- This was a mistake!
            } else if (Math.abs(asteroids[l]) === Math.abs(asteroids[r])) {
                asteroids.splice(l, 2);
                l = Math.max(0, l - 1);
                r = Math.min(l + 1, asteroids.length);
            } else {
                asteroids.splice(l, 1);
                l = Math.max(0, l - 1);
                r = Math.min(l + 1, asteroids.length);
            }
        } else {
            l++;
            r++;
        }
    }

    return asteroids;

};

/*
There could be a giant asteroid at the end that moves all the way to the left
Set up a left and right pointer
If the pointer on the right's absolute value is greater than the left...
Then get rid of the left element

If the left is positive and the right is negative then we must compare
    If the absolute value of left is greater than right,
        Push left into the result array, get rid of element on right
    If the absolute value of right is greater than left,
        Get rid of element on left

    [5,10,-20]
       10 < 20
    [5,-20]
    5 < 20
    [-20]

while l >= 0 and right < asteroids.length
If asteroids[l] > 0 and asteroids[r] < 0:

    If a collision happens where abs(left)>abs(right), move both pointers up 1, splice out the one on the right
    If a collision happens where abs(right)>abs(left), move both pointers down 1, splice out the one on the left

If no collision happens then move the pointers over
Use splice to remove elements
l and r must always stay in bounds --- use math.max or math.min to ensure it doesn't go below 0 or above asteroids.length-1
if both are equal, we must splice off both and move both pointers up and down
*/

// STACK SOLUTION
function asteroidCollision(asteroids: number[]): number[] {
const stack: number[] = [];

for (const asteroid of asteroids) {
    let shouldAdd = true;

    while (stack.length && asteroid < 0 && stack[stack.length - 1] > 0) {
        if (Math.abs(asteroid) > stack[stack.length - 1]) {
            stack.pop(); // Remove the smaller asteroid from the stack
        } else if (Math.abs(asteroid) === stack[stack.length - 1]) {
            stack.pop(); // Both asteroids explode
            shouldAdd = false;
            break;
        } else {
            shouldAdd = false; // Current asteroid is destroyed
            break;
        }
    }

    if (shouldAdd) {
        stack.push(asteroid);
    }
}

return stack;
};
