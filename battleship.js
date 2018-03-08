function generateBoard(totalRow,totalColumn){

  let outputBoard = [];
  for(let i=0;i<totalRow;i++){
    outputBoard.push([]);
    for(let j=0;j<totalColumn;j++){
      outputBoard[i].push(` `);
    }
  }
  return outputBoard;
}


function generateShips(jumlahShips){

  let boardGames = generateBoard(10,10);
  let jenisShips = ['2','3','4','5'];
  let ukuranShips = [2,3,4,5];
  let randomRow;
  let randomColumn;
  let randomRowAwal;
  let randomColumnAwal;
  let horizontalVertikal = 0;
  let checkPositionKapal = false;
  let koordinatKapal = []

  for(let i=0;i<jumlahShips;i++){
    checkPositionKapal = false;
    while(checkPositionKapal == false){

      checkPositionKapal = true;
      randomColumn = 0;
      randomRow =0;
      randomRowAwal = Math.floor(Math.random()*Math.floor(10));
      randomColumnAwal = Math.floor(Math.random()*Math.floor(10));
      horizontalVertikal = Math.round(Math.random());

      if(horizontalVertikal == 0){
        randomColumn = randomColumnAwal + ukuranShips[i];
        randomRow = randomRowAwal
      }
      else if(horizontalVertikal ==1){
        randomRow = randomRowAwal + ukuranShips[i];
        randomColumn = randomColumnAwal;
      }

      for(let m=randomRowAwal;m<randomRow;m++){
        if(m>boardGames.length-1){
          checkPositionKapal = false
        }
      }

      for(let n=randomColumnAwal;n<randomColumn;n++){
        if(n>boardGames.length-1){
          checkPositionKapal = false
        }
      }
      if(checkPositionKapal == true){

        for(let m=randomRowAwal; m<randomRow ;m++){

          if(boardGames[m][randomColumnAwal] != ' '){
            checkPositionKapal = false;
          }
        }
        for(let n=randomColumnAwal;n<randomColumn;n++){
          if(boardGames[randomRowAwal][n] != ' ' ){
            checkPositionKapal = false;
          }
        }
      }

    }

    for(let j=randomRowAwal;j<randomRow;j++){
      boardGames[j][randomColumnAwal] = jenisShips[i];
    }
    for(let j=randomColumnAwal;j<randomColumn;j++){
      boardGames[randomRowAwal][j] = jenisShips[i];
    }
  }
  return boardGames;
}

//console.log(generateShips(4));

var totalTembakan = process.argv.length-2;
const konversiHurufNumber = [['A',0],['B',1],['C',2],['D',3],['E',4],['F',5],['G',6],['H',7],['I',8],['J',9]];
objectTarget = {};

for(let i=0;i<totalTembakan;i++){

  let koordinat = process.argv[2+i];

  for(let j=0;j<konversiHurufNumber.length;j++){
    if(koordinat[0] == konversiHurufNumber[j][0]){
      var targetRow = konversiHurufNumber[j][1];
    }
  }

  let targetColumn = parseInt(koordinat[1]);
  objectTarget['koordinatRow '+ (i+1)] = targetRow;
  objectTarget['koordinatColumn ' + (i+1)] = targetColumn;
}

//console.log(objectTarget);

function tembakKapal(objectTarget){

  let battleshipGames = generateShips(4);
  let jenisShips = ['2','3','4','5'];
  const ukuranShips = [2,3,4,5];
  let nyawaShips = [2,3,4,5];

  for(let i=0;i<totalTembakan;i++){

    let coordinateX = objectTarget['koordinatRow '+ (i+1)];
    let coordinateY = objectTarget['koordinatColumn ' + (i+1)];

    if(battleshipGames[coordinateX][coordinateY] != ' ' &&  battleshipGames[coordinateX][coordinateY] != '/'){

      for(let j=0;j<jenisShips.length;j++){

        if(battleshipGames[coordinateX][coordinateY] == jenisShips[j]){
          nyawaShips[j] = nyawaShips[j] - 1;
        }
      }
      battleshipGames[coordinateX][coordinateY] = 'X';
    }
    else if(battleshipGames[coordinateX][coordinateY] == ' '){
      battleshipGames[coordinateX][coordinateY] = '/';
    }
  }

  for(let i=0;i<jenisShips.length;i++){

    if(nyawaShips[i]>0){
      console.log('Kapal ' + jenisShips[i] + ' tertembak sebanyak ' + (ukuranShips[i] - nyawaShips[i]));
    }
    else{
      console.log('Kapal ' + jenisShips[i] + ' telah hancur');
    }

  }
  return battleshipGames;
}
console.log(tembakKapal(objectTarget));
