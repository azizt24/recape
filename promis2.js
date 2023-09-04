function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(words)) {
      reject("Input is not an array");
      return;
    }

    const capitalizedWords = words.map((word) => {
      if (typeof word === "string") {
        return word.toUpperCase();
      } else {
        reject("Array contains non-string element(s)");
      }
    });

    resolve(capitalizedWords);
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(words)) {
      reject("Input is not an array");
      return;
    }

    const sortedWords = words.sort();

    resolve(sortedWords);
  });
}

 
const validWords = ["apple", "banana", "cherry"];
const invalidWords = ["apple", 42, "cherry"];  


makeAllCaps(validWords)
  .then((capitalizedWords) => {
    console.log("Capitalized words:", capitalizedWords);
    return sortWords(capitalizedWords);
  })
  .then((sortedWords) => {
    console.log("Sorted words:", sortedWords);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


  
makeAllCaps(invalidWords)
  .then((capitalizedWords) => {
    console.log("Capitalized words:", capitalizedWords);
    return sortWords(capitalizedWords);
  })
  .then((sortedWords) => {
    console.log("Sorted words:", sortedWords);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
