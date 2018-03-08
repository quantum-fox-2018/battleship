// Your code here
// Contoh input: node battleshipAI.js
// Jumlah tebakan random (1-10)
// langsung run --> node battleshipAI.js

let shipPlayer1 = [
  {
    nama: "Aircraft carrier",
    size: 5,
    posisi: [],
    kena: 0
  },
  {
    nama: "Battleship",
    size: 4,
    posisi: [],
    kena: 0
  },
  {
    nama: "Cruiser",
    size: 3,
    posisi: [],
    kena: 0
  },
  {
    nama: "Destroyer",
    size: 2,
    posisi: [],
    kena: 0
  },
];

let shipPlayer2 = [
  {
    nama: "Aircraft carrier",
    size: 5,
    posisi: [],
    kena: 0
  },
  {
    nama: "Battleship",
    size: 4,
    posisi: [],
    kena: 0
  },
  {
    nama: "Cruiser",
    size: 3,
    posisi: [],
    kena: 0
  },
  {
    nama: "Destroyer",
    size: 2,
    posisi: [],
    kena: 0
  },
];

let player = [
  {
    nama: "AI 1",
    tebakan: []
  },
  {
    nama: "AI 2",
    tebakan: []
  }
];

function printBoard() {
  let board = [];
  let row;

  for(let i = 0; i < 10; i++) {
    row = [];
    for(let j = 0; j < 10; j++) {
      row.push("_");
    }
    board.push(row);
  }

  return board;
}

function randomEnemyShip(ship) {
  let board = printBoard();
  let verOrHor; // 0 = vertikal, 1 = horizontal
  let randomKolom; // j
  let randomBaris; // k
  let checkOtherShip;
  let statusTaroShip;

  for(let i = 0; i < ship.length; i++) {
    randomKolom = Math.floor(Math.random() * 10);
    randomBaris = Math.floor(Math.random() * 10);
    verOrHor = Math.round(Math.random());
    statusTaroShip = false;
    while(!statusTaroShip) {
      for(let j = 0; j < board.length; j++) {
        for(let k = 0; k < board[j].length; k++) {
          if((randomKolom === j) && (randomBaris === k)) {
            if(verOrHor === 0) {
              if(j+ship[i].size > board.length) {
                randomKolom = Math.floor(Math.random() * 10);
                randomBaris = Math.floor(Math.random() * 10);
              } else {
                checkOtherShip = false;
                for(let l = 0; l < ship[i].size; l++) {
                  if(board[j+l][k] === "O") {
                    checkOtherShip = true;
                  }
                }
                if(checkOtherShip) {
                  randomKolom = Math.floor(Math.random() * 10);
                  randomBaris = Math.floor(Math.random() * 10);
                } else {
                  for(let l = 0; l < ship[i].size; l++) {
                    board[j+l][k] = "O";
                    ship[i].posisi.push((j+l) + "," + k);
                  }
                  statusTaroShip = true;
                }
              }
            } else {
              if(k+ship[i].size > board.length) {
                randomKolom = Math.floor(Math.random() * 10);
                randomBaris = Math.floor(Math.random() * 10);
              } else {
                checkOtherShip = false;
                for(let l = 0; l < ship[i].size; l++) {
                  if(board[j][k+l] === "O") {
                    checkOtherShip = true;
                  }
                }
                if(checkOtherShip) {
                  randomKolom = Math.floor(Math.random() * 10);
                  randomBaris = Math.floor(Math.random() * 10);
                } else {
                  for(let l = 0; l < ship[i].size; l++) {
                    board[j][k+l] = "O";
                    ship[i].posisi.push(j + "," + (k+l));
                  }
                  statusTaroShip = true;
                }
              }
            }
          }
        }
      }
    }
  }
  return board;
}

function cekTebakan() {
  let kemungkinanTebakan = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10",
                            "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10",
                            "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10",
                            "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10",
                            "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10",
                            "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10",
                            "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10",
                            "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10",
                            "I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10",
                            "J1", "J2", "J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10"];
  let randomIndex;
  let randomJumlahTebakan = Math.floor(Math.random() * 10) + 1;

  for(let i = 0; i < randomJumlahTebakan; i++) {
    randomIndex = Math.floor(Math.random() * 100);
    player[0].tebakan.push((kemungkinanTebakan[randomIndex].charCodeAt(0) - 65) + "," + (Number(kemungkinanTebakan[randomIndex].slice(1)) - 1));
  }

  for(let i = 0; i < randomJumlahTebakan; i++) {
    randomIndex = Math.floor(Math.random() * 100);
    player[1].tebakan.push((kemungkinanTebakan[randomIndex].charCodeAt(0) - 65) + "," + (Number(kemungkinanTebakan[randomIndex].slice(1)) - 1));
  }
}

function mainBattleShip() {
  cekTebakan();
  let boardPlayer1 = randomEnemyShip(shipPlayer1);
  let boardPlayer2 = randomEnemyShip(shipPlayer2);

  console.log(`Player 1: ${player[0].nama}`);
  checkTembakan(boardPlayer1, shipPlayer1, player[1].tebakan, player[1].nama);
  console.log("=======================================================");
  console.log(`Player 2: ${player[1].nama}`);
  checkTembakan(boardPlayer2, shipPlayer2, player[0].tebakan, player[0].nama);
}

function checkTembakan(board, ship, tebakan, player) {
  let pisahTebakan;
  let barisTebakan;
  let kolomTebakan;
  for(let i = 0; i < tebakan.length; i++) {
    for(let j = 0; j < ship.length; j++) {
      for(let k = 0; k < ship[j].posisi.length; k++) {
        pisahTebakan = tebakan[i].split(",");
        barisTebakan = Number(pisahTebakan[0]);
        kolomTebakan = Number(pisahTebakan[1]);
        if(tebakan[i] === ship[j].posisi[k]) {
          ship[j].kena++;
          board[barisTebakan][kolomTebakan] = "X";
        } else {
          if(board[barisTebakan][kolomTebakan] !== "X") {
            board[barisTebakan][kolomTebakan] = "/";
          }
        }
      }
    }
  }
  console.log(board);
  for(let i = 0; i < ship.length; i++) {
    if(ship[i].kena > 0) {
      console.log(`${player} telah mengenai kapal ${ship[i].nama} sebanyak ${ship[i].kena} kali.`);
      if(ship[i].kena == ship[i].size) {
        console.log(`Kapal ${ship[i].nama} telah ditenggelamkan!`);
      }
    }
  }
}

mainBattleShip();
