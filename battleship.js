// Your code here
let battleshipTable = [];
let abjad = 'ABCDEFGHIJ';
//masih Manual
let shipName ={
    0: ['12', '22', '32', '42', '52'], // Aircraft carrier 5
    1: ['24', '25', '26', '27'], // Battleship 4
    2: ['69', '68', '67'], // Cruiser 3
    3: ['84', '94'] //Destroyer 2
}

let shipLen = Object.keys(shipName); // convert object keyname to array
//console.log(shipName[shipLen[0]]);
let hitCounter = [
                  [0, 'Aircraft carrier', 5],
                  [0, 'Battleship', 4],
                  [0, 'Cruiser', 3],
                  [0, 'Battleship', 4]
                ];

for(let i = 0; i < 10; i++){
    let AtoJ = [];
    for(let j = 1; j <= 10; j++){
        //AtoJ.push(abjad[i]+j);
        AtoJ.push(" ");
    }
    battleshipTable.push(AtoJ);
}

// for(let i = 0; i < 10; i++){
//
//     for(let j = 1; j <= 10; j++){
//         let AtoJ = {};
//         AtoJ[abjad[i]] = j;
//         battleshipTable.push(AtoJ);
//     }
//
// }
//
//console.log(battleshipTable);

let posisiBomb = []

for(let i = 2; i < process.argv.length; i++){
  posisiBomb.push(process.argv[i]);
}


let hasil = [];

//kalo bandingin ke battleshipTable
// for(let i = 0; i < posisiBomb.length; i++){
//
//     for(let j = 0; j < battleshipTable.length; j++){
//         for(let k = 0; k < battleshipTable[j].length; k++){
//             if(posisiBomb[i] === battleshipTable[j][k]){
//                 console.log(posisiBomb[i], 'Ketemu');
//             }
//         }
//     }
// }


// let shipLen = Object.keys(shipName); // convert object keyname to array
//console.log(shipName[shipLen[0]]);

//memasukan posisi kapal ke map
for(let j = 0; j < shipLen.length; j++){
    //console.log('kalo disini');
    for(let k = 0; k < shipName[shipLen[j]].length; k++){
      let horizontal = shipName[shipLen[j]][k][0];
      let vertical = shipName[shipLen[j]][k][1];
      //console.log(horizontal,  vertical);
      battleshipTable[horizontal][vertical] = j;
      //posisi kapal di map

    }

}


//convert abjad ke angka

for(let i = 0; i < posisiBomb.length; i++){
  for(let j = 0; j < abjad.length; j++){
      if(posisiBomb[i][0] === abjad[j]){
          //ubah abjda jadi angkanya
          posisiBomb[i] = j+posisiBomb[i][1];

          let horizontal = posisiBomb[i][0];
          let vertical = posisiBomb[i][1];

          if(battleshipTable[horizontal][vertical] === ' '){
            battleshipTable[horizontal][vertical] = '/';
          }else{
            let posisiKapal = battleshipTable[horizontal][vertical];
            //console.log(battleshipTable[horizontal][vertical]+'-------');
            hitCounter[posisiKapal][0] += 1;
            battleshipTable[horizontal][vertical] = 'x';

          }
          //battleshipTable[horizontal][vertical] = 'PB'
      }
  }
}



//console.log(hitCounter);

// console.log(shipName[shipLen[0]][0]); // A2

console.log('Lokasi Kapal:');
console.log(shipName);


console.log('\nPosisi Bomb:');
console.log(posisiBomb);

console.log(battleshipTable);

//End Result
console.log('\nFleet Table');
console.log(`| #  | Ship          | Size |`);
console.log(`| -- | ------------  | ---- |`);
for(let i = 0; i < hitCounter.length; i++){
    console.log(`| ${hitCounter[i][0]}x | ${hitCounter[i][1]} | ${hitCounter[i][2]} |`);
    //console.log(`| -- | ------------  | ---- |`);
}










//
