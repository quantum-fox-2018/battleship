// Your code here


function generateBoard(row,col) {
    let BRow = (row+1) * 2 -1;
    let BCol = (col+1) * 4;
    let indexRow = 1;
    let indexCol = 'ABCDEFGHIJ';
    let index1 = 0;

    let arrBoard = [];
    for (let j = 0; j <= BRow; j++) {
        // arrBoard.push([]);
        let arrInnerBoard = []
        if (j == 0) {
            for (let i = 0; i <= BCol-4; i++) {
                if (i !=0 && i % 4 == 0) {
                    arrInnerBoard.push(indexCol[index1])
                    index1++;
                } else {
                    arrInnerBoard.push(' ');
                }
            }
            arrBoard.push(arrInnerBoard.join(''));
        } else if (j == 1 || j == BRow) {
            for (let i = 0; i <= BCol; i++) {
                if (i == 0 || i == BCol) {
                    arrInnerBoard.push('+')
                } else {
                    arrInnerBoard.push('-');
                }
            }
            arrBoard.push(arrInnerBoard.join(''));
        } else if (j % 2 == 0 && j != 20) {
            for (let i = 0; i <= BCol; i++) {
                if (i == 2) {
                    arrInnerBoard.push(indexRow);
                    indexRow++;
                } else if (i % 4 == 0) {
                    arrInnerBoard.push('|')
                } else {
                    arrInnerBoard.push(' ');
                }
            }
            arrBoard.push(arrInnerBoard.join(''));    
        } else if (j == 20) {
            for (let i = 0; i <= BCol; i++) {
                if (i == 1) {
                    arrInnerBoard.push(indexRow);
                    indexRow++;
                } else if (i == 2) {
                    arrInnerBoard.push('');
                } else if (i % 4 == 0) {
                    arrInnerBoard.push('|')
                } else {
                    arrInnerBoard.push(' ');
                }
            }
            arrBoard.push(arrInnerBoard.join(''));
        } else {
            for (let i = 0; i <= BCol; i++) {
                if (i % 4 == 0) {
                    arrInnerBoard.push('|')
                } else {
                    arrInnerBoard.push('-');
                }
            }
            arrBoard.push(arrInnerBoard.join(''));
        }
    }
 
    return arrBoard.join('\n');


}

console.log(generateBoard(10,10));
