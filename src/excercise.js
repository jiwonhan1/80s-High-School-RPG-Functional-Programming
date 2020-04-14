//Problem #1
// Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I".

const recurseReverse = (sentence, reversedArr = [], counter = 0) => {
  const wordArr = sentence.toString().split(' ');
  if (counter === wordArr.length) {
    return reversedArr.join(" ");
  } else {
    const newWordArr = [wordArr[counter], ...reversedArr]
    return recurseReverse(sentence, newWordArr, counter+1);
  }
}

console.log(recurseReverse("I am a cat"));

// Problem #2
// Write a recursive function that concatenates "red green refactor" to a string X number of times, where X is the argument passed into the function. rgr(3) should return the following:

const recurseRefactor = (counts) => {
  const redGreenRefactor = "red green refactor";
  if (counts === 0) {
    return "";
  } else {
    
    return recurseRefactor(counts-1) + redGreenRefactor + " ";
  }
}
