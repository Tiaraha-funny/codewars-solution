const wordsToNumbers = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
  million: 1000000,
};

function stringToIntiger(str: string) {
  const words = str.replace(/ and /g, " ").split(/[\s-]+/);
  let number = 0;
  let partialResult = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const value = wordsToNumbers[word];

    if (value === undefined) {
      return NaN;
    }

    if (value >= 1000) {
      number += partialResult * value;
      partialResult = 0;
    } else if (value >= 100) {
      partialResult *= value;
    } else {
      partialResult += value;
    }
  }

  return number + partialResult;
}
