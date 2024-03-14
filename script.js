const DEFAULT_SIZE = 16;
const gridContainer = document.getElementById('myGrid')

// generate a randomColor using Math.random
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random red component (0-255)
    const g = Math.floor(Math.random() * 256); // Random green component (0-255)
    const b = Math.floor(Math.random() * 256); // Random blue component (0-255)
    return `rgb(${r},${g},${b})`; // Construct RGB color string
}

// generate grid based on size provided; Note Size => size(row) x size(column)
function createGrid(size){
    rows = size;
    columns = size;

    // Create the grid dynamically
    for(let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            // Create a grid element
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            //gridItem.textContent = "Grid item row: " + i + " column: " + j;

            gridItem.style.backgroundColor = getRandomColor();
            gridItem.style.border = '2px solid black';

            // add an eventListener to each gridItem to watch for when the mouse hovers over the div
            // change color when this happens

            gridItem.addEventListener('mouseover', event => {
                gridItem.style.backgroundColor = getRandomColor();
            });
            
            // Append gridItem
            gridContainer.appendChild(gridItem);
        }
    }
}

// create initial grid of 16 x 16;
createGrid(DEFAULT_SIZE);



// create button to change number of grid elements by row & column



// Implement a black drawing method instead of color ---- Need borders here most likely



// Implement an eraser --- just make background white again, need borders here too

