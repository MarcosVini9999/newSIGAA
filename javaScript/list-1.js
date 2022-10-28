const isEven = number => number % 2 === 0;

//q1
function isArray(arr) {
  return Array.isArray(arr);
}

//q2
function cloneArray(arr) {
  if (!isArray(arr)) return;
  return arr.slice();
}

//q3
function arrayElements(arr, n = 1) {
  const output = [];
  for (let i = 0; i < n; i++) {
    output.push(arr[i]);
  }
  return output;
}

//q4
function arrayLastElements(arr, n = 1) {
  return arr.slice(-n);
}

//q5
function arrayToString(arr) {
  return arr.join("");
}

//q6
function minusEveryTwoEvenNumbers(number) {
  const numbers = number.toString();
  const output = [numbers[0]];
  for (let i = 1; i < numbers.length; i++) {
    const previousState = numbers[i - 1];
    if (previousState % 2 === 0 && numbers[i] % 2 === 0) {
      output.push("-");
    }
    output.push(numbers[i]);
  }
  return arrayToString(output);
}

//q7
function theMostFrequentNumber(arr) {
  let highestNumber = [undefined, 0];
  const frequences = {};
  arr.map(element => {
    if (element in frequences) {
      frequences[element] += 1;
    } else {
      frequences[element] = 1;
    }
  });
  Object.entries(frequences).forEach(element => {
    if (element[1] > highestNumber[1]) {
      highestNumber = element;
    }
  });
  return Number(highestNumber[0]);
}

//q8
function removeDuplicates(arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
}

//q9
function sumArrays() {
  const output = [];
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      arguments[i].forEach((element, index) => {
        if (output[index] === undefined) {
          output[index] = element;
        } else {
          output[index] += element;
        }
      });
    }
  }
  return output;
}

//q10
function mergeArrays() {
  const output = arguments[0];
  if (arguments.length > 1) {
    for (let i = 1; i < arguments.length; i++) {
      arguments[i].map(element => output.push(element));
    }
  }
  return output;
}

// main
const arr = [1, 1, 1, 1, 5, 5, 5, 9, 9, 9];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr3 = [1, 1, 1, 1, 5, 5, 5, 9, 9, 9, 1];
const num = 1;
const numbers = 222346;

console.log(isArray(arr));
console.log(isArray(num));
console.log(arrayElements(arr));
console.log(arrayElements(arr, 4));
console.log(arrayLastElements(arr));
console.log(arrayLastElements(arr, 4));
console.log(minusEveryTwoEvenNumbers(numbers));
console.log(theMostFrequentNumber(arr));
console.log(removeDuplicates(arr));
console.log(sumArrays(arr, arr, arr3));
console.log(mergeArrays(arr, arr2));
