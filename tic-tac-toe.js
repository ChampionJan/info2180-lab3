window.addEventListener("load", (event)=> {

    let winnerPositions = [[0,1,2],[3,4,5],[6,7,8], 
    [0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

    let xWinnerVal = 0;
    let oWinnerVal = 0;
    let playerX = true;
    let playerO = false;
    let winner;
    let squares  = document.querySelectorAll("#board > div");
    let button =  document.querySelector(".btn");

    squares.forEach((square)=> {
        square.classList.add("square");
        square.innerHTML = " ";

    });

    squares.forEach((square)=> {

        square.onclick = (event)=>{
            if (playerX && square.innerHTML == " "){
                square.classList.add("X");
                square.innerHTML = 'X';
                playerX = false;
                playerO = true;
            }
            else if (playerO && square.innerHTML == " ") {
                square.classList.add("O");
                square.innerHTML = 'O';
                playerO = false;
                playerX = true;
            }

            winner = determineWinner();

            if (winner == 1){
               document.querySelector("div#status").classList.add("you-won");
               document.querySelector("div#status").innerHTML = `Congratulations! ${square.innerHTML} is the Winner!`;

               squares.forEach((square)=>{
                   square.onclick = (event) => {
                       event.preventDefault();
                   }
               })
            }
        }

        square.onmouseover = (event)=>{
            square.style.transition = "all .3s ease-in-out";
            square.classList.add("hover");
        }

        square.onmouseout = (event)=>{
            square.classList.remove("hover");
        }

        let determineWinner =()=> {
            for (item = 0 ; winnerPositions.length; item++){

                winnerPositions[item].forEach(element => {
                    if (squares[element].classList.contains("X")){
                        xWinnerVal++;
                    }

                    else if (squares[element].classList.contains("O")){
                        oWinnerVal++;
                    }
                });

                if(xWinnerVal == 3 || oWinnerVal ==3 ){
                    return 1;
                } 
                xWinnerVal = 0;
                oWinnerVal = 0;
               if (item < winnerPositions.length - 1){
                   continue;
               }
               return 0;
            }
         } 
    });

    button.addEventListener('click', (event) => {
        squares.forEach((square) => {
            square.innerHTML = "";
            location.reload();
        });
    })
});