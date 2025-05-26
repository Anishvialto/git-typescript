"use strict";
class AnagramFinder {
    constructor(s, p) {
        this.s = s; // this.s stores in main string s
        this.p = p; // this.p stores in pattern string p
    }
    findAnagrams() {
        let result = []; // result will store final answer(starting indices).
        let slen = this.s.length; // slen stores length of string s
        let plen = this.p.length; // plen stores length of string p
        if (slen < plen) // if the main string s is smaller than p, then there is no anagram possible
         {
            return result; // so we return empty result array immediately
        }
        let pcount = new Array(26).fill(0); // create two arrays of size 26 (for 26 english lowercase letters)
        let scount = new Array(26).fill(0);
        for (let i = 0; i < plen; i++) {
            pcount[this.p.charCodeAt(i) - 97]++; // ex: s="cbaebabacd", p="abc", so plen=3, slen=10
            scount[this.s.charCodeAt(i) - 97]++;
        }
        if (this.arraysMatch(pcount, scount)) // calls arraysMatch(pcount, scount)
         {
            result.push(0); // if they match, push 0 into result array (starting index)
        }
        for (let i = plen; i < slen; i++) {
            scount[this.s.charCodeAt(i) - 97]++; // ex: s="cbaebabacd", p="abc", so plen=3, slen=10
            scount[this.s.charCodeAt(i - plen) - 97]--; // i=3, e, scount[4]++
            if (this.arraysMatch(pcount, scount)) {
                result.push(i - plen + 1);
            }
        }
        return result;
    }
    arraysMatch(arr1, arr2) {
        for (let i = 0; i < 26; i++) // if all 26 values are equal, return true otherwise false.
         {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    }
}
// 👇 Example usage (replace with your actual test inputs)
const mainString = "cbaebabacd";
const pattern = "abc";
const finder = new AnagramFinder(mainString, pattern);
const res = finder.findAnagrams();
console.log("Starting indices of anagrams:", res);
