// let argv = process.argv;

function generateShip(){
    let ship = [];
    while(ship.length < 3){
        let randomX = Math.ceil(Math.random()*10);
        let randomY = Math.ceil(Math.random()*10);
        // ship.push(`${randomX},${randomY}`)
        ship.push([randomX, randomY])
    }
    return ship;
}

function generateBoard(ship){
    let bigGrid = [];
    let abjad = ' ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let count = 1;
    let no = 0
    for(let r=0; r<=10; r++){
        let grid = [];
        for(let c=0; c<=10; c++){
            if(r == ship[0][0] && c == ship[0][1]){
                grid.push('W1W')
            } else if(r == ship[1][0] && c == ship[1][1]){
                grid.push('W2W')
            } else if(r == ship[2][0] && c == ship[2][1]){
                grid.push('W3W')
            } else if(r == 0){
                if(no == 0){
                    grid.push('   ')
                    no++;
                } else {
                    grid.push(` ${no} `)
                    no++;
                }
            } else if(c == 0){
                grid.push(` ${abjad[count]} `)
                count++;
            } else {
                grid.push('---')
            }
        }
        bigGrid.push(grid.join(' | '))
    }
    return bigGrid.join('\n');
}


let ship = generateShip()
console.log(generateBoard(ship))
console.log(ship)

// console.log(argv)

// console.log()
// console.log(`${ship[0]} = ${ship[0][0]} ${ship[0][1]}`)
// console.log()
// console.log(`${ship[1]} =  ${ship[1][0]} ${ship[1][1]}`)
// console.log()
// console.log(`${ship[2]} =  ${ship[2][0]} ${ship[2][1]}`)
