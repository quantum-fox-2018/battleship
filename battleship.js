// Your code here
function generateBoard () {
  var boardLength = 10;
  var boardSize = boardLength*boardLength;
  var arrBoard = [];

  for (let row = 0; row < boardLength; row++) {
    let arrRow = [];
    for (let col = 0; col < boardLength; col++) {
      arrRow.push('_');
    }
    arrBoard.push(arrRow);
  }

  arrBoard = generateShip(arrBoard, boardLength,);

  return arrBoard;
}

function generateShip(arrBoard, boardLength) {
  var objShip = [
    {name: 'Aircraft Carrier', size: 5, y1:0, x1:0, y2:0, x2:0},
    {name: 'Battleship', size:4, y1:'', x1:0, y2:0, x2:0},
    {name: 'Crusier', size: 3, y1:'', x1:0, y2:0, x2:0},
    {name: 'Destroyer', size: 2, y1:'', x1:0, y2:0, x2:0}
  ]

  for (let i in objShip) {
    let shipChar = objShip[i].name.charAt(0);
    let isNotCollide = '';
    objShip[i].y1 = randomizeNum(boardLength);
    objShip[i].x1 = randomizeNum(boardLength);

    while (!isNotCollide === true) {
      isNotCollide = checkCollide(arrBoard, boardLength, objShip[i]);

      let y1 = objShip[i].y1; let x1 = objShip[i].x1;
      let y2 = objShip[i].y2; let x2 = objShip[i].x2;

      if (x1 === x2) {
        for (let n = y1; n < y2; n++) {
          arrBoard[n][x1] = shipChar;
        }
      } else if (y1 === y2) {
        for (let n = x1; n < x2; n++) {
          arrBoard[y1][n] = shipChar;
        }
      }
    }

  }

  return arrBoard;
}

function checkCollide(arrBoard, boardLength, objShip) {
  let size = objShip.size;
  let y1 = objShip.y1;
  let x1 = objShip.x1;
  let x2 = 0;
  let y2 = 0;
  let arahKapal = Math.floor(Math.random()*2);

  if (arahKapal === 0) { // VERTIKAL
    objShip.y2 = y1;
    objShip.x2 = x1 + size;
    if (objShip.x2 > boardLength) {
      objShip.x2 = x1 - size;
    }
    for (let n = y1; n < y2; n++) {
      console.log('herev');
      if (arrBoard[n][x1] !== '_') {
        return false;
      }
    }
  } else if (arahKapal === 1) { // HORIZONTAL
    objShip.x2 = x1;
    objShip.y2 = y1 + size;
    if (objShip.y2 > boardLength) {
      objShip.y2 = y1 - size;
    }
    for (let n = x1; n < x2; n++) {
      console.log('hereh');
      if (arrBoard[n][y1] !== '_') {
        return false;
      }
    }
  }


  console.log(objShip);
  return true;
}

function randomizeNum(boardLength) {
  var randomNum = Math.floor(Math.random() * boardLength);

  return randomNum;
}

function launchAttack(arrBoard, boardLength) {

}

console.log(generateBoard(10, 7));

/*
console.log('Before: ');
console.log('|# |Ship             |Size|');
console.log('|--|-----------------|----|');
console.log('|1x|Aircraft carrier |5   |');
console.log('|1x|Battleship       |4   |');
console.log('|1x|Cruiser          |3   |');
console.log('|1x|Destroyer        |2   |\n');
*/
