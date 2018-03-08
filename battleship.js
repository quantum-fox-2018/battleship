"use strict"
const argv = process.argv
var playerPlay = argv[2]
var shootArr = argv[3].split(',')

// Your code here
function battleship(num){
  var letter='ABCDEFGHIJ'
  var arrBoard=[]
  var counter=1
  var arrEnemy=[]
  var arrPlayer=[]
  var countPlayer=1
  var arrGet=[]
  var arrLost=[]
  var countLost=0
  for (let i = 0; i < 2; i++) {
    let objPlayer={}
    objPlayer['name']='player'+countPlayer
    objPlayer['board']=[]
    objPlayer['enemy']=[]
    arrPlayer.push(objPlayer)

    countPlayer++
  }
  for (let m = 0; m < num; m++) {
    arrBoard.push([])
    for (let n = 0; n < num; n++) {
      arrBoard[m].push(letter[m]+''+counter)
      counter++
    }
    counter=1
  }
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      var randRow = arrBoard[Math.floor(Math.random() * arrBoard.length)]
      var randEnemy = randRow[Math.floor(Math.random() * randRow.length)]
      arrPlayer[i].enemy.push(randEnemy)
    }
  }

  for (let i = 0; i < arrPlayer.length; i++) {
    if(playerPlay===arrPlayer[i].name){
      console.log('\n');
      console.log('Enemy target :'+arrPlayer[i].enemy);
      console.log('\n');
      for (let a = 0; a < arrPlayer[i].enemy.length; a++) {
        for (let b = 0; b < shootArr.length; b++) {
          if(arrPlayer[i].enemy[a]===shootArr[b]){
            arrGet.push(shootArr[b])
          }
        }
      }
      var uniqueArray = arrGet.filter(function(item, pos, self) {
          return self.indexOf(item) == pos;
      })
      for (let i = 0; i < shootArr.length; i++) {
        for (let j = 0; j < uniqueArray.length; j++) {
          if(shootArr[i]===arrGet[j]){
            countLost++
          }
        }
        if(countLost===0){
          arrLost.push(shootArr[i])
        }
        countLost=0
      }

      for (let i = 0; i < arrBoard.length; i++) {
        for (let j = 0; j < arrBoard[i].length; j++) {
          for (let k = 0; k < arrLost.length; k++) {
            if(arrLost[k]===arrBoard[i][j]){
              arrBoard[i][j]='/'
            }
          }
        }
      }
      for (let i = 0; i < arrBoard.length; i++) {
        for (let j = 0; j < arrBoard[i].length; j++) {
          for (let k = 0; k < uniqueArray.length; k++) {
            if(uniqueArray[k]===arrBoard[i][j]){
              arrBoard[i][j]='X'
            }
          }
        }
      }
    }
  }

  console.log(arrBoard);
  console.log('\n');
  console.log('Enemy has been slain : '+uniqueArray);
  console.log('\n');
  console.log('Missing target : '+arrLost);
  console.log('\n');
  for (var i = 0; i < arrPlayer.length; i++) {
    if(playerPlay===arrPlayer[i].name){
      if(uniqueArray.length===arrPlayer[i].enemy.length){
        console.log(arrPlayer[i].name+' IS THE WINNER');
        console.log('\n');
      }
    }
  }

}

battleship(10);
