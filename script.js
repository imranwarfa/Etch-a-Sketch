const DEFAULT_SIZE = 16;
const DEFAULT_CONTAINER_SIZE = 1000;
const DEFAULT_BORDER_SIZE = 2;

const gridContainer = document.getElementById('myGrid');
const btn = document.querySelector('.resize-btn');
const erasebtn = document.querySelector('.eraser');

// status flag for eraser mode
let eraserStatus = false;

// generate a randomColor using Math.random
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random red component (0-255)
    const g = Math.floor(Math.random() * 256); // Random green component (0-255)
    const b = Math.floor(Math.random() * 256); // Random blue component (0-255)
    return `rgb(${r},${g},${b})`; // Construct RGB color string
}

// generate grid based on size provided; Note Size => size(row) x size(column)
function createGrid(size){
    const rows = size;
    const columns = size;

    // Calculate size of grid cell: Grid container => 960px x 960px
    
    const cellSize = (DEFAULT_CONTAINER_SIZE / size) - DEFAULT_BORDER_SIZE; // Adjusted width considering border

    // Create the grid dynamically
    for(let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            // Create a grid element
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            
            // create grid element's size
            gridItem.style.width = `${cellSize}px`;
            gridItem.style.height = `${cellSize}px`;

            // gridItem.style.backgroundColor = getRandomColor();
            gridItem.style.border = '1px solid black';

            // add an eventListener to each gridItem to watch for when the mouse hovers over the div
            // change color when this happens

            // gridItem.addEventListener('mouseover', () => {
            //     if(eraserStatus)
            //         gridItem.style.backgroundColor = 'white';
            //     else    
            //         gridItem.style.backgroundColor = getRandomColor();
            // });

            
            
            // Append gridItem
            gridContainer.appendChild(gridItem);
        }
    }
    // change once grid is formed
    updateHover();
}

// create initial grid of 16 x 16;
createGrid(DEFAULT_SIZE);

// update hover functionality based on eraser flag
function updateHover(){
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', handleHover);
    });
}

function handleHover(event){
    // implement hover effect => erase or color
    const gridItem = event.target;
    if(eraserStatus)
        gridItem.style.backgroundColor = 'white';
    else    
        gridItem.style.backgroundColor = getRandomColor();   
}

function clearGrid() {
    // clear event listeners first
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(gridItem => {
        gridItem.removeEventListener('mouseover', handleHover);
    });
    
    // Remove all child elements from the grid container
    gridContainer.innerHTML = '';
}

// create button to change number of grid elements by row & column
btn.addEventListener('click', () => {
    let usertext = window.prompt("Please enter a dimensions size for the rows & columns. (Below 100 please...).");
    let newSize = parseInt(usertext, 10);

    // Validate user input
    if (!isNaN(newSize) && newSize > 0 && newSize <= 100) {
        clearGrid();
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
});

// Implement an eraser --- just make background white again, need borders here too
erasebtn.addEventListener('click', () => {
    eraserStatus = !eraserStatus; // change status if erasebtn is clicked
    if(!eraserStatus){
        // Clicked color mode
        erasebtn.textContent = 'Erase Mode';
    }
    else
        // Clicked eraser mode    
        erasebtn.textContent = 'Color Mode';
    updateHover();
});
