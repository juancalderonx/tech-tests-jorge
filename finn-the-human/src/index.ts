function canDefeatVillains(
  N: number,
  P: number,
  J: number,
  villains: number[]
): string {
  // Sort the villains in ascending order
  villains.sort((a, b) => a - b);

  let jakeBattles = 0;

  for (let level of villains) {
    if (level < P) P += level; // Finn can defeat the villain
    else if (jakeBattles < 3 && level < (P + J) * 2) {
      // Jake can defeat the villain
      P += Math.floor(level / 2);
      jakeBattles++;
    } else {
      // Finn and Jake can't defeat the villain
      return "NO";
    }
  }

  return "SI";
}

console.log(canDefeatVillains(4, 3, 1, [2, 1, 9, 7])); // Output: "SI"
console.log(canDefeatVillains(1, 2, 1, [9])); // Output: "NO"
