// Your code here
function generateBoard(rows, cols) {
    var arrResult = [];
    for (let i = 0; i < rows; i++) {
        var arrTemp = [];
        for (let j = 0; j < cols; j++) {
            arrTemp.push(' ');
        }

        arrResult.push(arrTemp);
    }

    return arrResult;
}

function generateShip() {
    var arrShip = generateBoard(10, 10);
    var shipPositionRows = Math.floor(Math.random() * (10 - 0)) + 0; 
    var shipPositionCols = Math.floor(Math.random() * (10 - 0)) + 0;
    
    let verticalHorizontal = Math.floor(Math.random() * (2 - 0)) + 0;

    if (verticalHorizontal === 1) {
        var rowsAkhir = shipPositionRows + 2;
        var colsAkhir = shipPositionCols;
    } else {
        var colsAkhir = shipPositionCols + 2;
        var rowsAkhir = shipPositionRows;
    }

    

    for (let i = shipPositionRows; i < rowsAkhir; i++) {
        arrShip[i][shipPositionCols] = 'X';
    }

    for (let j = shipPositionCols; j < colsAkhir; j++) {
        arrShip[shipPositionRows][j] = 'A';
    }

    console.log(arrShip);
}

generateShip();
