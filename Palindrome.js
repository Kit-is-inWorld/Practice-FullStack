function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0z9]/g,);

    const reversedStr = cleanStr.split('').reverse('').join('');

    return cleanStr === reversedStr;
}

console.log(isPalindrome('radar'));
console.log(isPalindrome('madam'));
console.log(isPalindrome('meen'));