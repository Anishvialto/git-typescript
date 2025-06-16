"use strict";
class UnionFind {
    constructor() {
        this.parent = new Array(26);
        for (let i = 0; i < 26; i++) {
            this.parent[i] = i;
        }
    }
    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]); // Path compression
        }
        return this.parent[x];
    }
    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            this.parent[rootX] = rootY;
        }
    }
    isConnected(x, y) {
        return this.find(x) === this.find(y);
    }
}
function equationsPossible(equations) {
    const uf = new UnionFind();
    // First pass: handle all "==" equations
    for (const eq of equations) {
        if (eq[1] === '=') {
            const x = eq.charCodeAt(0) - 97;
            const y = eq.charCodeAt(3) - 97;
            uf.union(x, y);
        }
    }
    // Second pass: handle all "!=" equations
    for (const eq of equations) {
        if (eq[1] === '!') {
            const x = eq.charCodeAt(0) - 97;
            const y = eq.charCodeAt(3) - 97;
            if (uf.isConnected(x, y)) {
                return false; // Conflict found
            }
        }
    }
    return true;
}
