let sizePicker =  document.getElementById("sizePicker");
let canvas =  document.getElementById("pixelCanvas");

/**
  * @desc create a grid of squares
  * @param int $width - number of squares representing the width of the grid
  * @param int $height - number of squares representing the height of the grid
*/
function makeGrid(height,width) {
    for (let i = 0; i < height; i++) {
        let row = document.createElement("tr");
            
        for (let j = 0; j < width; j++) {
            let cell = document.createElement("td");
            row.appendChild(cell);
        }
    canvas.appendChild(row);   
}

}

/**
* @description Adds functionality to color the "td" pixels dynamically
* @param {number} e - The event that is passed in when function called
*/
function colorPixel(e) {
    let color =  document.querySelector("#colorPicker").value;
    e.target.style.backgroundColor = color;
}

sizePicker.addEventListener('submit', function(e){
    e.preventDefault();

    //clearing out the old grid before creating a new one
    canvas.innerHTML = "";

    // Select size input provided by the user
    // When size is submitted by the user, call makeGrid()
    let inputHeight = document.querySelector("#inputHeight").value;
    let inputWidth =  document.querySelector("#inputWidth").value;
    makeGrid(inputHeight,inputWidth);

    var pixels = document.querySelectorAll("td");

    // calls the ColorPixel function when any pixel area is clicked
    for (let index = 0; index < pixels.length; index++) {
        pixels[index].addEventListener('click',colorPixel,false);
        
    }
});
