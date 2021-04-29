const container = document.getElementById("container")
const changeGridButton = document.querySelector(".change")
const clearGridButton = document.querySelector(".clear")

//use a function to create the grid with # of rows and columns (both would be the same #)
function createGrid(num){
    container.style.setProperty("--grid-rows", num);
    container.style.setProperty("--grid-columns", num);
    for(let i=0; i<num * num; i++){
        let div = document.createElement("div")
        container.appendChild(div).className = ("grid")
        
        let x = container.getElementsByClassName("grid") //the grid is stored in the variable x
        for(let i=0; i<x.length; i++){ // loop over the grid
            // when the mouse is over a specific grid, change the color where it is hovered.
            x[i].addEventListener("mouseover", function(){
                x[i].style.backgroundColor = "red"
            })
        }
    }
}
createGrid(16)

//updates the grid when "Change Size" button is pressed
function updateGrid(){
    //prompt pops up allowing user to enter a # from 1-64
    let gridSize = prompt("Enter a number from 1-64")
    //if user clicks "cancel" the function break out early, cancel returns null
    if(gridSize === null){
        return
    //if gridSize has no value, run newGrid() again from the start
    } else if (!gridSize) {
        alert("Please enter a number")
        updateGrid()
    //if the # entered > 64, alert user then run newGrid() again
    } else if(parseInt(gridSize) > 64){
        alert("Number is too big, only numbers from 1-64")
        updateGrid()
    //if the # entered is < 0, alert user then run newGrid() again
    } else if (parseInt(gridSize) <= 0){
        alert("Number is too small, only numbers greater than 0")
        updateGrid()
    //if # is between 1-64 then create the grid with createGrid()
    } else{
        container.textContent = ""; // remove the grid from before
        createGrid(gridSize) // create new grid with the input size
    }
}

//run the function clearGrid when the Clear Grid button is called
clearGridButton.addEventListener("click", clearGrid)

//the grid is stored in the variable x
let x = container.getElementsByClassName("grid") 

//clearGrid clears the grid and removes all red squares
function clearGrid(){
    for(let i=0; i<x.length; i++){
        x[i].style = null
    }
}

//run the function newGrid when the change grid button is clicked
changeGridButton.addEventListener("click", updateGrid)