// menampung array yang diinput
let inputs = []
let counter = 2
for(let a=0; a<5; a++){
  if(process.argv[counter]!==undefined){
    inputs.push(process.argv[counter])
    counter++
  }
}
// console.log(inputs)

function dadu(){
  return Math.floor(Math.random()*6)+1
}
// console.log(dadu())

function posisiKapal(){
  // let alpabet = [['a',1],['b',2],['c',3],['d',4],['e',5],['f',6],['g',7],['h',8],['i',9],['j',10]]
  koordinats = []
  for(let i=0; i<Math.floor(Math.random()*10)+1; i++){
    let posisi = []
    posisi.push(Math.floor(Math.random()*10)+1)
    posisi.push(Math.floor(Math.random()*10)+1)
    koordinats.push(posisi)
  }
  return koordinats
}
// console.log(posisiKapal())

// menampilkan
function papan(){
  // console.log('tes')
  let boardPlayer = []
  for(let i=0; i<10; i++){
    let row = []
    for(let j=0; j<10; j++){
      row.push(' ')
    }
    boardPlayer.push(row.join('|'))
  }
  // console.log(boardPlayer)
  return boardPlayer.join(' \n')
}
console.log(papan())
