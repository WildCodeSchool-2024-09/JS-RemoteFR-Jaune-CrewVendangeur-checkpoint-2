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
  // Your code here !
  // create an empty array to hold all the given letter
  const givenLetterArray = [];
  // split string and store in array
  const givenStringArray = givenString.split("");
  // put all the given letter in an array
  for (const element of givenStringArray) {
    if (element === letter) {
      givenLetterArray.push(element);
    }
  }
  // take the length of the array
  return givenLetterArray.length;
}

export default countLetters;
