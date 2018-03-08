// Your code here
var battleShips =   [['Aircraft carrier', 5],
                    ['Battleship', 4],
                    ['Cruiser', 3],
                    ['Destroyer', 2]];

var coordinatesOfShips = [];

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
        if(area[yCoor+counter][xCoor] === 'S'){
            return false;
        }
    }
    return true;
}

function collisionCheck_up(area, lengthOfShip, xCoor, yCoor){
    for(let counter=0; counter<lengthOfShip; counter++){        
        if(area[yCoor-counter][xCoor] === 'S'){
            return false;
        }
    }
    return true;
}

function collisionCheck_right(area, lengthOfShip, xCoor, yCoor){
    for(let counter=0; counter<lengthOfShip; counter++){        
        if(area[yCoor][xCoor+counter] === 'S'){
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

function findPlace(area,lengthOfShip){
    let exit = false;
    let direction = Math.floor(Math.random()*4); // 0 - 3
    let result = [];

    while(!exit){
        
        //Get first Coordinate
        let xPos = Math.floor(Math.random()*10);
        let yPos = Math.floor(Math.random()*10);

        //If that coordinate is already filled    
        while(area[yPos][xPos] !== '~'){
            xPos = Math.floor(Math.random()*10);
            yPos = Math.floor(Math.random()*10);
        }

        for(let counter = 0; counter<4; counter++){
            //Check Down
            if(direction === 0){
                if(yPos - lengthOfShip < 0){
                    exit = collisionCheck_down(area,lengthOfShip, xPos, yPos);
                }else{
                    exit = false;
                }
            }//Check Right
            else if(direction === 1){
                if(xPos - lengthOfShip < 0){
                    exit = collisionCheck_right(area,lengthOfShip, xPos, yPos);
                }else{
                    exit = false;
                }
            }//Check Up
            else if(direction === 2){
                if(yPos + lengthOfShip > 9){
                    exit = collisionCheck_up(area,lengthOfShip, xPos, yPos);
                }else{
                    exit = false;
                }
            }//Check Left
            else if(direction === 3){
                if(xPos + lengthOfShip > 9){
                    exit = collisionCheck_left(area,lengthOfShip, xPos, yPos);
                }else{
                    exit = false;
                }

            }

            if(exit === true){
                result.push(yPos);
                result.push(xPos);
                result.push(direction);
                break;
            }
            //Randomize again
            direction = Math.floor(Math.random()*4);
        }
    }
    return result;
}

function shipPlacement(){
    let battleArea = setUpBoard();    

    //Looping to get the ships
    for(let counter =0; counter<battleShips.length; counter++){        
        
        let lengthOfShip = battleShips[counter][1];
        let arrayOfLocation = findPlace(battleArea, lengthOfShip);
        let coor = [];

        direction = arrayOfLocation[2];
        let xPos = arrayOfLocation[1];
        let yPos = arrayOfLocation[0];
        
        //Down
        if(direction === 0){
            for(let counter2 =0; counter2<lengthOfShip; counter2++){
                coor = [];
                battleArea[yPos + counter2][xPos] = 'S'
                
                //Adding coordinate to a global variable
                coor.push(yPos + counter2);
                coor.push(xPos);
                coordinatesOfShips.push(coor);
            }    
        
        }//Up
        else if(direction === 2){
            
            for(let counter2 =0; counter2<lengthOfShip; counter2++){
                coor=[];
                battleArea[yPos - counter2][xPos] = 'S'
                coor.push(yPos - counter2);
                coor.push(xPos);
                coordinatesOfShips.push(coor);
            }
    
        }//Right
        else if(direction === 1){
            for(let counter2 =0; counter2<lengthOfShip; counter2++){
                coor = [];
                battleArea[yPos][xPos + counter2] = 'S'
                coor.push(yPos);
                coor.push(xPos + counter2);
                coordinatesOfShips.push(coor);
            }   
        }//Left
        else{
            for(let counter2 =0; counter2<lengthOfShip; counter2++){
                coor = [];
                battleArea[yPos][xPos - counter2] = 'S'
                coor.push(yPos);
                coor.push(xPos - counter2);
                coordinatesOfShips.push(coor);
            }   
        }
        
    }
    return battleArea;
}

function bomb(arr){
    let battleArea = shipPlacement();

    //Bombing
    for(let counter =2; counter<arr.length; counter++){
        let yCoor = arr[counter].charAt(0).charCodeAt(0) - 65;
        let xCoor = parseInt(arr[counter].charAt(1));
        let target = [];
        
        target.push(yCoor);
        target.push(xCoor);
        
        if(battleArea[yCoor][xCoor] === 'S'){
            battleArea[yCoor][xCoor] = 'X'
        }else{
            battleArea[yCoor][xCoor] = '*'
        }
    }

    console.log(battleArea);
    //Check if any ships are left

}

bomb(process.argv);