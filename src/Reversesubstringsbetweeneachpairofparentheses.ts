class Solution {
    reverseParentheses(s: string): string {
        const stack: string[] = [];

        for (let i = 0; i < s.length; i++) {
            const char: string = s[i];

            if (char === ')') {
                let temp: string = '';
                while (stack.length && stack[stack.length - 1] !== '(') {
                    temp += stack.pop();
                }
                stack.pop(); // remove '('

                for (let j = 0; j < temp.length; j++) {
                    stack.push(temp[j]);
                }
            } else {
                stack.push(char);
            }
        }

        return stack.join('');
    }
}
const i: string = "(ed(et(oc))el)";

//Create instance and call method
const solution = new Solution();
const output: string = solution.reverseParentheses(i);

//Print the output
console.log("Input: ", i);
console.log("Output:", output);
