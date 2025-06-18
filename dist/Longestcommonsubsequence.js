"use strict";
class LongestCommonSubsequence {
    constructor(text1, text2) {
        this.text1 = text1;
        this.text2 = text2;
    }
    findLCSLength() {
        const m = this.text1.length;
        const n = this.text2.length;
        // Create a 2D DP array (m+1 x n+1) filled with 0s
        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
        // Fill the DP table
        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                if (this.text1[i - 1] === this.text2[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                }
                else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }
        return dp[m][n];
    }
}
const text1 = "abcde";
const text2 = "ace";
const lcs = new LongestCommonSubsequence(text1, text2);
console.log(lcs.findLCSLength()); // Output: 3
