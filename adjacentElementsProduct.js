function adjacentElementsProduct(inputArray) {
  let i = 0;
  let j = 1;
  let compare = [];
  
  while(j <= inputArray.length -1) {
    let product = inputArray[i] * inputArray[j];
    compare.push(product);

    i ++;
    j ++;
  }

  const sortArrayProduct = compare.sort((a, b) => {
    if (a === b) {
      return 0;
    } else if (a < b) {
      return -1;
    } else {
      return 1;
    }
  })
  return sortArrayProduct[sortArrayProduct.length -1];
}

const inputArray = [-23, 4, -3, 8, -12];

console.log(adjacentElementsProduct(inputArray));