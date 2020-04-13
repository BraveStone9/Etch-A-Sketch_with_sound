const gridContainer = document.getElementById("Grid");
const gridSize = document.getElementById("GridSize");

document.getElementById("Create").addEventListener("click", changeGridSize)




//creates the grid
function createGrid(gridValue){
    for(var i = 0 ; i < gridValue ; i++){
        for(var j = 0 ; j < gridValue ; j++){
            const cell = document.createElement("div")
            const cellDimension = Number(650/gridValue)
            console.log(cellDimension)
            cell.style.width = cellDimension+"px"
            cell.style.height = cellDimension+"px"
            cell.classList.add("cell")
            gridContainer.appendChild(cell)
        }
    }



    //mouseove events
    const cellToArray = Array.prototype.slice.apply(document.querySelectorAll('.cell'))
    cellToArray.forEach((cell) => {
        cell.addEventListener("mouseover",function(e){ 
            sound()
            
            e.target.style.backgroundColor = false
                let r = Math.floor(Math.random()*255)
                let g = Math.floor(Math.random()*255)
                let b = Math.floor(Math.random()*255)
                baseColor = 'rgb(' + r + ', ' + g + ', ' + b + ')'
            
            if (Boolean(e.target.style.backgroundColor) == false){
                e.target.style.backgroundColor = baseColor
                return true
            }
            else 
            e.target.style.backgroundColor = fadeToBlack(e)
            
            //Extract RGB value from mouse event
            function fadeToBlack(e) {
                let extractRgb = e.target.style.backgroundColor.match(/\d+/g)
                let r2 = Number(extractRgb[0])-27
                let g2 = Number(extractRgb[1])-27
                let b2 = Number(extractRgb[2])-27
                return 'rgb(' + r2 + ', ' + g2 + ', ' + b2 + ')'
            }
            
            //sound
            function sound(){
                const sounds = document.querySelectorAll('.note')
                let playNote = sounds[Math.floor(Math.random() * 11)]
                playNote.play()
                playNote.volume = 0.1
                // console.log(.volume)
            }
        })
    })
    const clear = document.getElementById("Reset")
    cellToArray.forEach((cell)=>{
        clear.addEventListener('click',clearPad)
        function clearPad(){
            cell.style.backgroundColor = ''
        }
    })
}

//changes the size of grid when create button is pressed and clear previous cells
function changeGridSize(){
    let cellsToDelete = Array.prototype.slice.apply(document.querySelectorAll('.cell'))
    cellsToDelete.forEach((cell) => {gridContainer.removeChild(cell)})

    let gridValue = gridSize.value
    console.log(gridValue,"GV")
    createGrid(gridValue)
}