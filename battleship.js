// Your code here
let battleShips =   [['Aircraft carrier', 5],
                    ['Battleship', 4],
                    ['Cruiser', 3],
                    ['Destroyer', 2]];

function setUpBoard(){
    let yAxis = [];
    for(let counter = 0; counter<10; counter++){
        let xAxis = [];
        for(let counter2 = 0; counter2<10; counter2++){
            xAxis.push('~');
        }
        yAxis.push(xAxis);
    }
    return yAxis;    
}

function collisionCheck_down(area, lengthOfShip, xCoor, yCoor){
    for(let counter=0; counter<lengthOfShip; counter++){
        console.log(area[yCoor+counter][xCoor])
        if(area[yCoor+counter][xCoor] === 'S'){
            console.log('its false down')
            return false;
        }
    }
    return true;
}

function collisionCheck_up(area, lengthOfShip, xCoor, yCoor){
    for(let counter=0; counter<lengthOfShip; counter++){
        console.log(area[yCoor-counter][xCoor]);
        
        if(area[yCoor-counter][xCoor] === 'S'){
            console.log('its false UP')
            return false;
        }
    }
    return true;
}

function collisionCheck_right(area, lengthOfShip, xCoor, yCoor){
    for(let counter=0; counter<lengthOfShip; counter++){
        console.log(area[yCoor][xCoor+counter]);
        
        if(area[yCoor][xCoor+counter] === 'S'){
            console.log('its false right')
            return false;
        }
    }
    return true;
}

function collisionCheck_left(area, lengthOfShip, xCoor, yCoor){
    
    for(let counter=0; counter<lengthOfShip; counter++){        
        if(area[yCoor][xCoor-counter] === 'S'){
            return false;
        }
    }
    return true;
}

function findPlace(area,lengthOfShip, xCoor, yCoor){
    let exit = false;
    let direction = Math.floor(Math.random()*4);
    while(!exit){
        
        //Check Up
        if(direction === 0){
            if(yCoor - lengthOfShip > 0){
                exit = collisionCheck_up(area,lengthOfShip, xCoor, yCoor);
            }
        }//Check Right
        else if(direction === 1){
            if(xCoor + lengthOfShip < 9){
                exit = collisionCheck_right(area,lengthOfShip, xCoor, yCoor);
            }
        }//Check Down
        else if(direction === 2){
            if(yCoor + lengthOfShip < 9){
                exit = collisionCheck_down(area,lengthOfShip, xCoor, yCoor);
            }
        }//Check Left
        else if(direction === 3){
            if(xCoor - lengthOfShip > 0){
                exit = collisionCheck_left(area,lengthOfShip, xCoor, yCoor);
            }
        }

        //Randomize again
        direction = Math.floor(Math.random()*4);
    }
}

function shipPlacement(){
    let battleArea = setUpBoard();    

    //Get first Coordinate
    let xPos = Math.floor(Math.random()*10);
    let yPos = Math.floor(Math.random()*10);

    //Looping to get the ships
    for(let counter =0; counter<battleShips.length; counter++){        
    
        //If that coordinate is already filled    
        while(battleArea[yPos][xPos] !== '~'){
            xPos = Math.floor(Math.random()*10);
            yPos = Math.floor(Math.random()*10);
        }
    
        //Decide which direction
        let dir = Math.round(Math.random());
        let lengthOfShip = battleShips[counter][1];
        console.log(`${yPos}, ${xPos}  dir :${dir}`  );
    
        //yPos = 4, xPos = 7, dir = 1
        if(dir === 1){
            //Down
            if(yPos - lengthOfShip < 0){
                for(let counter2 =0; counter2<lengthOfShip; counter2++){
                    battleArea[yPos + counter2][xPos] = 'S'
                }
            }//Up
            else if(yPos + lengthOfShip > 9){
                
                for(let counter2 =0; counter2<lengthOfShip; counter2++){
                    battleArea[yPos - counter2][xPos] = 'S'
                }
            }else{
                if(collisionCheck_up(battleArea, lengthOfShip, xPos, yPos)){
                    for(let counter2 =0; counter2<lengthOfShip; counter2++){
                        battleArea[yPos + counter2][xPos] = 'S'
                    }   
                }else if(collisionCheck_down(battleArea, lengthOfShip, xPos, yPos)){
                    for(let counter2 =0; counter2<lengthOfShip; counter2++){
                        battleArea[yPos - counter2][xPos] = 'S'
                    }   
                }
            }
        }else if(dir === 0){
            //Right            
            if(xPos - lengthOfShip < 0){
                
                for(let counter2 =0; counter2<lengthOfShip; counter2++){
                    battleArea[yPos][xPos + counter2] = 'S'
                }
            }//Left
            else if(xPos + lengthOfShip > 9 ){
                
                for(let counter2 =0; counter2<lengthOfShip; counter2++){
                    battleArea[yPos][xPos - counter2] = 'S'
                }
            }else{
                if(collisionCheck_right(battleArea, lengthOfShip, xPos, yPos)){
                    for(let counter2 =0; counter2<lengthOfShip; counter2++){
                        battleArea[yPos][xPos + counter2] = 'S'
                    }   
                }else if(collisionCheck_left(battleArea, lengthOfShip, xPos, yPos)){
                    for(let counter2 =0; counter2<lengthOfShip; counter2++){
                        battleArea[yPos][xPos - counter2] = 'S'
                    }   
                }
            }
        }
    }


    console.log(battleArea);
}

shipPlacement();