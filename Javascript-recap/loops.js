function sumOfArray(numbers) {
  let total = 0;
  for (let number of numbers) {
      total += number;
  }
  return total;
}

function findMissingNumber(numbers) {
  const n = numbers.length + 1;
  const totalSum = (n * (n + 1)) / 2;

  let actualSum = 0;
  for (let number of numbers) {
      actualSum += number;
  }

  const missingNumber = totalSum - actualSum;
  return missingNumber;
}

const numbersArray = [0, 1, 3, 4, 5];
const missingNumber = findMissingNumber(numbersArray);
console.log(missingNumber);  