/*
Créé une fonction countLetters qui compte, dans une string donnée, le nombre de fois qu'une lettre apparait.

Exemples :
* "" et "a" -> 0
* "a" et "a" -> 1
* "aaaaabbbaa" et "a" -> 7
* "bbacbaaa" et "c" -> 1
* "bbcc" et "a" -> 0
*/

function countLetters(givenString: string, letter: string): number {
	let count = 0;
	for (let i = 0; i < givenString.length; i++) {
		if (givenString[i] === letter) {
			count++;
		}
	}
	return 0;
}

console.log(countLetters("", "a")); // 0
console.log(countLetters("a", "a")); // 1
console.log(countLetters("aaaaabbbaa", "a")); // 7
console.log(countLetters("bbacbaaa", "c")); // 1
console.log(countLetters("bbcc", "a"));

export default countLetters;
