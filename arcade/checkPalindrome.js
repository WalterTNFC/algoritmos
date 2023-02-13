function isPalindrome(inputString) {
  inputString = inputString.toLowerCase();
  let firstIndex = 0;
  let lastIndex = inputString.length -1;
  let count = 0;
  while(count < lastIndex) {
    if (inputString[firstIndex] !== inputString[lastIndex]){
      return false
    }
    firstIndex = firstIndex + 1;
    lastIndex = lastIndex - 1;
    count = count + 1;
  }

  return true;
}

console.log(isPalindrome("aabaa"));