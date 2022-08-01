import { label } from "../utils.ts";
import { Matrix } from "../data-structures/matrix.ts";
import { gray, white } from "https://deno.land/std@0.150.0/fmt/colors.ts";
import { writeAllSync } from "https://deno.land/std@0.150.0/streams/conversion.ts";

const write = (m: string) =>
  writeAllSync(Deno.stdout, new TextEncoder().encode(m));
console.time("Duration");

const base = new Matrix([
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  [30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
  [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  [50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
  [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
  [70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
  [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
  [90, 91, 92, 93, 94, 95, 96, 97, 98, 99],
]);

label("Print");
const print = (matrix: Matrix<number>) => {
  for (const { c, r, value } of matrix.unroll()) {
    write((r % 2 == 0 ? white : gray)(` ${value < 10 ? " " : ""}${value}`));

    if (matrix.size.c - 1 === c) {
      console.log("");
    }
  }
};
print(base);

label("Diagonal Traversal");
const diagonal = (matrix: Matrix) => {
  const size = matrix.size;

  const isValid = (x: number, y: number) => {
    x = x + 1;
    y = y - 1;

    if (x < 0 || y < 0) return false;
    if (x > size.c - 1 || y > size.r - 1) return false;

    return true;
  };

  for (let r = 0; r < size.r; r++) {
    let cellY = r;
    let cellX = 0;
    const row = [];
    while (isValid(cellX, cellY)) {
      row.push(matrix[cellY--][cellX++]);
    }
    console.log(row.join(" "));
  }

  for (let c = 1; c < size.c; c++) {
    let cellY = size.r - 1;
    let cellX = c;
    const row = [];
    while (isValid(cellX, cellY)) {
      row.push(matrix[cellY--][cellX++]);
    }
    console.log(row.join(" "));
  }
};

diagonal(base);

label("transpose");
print(base.transpose());

label("END");
console.timeEnd("Duration");
