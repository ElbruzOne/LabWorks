let word = prompt('Your word','default');
console.log(word.length);

let result = word.split('').reverse().join('');
console.log("Word: " + word + ", reversed: " + result);