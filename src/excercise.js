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
