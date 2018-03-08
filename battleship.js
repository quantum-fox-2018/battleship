function generateBoard(grid){
  let board = [];
  for(let i=0; i<grid*2-1; i++){
    let line = [];
    for(let j=0; j<grid; j++){
      if(i%2==0){
        line.push('   ');
      } else {
        line.push('---');
      }
    }
    board.push(line);
  }
  return board;
}

function addShip(board){
  let i=0;
  let max = board[0].length
  while(i<3){
    let randomX = Math.floor(Math.random()*10);
    let randomY = Math.floor(Math.random()*(max*2)/2)*2;
    for(let i=0; i<=board.length; i+=2){
      for(let j=0; j<board[i].length; j++){
        if(i==randomY && j==randomX){
          board[i][j] = 'XXX';
        }
      }
    }
    i++;
  }
  return board;
}

function shot(board, first, second, third){
  let boardWithShip = addShip(board);
  let shots = [first,second,third];
  let count = 0;
  for(let i=0; i<shots.length; i++){
    for(let j in boardWithShip){
      for(let k in boardWithShip[i]){
        if(shots[i][0]==k && shots[i][2]==j && boardWithShip[j][k]== 'XXX'){
          boardWithShip[j][k] = 'DOR';
          count++;
        } else if(shots[i][0]==k && shots[i][2]==j){
          boardWithShip[j][k] = 'AUO'
        }
      }
    }
  }
  console.log(boardWithShip)
  return `Tembakan yang mengenai sasaran: ${count} tembakan`
}

const argv = process.argv;
let boards = generateBoard(10)
// console.log(addShip(boards));
console.log(shot(boards, argv[2], argv[3], argv[4]));

// x harus kurang dari 10 dan y<19 & genap
