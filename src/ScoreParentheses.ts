class ScoreParentheses 
{
    input: string; // store the input string

    constructor(input: string)
    {
        this.input = input;
    }

    calculate(): number
    {
        const stack: (string | number)[] = []; // stack to hold both '(' and numeric scores

        for (let i = 0; i < this.input.length; i++) 
        {
            if (this.input[i] === '(') 
            {
                // If current character is '(', push to the stack
                stack.push('(');
            }
             else 
            {
                if (stack[stack.length - 1] === '(') 
                {
                    // Found a pair "()", pop '(' and push score 1
                    stack.pop();
                    stack.push(1);
                } 
                else 
                {
                    // Nested parentheses, calculate nested score
                    let score = 0;

                    // Pop and sum all numeric values until matching '(' is found
                    while (typeof stack[stack.length - 1] === 'number') 
                    {
                        score += stack.pop() as number;
                    }

                    stack.pop(); // pop the matching '('
                    stack.push(2 * score); // push double the nested score
                }
            }
        }

        // Sum all remaining scores in the stack
        let total = 0;
        for (let i = 0; i < stack.length; i++) {
            total += stack[i] as number;
        }

        return total; // final score
    }
}

const scorer1 = new ScoreParentheses("()");
console.log(scorer1.calculate()); // Output: 1

const scorer2 = new ScoreParentheses("(())");
console.log(scorer2.calculate()); // Output: 2

const scorer3 = new ScoreParentheses("()()");
console.log(scorer3.calculate()); // Output: 2

const scorer4 = new ScoreParentheses("(()(()))");
console.log(scorer4.calculate()); // Output: 6
