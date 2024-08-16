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
        
    });

    }
});