const rows = 16;
const columns = 16;

// generate a randomColor using Math.random
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random red component (0-255)
    const g = Math.floor(Math.random() * 256); // Random green component (0-255)
    const b = Math.floor(Math.random() * 256); // Random blue component (0-255)
    return `rgb(${r},${g},${b})`; // Construct RGB color string
}

// get the grid container element
const gridContainer = document.getElementById('myGrid');

// Create the grid dynamically
for(let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
        // Create a grid element
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        //gridItem.textContent = "Grid item row: " + i + " column: " + j;

        gridItem.style.backgroundColor = getRandomColor();
        
        // Append gridItem
        gridContainer.appendChild(gridItem);
    }
}