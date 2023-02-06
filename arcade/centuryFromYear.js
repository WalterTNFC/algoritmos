function century(verifyDecade, getInitialNumbers) {
  if (verifyDecade == '00') {
    return Number(getInitialNumbers)
  } else {
    return Number(getInitialNumbers)+1
  }
};

function solution(year) {
  const convertYearToString = year.toString();
  console.log(convertYearToString.length);

  if (convertYearToString.length == 4) {
    const getInitialNumbers = convertYearToString.substring(0,2);
    verifyDecade = convertYearToString.substring(2,5);
    
    return century(verifyDecade, getInitialNumbers);

  } else if (convertYearToString.length == 3) {
    const getInitialNumbers = convertYearToString.substring(0,1);
    verifyDecade = convertYearToString.substring(1,3);
    
    return century(verifyDecade, getInitialNumbers);

  } else {
    return Number(1)
  } 
}

console.log(solution(200));