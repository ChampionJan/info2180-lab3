window.addEventListener("load", (event)=> {
    let squares  = document.querySelectorAll("#board > div")
    squares.forEach((square)=>{
        square.classList.add("square");
    });
});