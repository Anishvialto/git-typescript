"use strict";
class Solu {
    removeDuplicates(s, k) {
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (stack.length && stack[stack.length - 1].char === char) {
                stack[stack.length - 1].count++;
                if (stack[stack.length - 1].count === k) {
                    stack.pop(); // Remove the group
                }
            }
            else {
                stack.push({ char: char, count: 1 });
            }
        }
        // Reconstruct the final string
        let result = '';
        for (const item of stack) {
            result += item.char.repeat(item.count);
        }
        return result;
    }
}
// Provide input
const inp = "deeedbbcccbdaa";
const f = 3;
//Create instance and call method
const solu = new Solu();
const Output = solu.removeDuplicates(i, k);
// result
console.log("Input: ", inp);
console.log("k:     ", f);
console.log("Output:", Output);
