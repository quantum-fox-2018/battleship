// Your code here

// var target = ["a1", "a2", "a3", "a4", "a5"];
var term = require( 'terminal-kit' ).terminal ;
term.slowTyping(
  'BATTLESHIP ENDED !\n' ,
  { flashStyle: term.brightWhite } ,
  function() { process.exit() ; }
) ;
var players = [];

//player 1
var player1Obj = {};
var player2Obj = {};
var target1 = [];
var target2 = [];
while(target1.length < 5){
  let random = getRandomInt(0, 10)+""+getRandomInt(0,10)
  if (target1.indexOf(random) === -1) {
    target1.push(random)
  }
}

while(target2.length < 5){
  let random = getRandomInt(0, 10)+""+getRandomInt(0,10)
  if (target2.indexOf(random) === -1) {
    target2.push(random)
  }
}


player1Obj.name = "AI 1"
player1Obj.target = target1;
player2Obj.name = "AI 2"
player2Obj.target = target2;

players.push(player1Obj)
players.push(player2Obj)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function printBoard(board){
  for (var i = 0; i < 10; i++) {
    console.log(board[i].join(" "));
  }
}

const fleetTable = [
{ship: "Military Water Base", size:6, char:"M"},
{ship: "Aircraft Carrier", size:5, char:"A"},
{ship: "Battleship", size:4, char:"B"},
{ship: "Cruiser", size:3, char:"C"},
{ship: "Destroyer", size:2, char:"D"},
{ship: "Jetski", size:1, char:"J"}];

function generateBoard(){
  var boardArr = [];
  for (var i = 0; i < 10; i++) {
    var tempRowArr = [];
    for (var j = 0; j < 10; j++) {
      tempRowArr.push("~")
    }
    boardArr.push(tempRowArr)
  }
  return boardArr;
}

function cekClear(board, posisiX, posisiY, arah, fleet){
  //check apakah clear atau tidak
  for (let j = 0; j < fleet.size; j++) {
    if (board[posisiX][posisiY] !== "~") {
      return false;
    }
    switch(arah){
      case 0:
      posisiY++;
      break;

      case 1:
      posisiX++;
      break;
    }
  }
  return true;
}

function generateFleet(){
  let board = generateBoard();

  for (let i = 0; i < fleetTable.length; i++) {
    let posisiX = getRandomInt(0, 10-fleetTable[i].size);
    let posisiY = getRandomInt(0, 10-fleetTable[i].size);
    let arah = getRandomInt(0, 2);//arah 0 mendatar arah 1 ke samping

    let clear = cekClear(board, posisiX, posisiY, arah, fleetTable[i]);

    while(clear === false){
      posisiX = getRandomInt(0, 10-fleetTable[i].size);
      posisiY = getRandomInt(0, 10-fleetTable[i].size);
      arah = getRandomInt(0, 2);
      clear = cekClear(board, posisiX, posisiY, arah, fleetTable[i]);
    }

    //laying the ship
    if (clear === true) {
      for (let j = 0; j < fleetTable[i].size; j++) {
        if (board[posisiX][posisiY] === "~") {
          board[posisiX][posisiY] = fleetTable[i].char;
          switch(arah){
            case 0:
            posisiY++
            break;

            case 1:
            posisiX++;
            break;
          }
        }
      }
    }

  }
  return board;
}

function switchAlphabetToNumber(alphabet){
  switch(alphabet){
    case "a":
    return 0;
    break;
    case "b":
    return 1;
    break;
    case "c":
    return 2;
    break;
    case "d":
    return 3;
    break;
    case "e":
    return 4;
    break;
    case "f":
    return 5;
    break;
    case "g":
    return 6;
    break;
    case "h":
    return 7;
    break;
    case "i":
    return 8;
    break;
    case "j":
    return 9;
    break;
  }
}

function getNamaKapal(char){
  for (var i = 0; i < fleetTable.length; i++) {
    if (fleetTable[i].char === char) {
      return fleetTable[i].ship
    }
  }
}

function fight(target){
  board = generateFleet()
  var wreckShip = []

  for (var i = 0; i < target.length; i++) {

    var x = target[i][0];
    var y = Number(target[i].slice(1, target[i].length))

    if(board[x][y] !== "~"){
      if (wreckShip.indexOf(board[x][y]) === -1) {
        wreckShip.push(board[x][y])
      }
      board[x][y] = "X"
    }else{
      board[x][y] = "/"
    }
  }

  printBoard(board)
  if (wreckShip.length === 0) {
    console.log("semua tembakan miss");
  }else{
    console.log("list kapal hancur : ");
    for (var i = 0; i < wreckShip.length; i++) {
      console.log(getNamaKapal(wreckShip[i]));
    }
  }
}

function multiplayer(){
  for (var i = 0; i < players.length; i++) {
    console.log(players[i].name);
    fight(players[i].target)
    console.log(" ");
  }
}

multiplayer()
