function greater_than_10(value) {
  return new Promise((resolve, reject) => {
    if (value > 10) {
      resolve(`${value} is greater than 10`);
    } else {
      reject(`${value} is less than or equal to 10`);
    }
  });
}


const testValue = 15; 

greater_than_10(testValue)
  .then((result) => {
    console.log(`Resolved: ${result}`);
  })
  .catch((error) => {
    console.error(`Rejected: ${error}`);
  });
