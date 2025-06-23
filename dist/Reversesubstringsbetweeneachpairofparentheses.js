"use strict";
class Solution {
    reverseParentheses(s) {
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (char === ')') {
                let temp = '';
                while (stack.length && stack[stack.length - 1] !== '(') {
                    temp += stack.pop();
                }
                stack.pop(); // remove '('
                for (let j = 0; j < temp.length; j++) {
                    stack.push(temp[j]);
                }
            }
            else {
                stack.push(char);
            }
        }
        return stack.join('');
    }
}
const i = "(ed(et(oc))el)";
//Create instance and call method
const solution = new Solution();
const output = solution.reverseParentheses(i);
//Print the output
console.log("Input: ", i);
console.log("Output:", output);
