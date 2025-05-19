"use strict";
class MaskingPersonal {
    constructor(info) {
        this.info = info;
    }
    lower(str) {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            let code = str.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                result += String.fromCharCode(code + 32);
            }
            else {
                result += str[i];
            }
        }
        return result;
    }
    maskEmail(email) {
        const parts = email.split("@");
        const name = this.lower(parts[0]);
        const domain = this.lower(parts[1]);
        return name[0] + "*****" + name[name.length - 1] + "@" + domain;
    }
    maskPhone(phone) {
        let digits = "";
        for (let i = 0; i < phone.length; i++) {
            if (phone[i] >= '0' && phone[i] <= '9') {
                digits += phone[i];
            }
        }
        const local = "***-***-" + digits.slice(digits.length - 4);
        if (digits.length === 10) {
            return local;
        }
        let countryCode = "+";
        for (let i = 0; i < digits.length - 10; i++) {
            countryCode += "*";
        }
        return countryCode + "-" + local;
    }
    getMaskInfo() {
        if (this.info.indexOf('@') !== -1) {
            return this.maskEmail(this.info);
        }
        else {
            return this.maskPhone(this.info);
        }
    }
}
// Example input
const input = [
    "Leetcode@Leet.com",
    "123-456-789",
    "+1 (123) 567-8901",
    "+91 98765-43210"
];
for (let i = 0; i < input.length; i++) {
    const masker = new MaskingPersonal(input[i]);
    console.log("original =", input[i]);
    console.log("masked =", masker.getMaskInfo());
    console.log("------------");
}
