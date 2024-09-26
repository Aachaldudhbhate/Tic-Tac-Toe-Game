let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let turn0 = true; //player0 playerX condition

// in this use 2D array ex- let arr2= [[1,2],[2,3],[4,5]];
// these are winning pattern in tic toc toe game
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

// game reset function
  const resetGame = () => {
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
  };
// first box clickable 
  boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){// player 0 turn
            box.innerText = "O";
            turn0 = false;
        } else{// player x turn
            box.innerText = "X";
            turn0 = true;
        }
         box.disabled= true;   
         checkWinner();// check who is winner function call
    }
    );
  });
       // box repeate not enable after game complete
  const disabledBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
  };

  const enabledBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = " ";
    
    }
  };

    // show winner
  const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
  };

// check winner function defination
const checkWinner = () => {
   for (let pattern of winPattern ) {
    let pos1Val = boxes[pattern[0]].innerText;
   let pos2Val= boxes[pattern[1]].innerText;
   let pos3Val = boxes[pattern[2]].innerText;

   if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if(pos1Val === pos2Val && pos2Val=== pos3Val)
        {
        console.log("Winner" , pos1Val);
        showWinner(pos1Val);
    }
   }
   }
};
   // game  button event
   newbtn.addEventListener("click",resetGame);

// reset button event
   reset.addEventListener("click",resetGame);