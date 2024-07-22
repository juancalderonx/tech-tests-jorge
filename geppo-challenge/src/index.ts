type Position = [number, number];

function minGeppoMoves(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number | string {
  const directions: Position[] = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  const isValid = (x: number, y: number) => {
    return x >= -200 && x <= 200 && y >= -200 && y <= 200;
  };

  if (!isValid(x1, y1) || !isValid(x2, y2)) return "IMPOSSIBLE";

  const queue: [Position, number][] = [[[x1, y1], 0]];
  const visited = new Set<string>();
  visited.add(`${x1},${y1}`);

  while (queue.length > 0) {
    const [[currentX, currentY], moves] = queue.shift()!;

    if (currentX === x2 && currentY === y2) return moves;

    for (const [dx, dy] of directions) {
      const nextX = currentX + dx;
      const nextY = currentY + dy;
      const nextPos = `${nextX},${nextY}`;

      if (!visited.has(nextPos) && isValid(nextX, nextY)) {
        visited.add(nextPos);
        queue.push([[nextX, nextY], moves + 1]);
      }
    }
  }

  return "IMPOSSIBLE";
}

console.log(minGeppoMoves(0, 0, 2, 1)); // 1
console.log(minGeppoMoves(-2, -1, 198, 99)); // 100
