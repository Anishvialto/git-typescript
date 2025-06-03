"use strict";
function equationsPossible(equations) {
    const parent = new Array(26).fill(0).map((_, i) => i);
    // Helper to find the root of a variable
    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]); // Path compression
        }
        return parent[x];
    }
    // Helper to union two variables
    function union(x, y) {
        const rootX = find(x);
        const rootY = find(y);
        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }
    // First pass: process all "==" equations
    for (const eq of equations) {
        if (eq[1] === '=') {
            const x = eq.charCodeAt(0) - 97;
            const y = eq.charCodeAt(3) - 97;
            union(x, y);
        }
    }
    // Second pass: process all "!=" equations
    for (const eq of equations) {
        if (eq[1] === '!') {
            const x = eq.charCodeAt(0) - 97;
            const y = eq.charCodeAt(3) - 97;
            if (find(x) === find(y)) {
                return false;
            }
        }
    }
    return true;
}
