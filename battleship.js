const alphabets = 'ABCDEFGHIJ';
const ships = [5,4,3,2];
var hitCounts = [0,0,0,0];
var enemyPosition = [];
var shootingPosition = [];

function battleship(){
  debugger;
  getShootingCoordnitate();
  generateCoordinate();
  for(let i in ships) {
    generateShips(ships[i]);
  }
  console.log(enemyPosition);
  shooting();
}

function getShootingCoordnitate() {
  debugger;
  for (let i in process.argv) {
    if(i > 1) shootingPosition.push([parseInt(process.argv[i][1]),alphabets.indexOf(process.argv[i][0].toUpperCase())]);
  }
  console.log(shootingPosition);
}

function generateCoordinate(){
  debugger;
  for(let indexRow = 0; indexRow < 10; indexRow++) {
    for(let indexCol = 0; indexCol < 10; indexCol++) {
        if(!enemyPosition[indexRow]) {
          enemyPosition[indexRow] = [];
        }
          enemyPosition[indexRow].push('');
    }
  }
}

function generateShips(type) {
  debugger;
  let startPoint = [Math.floor(Math.random() * (10-0) + 0),Math.floor(Math.random() * (10-0) + 0)];
  if(checkDown(startPoint,type)) {
    for(let i = 0; i < type; i++) {
      enemyPosition[startPoint[0]+i][startPoint[1]] = type;
    }
    return true;
  }else if(checkRight(startPoint,type)) {
    for(let i = 0; i < type; i++) {
      enemyPosition[startPoint[0]][startPoint[1]+i] = type;
    }
    return true;
  }

  generateShips(type);
}

function checkDown(start,type){
  debugger;
  for(let i = 0; i < type;i++) {
    if(start[0]+i > 9 || enemyPosition[start[0]+i][start[1]]) {
      return false;
    }
  }
  return true;
}

function checkRight(start,type){
  debugger;
  for(let i = 0; i < type;i++) {
    if(start[0]+i > 9 || enemyPosition[start[0]][start[1]+i]) {
      return false;
    }
  }
  return true;
}

function shooting() {
  for (let i in shootingPosition) {
    console.log("\x1B[2J");
    if(enemyPosition[shootingPosition[i][0]][shootingPosition[i][1]]){
      console.log('Bomb number ' + i + ' hit the target');
      switch(enemyPosition[shootingPosition[i][0]][shootingPosition[i][1]]){
        case 5 :
          hitCounts[0]++;
          break;
        case 4 :
          hitCounts[1]++;
          break;
        case 3 :
          hitCounts[2]++;
          break;
        case 2 :
          hitCounts[3]++;
          break;
      }
      enemyPosition[shootingPosition[i][0]][shootingPosition[i][1]] = '/';
    } else {
      console.log('Bomb number ' + i + ' miss the target');
    }
    console.log(enemyPosition);
    sleep(8000);
  }
  if(hitCounts.reduce(function(value1,value2){return value1+value2;}) === 0) console.log('Mission failed, all enemy survived');
  if(hitCounts[0] === 5) console.log('We succeed destroying enemy Aircraft carrier');
  if(hitCounts[1] === 4) console.log('We succeed destroying enemy Battleship');
  if(hitCounts[2] === 3) console.log('We succeed destroying enemy Cruiser');
  if(hitCounts[3] === 2) console.log('We succeed destroying enemy Destroyer');
  if(hitCounts.reduce(function(value1,value2){return value1+value2;}) > 0 && hitCounts.reduce(function(value1,value2){return value1+value2;}) < 14) console.log('Mission failed, some enemy survived');
  if(hitCounts.reduce(function(value1,value2){return value1+value2;}) === 14) console.log('Mission Succeed, all enemy destroyed');

}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// function generateBoard() {
//   let count = 1;
//   for(let indexRow = 0; indexRow < 21; indexRow++) {
//     let board = '';
//     for(let indexCol = 0; indexCol < 10; indexCol++) {
//       if(indexRow === 0){
//         (indexCol === 0) ? (board += '      '):
//         board += ' '+alphabets[indexCol-1]+'  ';
//       } else if(count > 9){
//         (indexCol === 0 && indexRow % 2 === 0) ? (board += '     |'):
//         (indexCol === 0) ? (board += count +'   |', count++ ):
//         (indexRow % 2 === 0) ? (board += '---|'): (board += '   |');
//       } else {
//         (indexCol === 0 && indexRow % 2 === 0) ? (board += '     |'):
//         (indexCol === 0) ? (board += count +'    |', count++ ):
//         (indexRow % 2 === 0) ? (board += '---|'): (board += '   |');
//       }
//     }
//     console.log(board);
//   }
// }

battleship();
