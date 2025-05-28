"use strict";
// Define a class for IP address validation
class IPAddressValidator {
    // Constructor accepts an IP address as input
    constructor(queryIP) {
        this.queryIP = queryIP;
    }
    // Public method to validate the IP and return the type
    validateIPAddress() {
        if (this.isValidIPv4()) {
            return "IPv4";
        }
        else if (this.isValidIPv6()) {
            return "IPv6";
        }
        else {
            return "Neither";
        }
    }
    // Private method to check if the IP is valid IPv4
    isValidIPv4() {
        const parts = this.queryIP.split('.'); // Split by dot
        if (parts.length !== 4)
            return false;
        for (const part of parts) {
            if (!/^\d+$/.test(part))
                return false; // Must contain only digits
            if (part.length > 1 && part.startsWith('0'))
                return false; // No leading zeros
            const num = Number(part);
            if (num < 0 || num > 255)
                return false; // Each part must be 0–255
        }
        return true;
    }
    // Private method to check if the IP is valid IPv6
    isValidIPv6() {
        const parts = this.queryIP.split(':'); // Split by colon
        if (parts.length !== 8)
            return false;
        const hexRegex = /^[0-9a-fA-F]{1,4}$/; // Match 1 to 4 hexadecimal characters
        for (const part of parts) {
            if (!hexRegex.test(part))
                return false;
        }
        return true;
    }
}
// ✅ Example usage (hardcoded values, no user input required)
const ip1 = new IPAddressValidator("192.168.1.1");
console.log(ip1.validateIPAddress()); // Output: "IPv4"
const ip2 = new IPAddressValidator("2001:db8:85a3:0:0:8A2E:0370:7334");
console.log(ip2.validateIPAddress()); // Output: "IPv6"
const ip3 = new IPAddressValidator("192.168.01.1");
console.log(ip3.validateIPAddress()); // Output: "Neither"
