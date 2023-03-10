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

// Maybe redux complexibility
function isPalindrome2(string) {
  inputString = inputString.toLowerCase();
  firstIndex = 0;
  lastIndex = inputString.length - 1;

  // In this case we must need verify half array
  // And dont need count
  while (firstIndex < lastIndex) {
    if (inputString[firstIndex] !== inputString[lastIndex]) {
      return false;
    }
    firstIndex = firstIndex + 1;
    lastIndex = lastIndex - 1;
  }; 

  return true;
}

// Using Join
function solution(inputString) {
  inputString = inputString.toLowerCase();
  const reverse = inputString.split("").reverse().join("");
  if (inputString === reverse) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("aabaa"));