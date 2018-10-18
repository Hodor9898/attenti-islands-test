export default class MatrixService {
    public static colors: string[] = [
        '#fff',
        '#000',
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#1C2d2a',
        '#f2f300',
        '#ff00ff',
        '#00ffff',
        '#00f111',
        '#aa00ac',
        '#331c2f',
        '#ff8080',
        '#ffcccc',
        '#7e7c66',
        '#f04a00',
        '#a1c32d',
    ];

    public static numberOfIslands(matrix: number[][], numRows: number, numCols: number) {
        return new Promise(async (resolve, reject) => {
            let count: number = 0;

            for (let i: number = 0; i < numRows; i++) {
                for (let j: number = 0; j < numCols; j++) {
                    if (matrix[i][j] === 1) {
                        await this.findNeighbours(matrix, i, j, count + 2);

                        count++;
                    }
                }
            }

            resolve(count);
        });
    }

    private static findNeighbours(matrix: number[][], row: number, column: number, color: number) {
        const neighbours = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
        ];

        matrix[row][column] = color;

        return new Promise(async (resolve, reject) => {
            for (let index = 0; index <  neighbours.length; index++) {
                const nRow = row + neighbours[index][0];
                const nCol = column + neighbours[index][1];

                if (
                    matrix[nRow] !== undefined &&
                    matrix[nRow][nCol] !== undefined &&
                    matrix[nRow][nCol] === 1
                ) {
                    await this.findNeighbours(matrix, row + neighbours[index][0], column + neighbours[index][1], color)
                }
            }

            resolve();
        });
    }
}