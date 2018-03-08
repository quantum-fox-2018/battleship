// Your code here
// Aturan main:
// Jumlah tebakan player 1 dan player 2 HARUS sama.
// Format: Nama player 1, tebakan 1, tebakan 2, tebakan n, nama player 2, tebakan 1, tebakan 2, tebakan n.
// Contoh input: node battleship2Player.js Zena A1 A2 A3 A4 A5 A6 A7 A8 A9 A10 Vilenia D1 D2 D3 D4 D5 D6 D7 D8 D9 D10

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
    nama: "",
    tebakan: []
  },
  {
    nama: "",
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
  let tebakanInputan = [];
  for(let i = 2; i < process.argv.length; i++) {
    tebakanInputan.push(process.argv[i]);
  }
  for(let i = 0; i < tebakanInputan.length; i++) {
    if(i < tebakanInputan.length/2) {
      if(i === 0) {
        player[0].nama = tebakanInputan[i];
      } else {
        player[0].tebakan.push((tebakanInputan[i].charCodeAt(0) - 65) + "," + (Number(tebakanInputan[i].slice(1)) - 1));
      }
    } else {
      if(i === tebakanInputan.length/2) {
        player[1].nama = tebakanInputan[i];
      } else {
        player[1].tebakan.push((tebakanInputan[i].charCodeAt(0) - 65) + "," + (Number(tebakanInputan[i].slice(1)) - 1));
      }
    }
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
