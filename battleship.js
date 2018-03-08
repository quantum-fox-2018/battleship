// function generateBoard(grid){
//   let board = [];
//   for(let i=0; i<grid*2-1; i++){
//     let line = [];
//     for(let j=0; j<grid; j++){
//       if(i%2==0){
//         line.push('   ');
//       } else {
//         line.push('---');
//       }
//     }
//     board.push(line);
//   }
//   return board;
// }
//
// function random(num){
//   let array = [];
//   for(let i=0; i<num; i++){
//     let randomX = Math.floor(Math.random()*9);
//     let randomY = Math.floor(Math.random()*(max*2)/2)*2;
//     let count = 0;
//     for(let j=0; j<array.length; j++){
//       if(array[j]==[randomX,randomY]){
//         count++;
//       }
//     }
//     if(count == 0){
//       array.push([randomX,randomY])
//     } else {
//       i--
//     }
//   }
//
//   return array;
// }
//
// function addShip(board, ship){
//   let i=0;
//   let ships = random(ship);
//   while(i<ships.length){
//     for(let m=0; m<board.length; m++){
//       for(let j=0; j<board[m].length; j++){
//         if(m==ships[i][1] && j==ships[i][0] && m%2==0 && board[m][j]!=='XXX'){
//           board[m][j] = 'XXX';
//         }
//       }
//     }
//     i++;
//   }
//   return board;
// }
//
// function shot(board, first, second, third){
//   let shots = [first,second,third];
//   let count = 0;
//   let i=0;
//   while(i<shots.length){
//     for(let j in board){
//       for(let k in board[i]){
//         if(shots[i][0]==k && shots[i][2]==j && board[j][k]== 'XXX'){
//           board[j][k] = 'DOR';
//           count++;
//         } else if(shots[i][0]==k && shots[i][2]==j){
//           board[j][k] = 'AUO'
//         }
//       }
//     }
//     i++
//   }
//   console.log(board)
//   return `Tembakan yang mengenai sasaran: ${count} tembakan`
// }
//
// var max = 10;
// const argv = process.argv;
// let boards = generateBoard(max);
// let boardAndShip = addShip(boards,3);
// console.log(shot(boardAndShip, argv[2], argv[3], argv[4]));
//
// // x harus kurang dari 10 dan y<19 & genap
let array = [];
for(let i=0; i<20; i++){
  let number = Math.floor(Math.random()*20/2)*2;
  array.push(number);
}

console.log(array);
