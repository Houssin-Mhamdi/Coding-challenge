const sentence =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers";

let longestWord = "";
let maxLength = 0;

function getWords(sentence) {
  const words = sentence.split(" ");
  let cleanedword = words.map((item) => item.replace(/[.,;]/g, ""));

  cleanedword.map((item) => {
    if (item.length > maxLength) {
      maxLength = item.length;
      longestWord = [item];
    } else if (item.length === maxLength) {
      longestWord.push(item);
    }
  });

  let longestWordWithMostVowels = "";
  let maxVowels = 0;

  longestWord.forEach((item) => {
    const vowelCount = (item.match(/[aeiouAEIOU]/g) || []).length;
    if (vowelCount > maxVowels) {
      maxVowels = vowelCount;
      longestWordWithMostVowels = item;
    }
  });

  console.log(
    `The longest word is "${longestWordWithMostVowels}" with a length of ${maxLength} characters. and maxof ${maxVowels}`
  );
}
console.log(getWords(sentence));

