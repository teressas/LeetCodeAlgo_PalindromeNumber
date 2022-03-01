/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = (x) => {
    // convert integer to string
    let str = String(x)
    if (str.length === (0||1) ){
        return true
    }
    // iterate string from the beginning and the end
    for (let i = 0; i < str.length; i++) {
        // if i <= str.length-i then return true
        if (i >= str.length - i) {
            return true
        }
        // if str[i] === str[str.length-i] then continue checking
        // else break
        if (str[i] === str[(str.length - 1) - i]) {
            continue
        } else {
            return false
        }

    }

};

x1 = 121
x2 = 1234
x3 = -121
x4 = 1221
console.log(isPalindrome(x1))
console.log(isPalindrome(x2))
console.log(isPalindrome(x3))
console.log(isPalindrome(x4))
