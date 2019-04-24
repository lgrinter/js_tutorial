let Phrase = require("lgrinter-palindrome");

let string = prompt("Please enter a string for palindome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
    alert(`"${phrase.content}" is a palindrome!`);
} else {
    alert(`"${phrase.content}" is not a palindrome.`)
}
