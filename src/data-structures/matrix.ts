export class Matrix<T = number> extends Array<Array<T>> {
  constructor(data: T[][] = []) {
    super();

    // Fill given data to matrix;
    for (let r = 0; r < data.length; r++) {
      this[r] = [];
      for (let c = 0; c < data[r].length; c++) {
        this[r][c] = data[r][c];
      }
    }
  }

  transpose() {
    const newMatrix = new Matrix<T>();

    for (const { c, value } of this.unroll()) {
      if (newMatrix[c] === undefined) {
        newMatrix[c] = [];
      }

      newMatrix[c].push(value);
    }

    return newMatrix;
  }

  get size() {
    return {
      r: this.length,
      c: this[0].length,
    };
  }

  *unroll() {
    for (let r = 0; r < this.length; r++) {
      for (let c = 0; c < this[r].length; c++) {
        yield { c, r, value: this[r][c] };
      }
    }
  }
}
