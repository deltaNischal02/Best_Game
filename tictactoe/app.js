let boxes  = document.querySelectorAll(".box"); //to select all the boxes
let resetButton = document.querySelector("#resetBtn");//select the button to reset the game

let turn0 = true; //playerX, player0

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    
];
    
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box was clicked");
        
        if(turn0){
            box.innerHTML= '<img src="./images/0.jpg" alt="Player 0" srcset="" width ="100% height="100%"/>'; //player 0
            turn0=false;
        }
        else{
            box.innerHTML= '<img src="./images/X.png" alt="Player 1" srcset="" width ="100% height="200%"/>'; //player x
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
        
        
    });

});

const checkWinner = () =>{
    for (pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
        
    }
}