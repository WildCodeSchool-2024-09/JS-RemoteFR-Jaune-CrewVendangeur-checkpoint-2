/*
Créé une fonction getFibonacciSequence qui prend un nombre n en paramètre et retourne un tableau contenant les n premiers nombres de la suite de Fibonacci.

Détails

* La suite de Fibonacci commence par les nombres 0 et 1.
* Chaque nombre suivant est la somme des deux nombres précédents.
* Par exemple, pour n = 5, la fonction devrait retourner [0, 1, 1, 2, 3].

Si n est inférieur ou égal à 0, la fonction doit retourner un tableau vide []
*/

function getFibonacciSequence(size: number): number[] {
  if (size <= 0) {
    return [];
  }
  if (size === 1) {
    return [0];
  }

  let n1 = 0;
  let n2 = 1;
  const sortedNumber = [0, 1];

  for (let i = 2; i < size; i++) {
    const nextTerm = n1 + n2;
    sortedNumber.push(nextTerm);
    n1 = n2;
    n2 = nextTerm;
  }

  return sortedNumber;
}

export default getFibonacciSequence;
