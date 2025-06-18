class LongestCommonSubsequence {
  private text1: string;
  private text2: string;

  constructor(text1: string, text2: string) {
    this.text1 = text1;
    this.text2 = text2;
  }

  public findLCSLength(): number {
    const m: number = this.text1.length;
    const n: number = this.text2.length;

    // Create a 2D DP array (m+1 x n+1) filled with 0s
    const dp: number[][] = Array.from({ length: m + 1 }, () =>
      Array(n + 1).fill(0)
    );

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (this.text1[i - 1] === this.text2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    return dp[m][n];
  }
}
const text1: string = "abcde";
const text2: string = "ace";

const lcs = new LongestCommonSubsequence(text1, text2);
console.log(lcs.findLCSLength()); // Output: 3
