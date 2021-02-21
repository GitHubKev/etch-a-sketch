const container = document.getElementById("container")
const buttons = document.querySelector("input")

//use a function to create the grid with # of rows and columns (both would be the same #)
function createGrid(row, column){
    container.style.setProperty('--grid-rows', row)
    container.style.setProperty('--grid-columns', column)

    for(let i=0; i < (row * column); i++){
        let cell = document.createElement("div")
        container.appendChild(cell).className = ("grid")
    }
}

window.onload = createGrid(5,5)

function newGrid(){
    let gridSize = prompt("Enter new size")
    if(parseInt(gridSize) > 64){
        alert("Enter a number from 1-64")
        prompt("Enter new size")
    } else{
        createGrid(gridSize, gridSize)
    }
}


//the grid is stored in the variable x
let x = container.getElementsByClassName("grid")

//loop over the grid
for(let i=0; i<x.length; i++){
    // when the mouse is over a specific grid, change the color where it is hovered.
    x[i].addEventListener("mouseover", function(){
        x[i].style.backgroundColor = "red"
    })
}

//run the function clearGrid when the Clear Grid button is called
document.getElementById("clear").addEventListener("click", clearGrid)


//clearGrid clears the grid and removes all red squares
function clearGrid(){
    alert("i got clicked")
    container.getElementsByClassName("grid").style.removeProperty("background-color")
}



buttons.forEach(button => {
    button.addEventListener("click", function(){
        newGrid()
    })
});






