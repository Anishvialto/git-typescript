class OnesAndZeroes {
  strs: string[];  // a list of binary strings
  m: number;       // maximum number of zeroes allowed
  n: number;       // maximum number of ones allowed

  constructor(strs: string[], m: number, n: number) {
    this.strs = strs;
    this.m = m;
    this.n = n;
  }

  findmax(): number {
    let dp: number[][] = [];  // this line creates an empty array dp

    for (let i = 0; i <= this.m; i++) {
      dp.push([]);  // adds an empty array to the dp array. It's creating a new row in the 2D array dp

      for (let j = 0; j <= this.n; j++) {
        dp[i].push(0);  // the value of 0 to the current row dp[i].
      }
    }

    for (let k = 0; k < this.strs.length; k++) {
      // outer loop iterates over each string in this.strs
      // it will loop over all binary strings in the input list

      let zeros = 0; // 0 and 1 variable will track the count of 0s and 1s in the current str.
      let ones = 0;
      let str = this.strs[k];  // e.g., strs = ["10", "0001", "111001", "1", "0"]

      for (let i = 0; i < str.length; i++) {
        // inner loop counts the number of 0s and 1s in each string str
        if (str[i] === '0') {
          zeros++;
        } else if (str[i] === '1') {
          ones++;
        }
      }

      for (let i = this.m; i >= zeros; i--) {
        for (let j = this.n; j >= ones; j--) {
          // now dp is updated based on the counts of 0s and 1s for each string.
          // example: for string "0001" (3 zeros, 1 one)
          // if (1 + dp[3-3][3-1] > dp[3][3]) becomes
          // if (1 + dp[0][2] > dp[3][3])
          dp[i][j] = Math.max(dp[i][j], 1 + dp[i - zeros][j - ones]);
        }
      }
    }

    return dp[this.m][this.n];
  }
}

// Example usage instead of prompt-sync
const binaryStrings = ["10", "0001", "111001", "1", "0"];
const maxZeros = 5;
const maxOnes = 3;

const solver = new OnesAndZeroes(binaryStrings, maxZeros, maxOnes);
const r = solver.findmax();

console.log("Largest subset size:", r);
