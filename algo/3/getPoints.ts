/*
Notre équipe de football participe à un tournoi dans lequel elle a joué 10 matchs.
Les résultats du match sont notés "3:0" : le premier chiffre est le nombre de buts de **notre** équipe ; le second est celui de l'autre équipe.
Pour connaître le score de notre équipe, nous suivons ces règles :
- Victoire : 3pts
- Nul : 1pt
- Défaite : 0pt
Étant donné un tableau avec les résultats des matchs, écris une fonction qui renverra notre score.
Pour exemple, si ta fonction recevait le tableau ci-dessous en paramètre, tu devrais obtenir 13 points.
["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:3"]
*/

function getPoints(results: string[]): number {
  // Your code here !
  // for each element of the array, split the string by ':'
  // compare the first and second element of the split array
  // if the first element is greater than the second element, add 3 to the score
  // if the first element is equal to the second element, add 1 to the score
  // if the first element is less than the second element, add 0 to the score
  let score = 0;

  for (let i = 0; i < results.length; i++) {
    const [ourScore, theirScore] = results[i].split(":");
    if (ourScore > theirScore) {
      score += 3;
    } else if (ourScore === theirScore) {
      score += 1;
    }
  }

  return score;
}

export default getPoints;
