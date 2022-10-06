window.addEventListener("load", (event)=> {
    let squares  = document.querySelectorAll("#board > div");
    let state = -1;

    squares.forEach((square)=> {
        square.classList.add("square");
        square.innerHTML = " ";

    });

    squares.forEach((square)=> {
        square.onclick = (event)=>{
            if (state == -1 || state == 1){
                square.classList.remove("O");
                square.classList.add("X");
                square.innerHTML = 'X';
                state = 0;
            }
            else {
                square.classList.remove("X");
                square.classList.add("O");
                square.innerHTML = 'O';
                state = 1;
            }
        }  
    });
});