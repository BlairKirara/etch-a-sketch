const containter = document.getElementById('container');
const gridSizeButton = document.getElementById('gridSizeButton');
const kwadraty = document.getElementsByClassName('kwadraty');
let gridSize = 16;
let containerWidth = 500;

function createGrid(){
          for(let i = 0; i<gridSize; i++){
            for(let j=0; j<gridSize; j++){
                const div = document.createElement('div');
                div.classList.add('kwadraty');
                containter.append(div);
            }
        }
        for(let i = kwadraty.length - 1; i >= 0; --i)
        {
            kwadraty[i].style.width = (containerWidth/gridSize) + "px";
            kwadraty[i].style.height = (containerWidth/gridSize) + "px";

        }
}

function randomRGB(){
  let num1 = Math.random() * (255 - 1) + 1;
  let num2 = Math.random() * (255 - 1) + 1;
  let num3 = Math.random() * (255 - 1) + 1;
}

randomRGB();

createGrid();


    containter.addEventListener(
        "mouseover",
        (event) => {
          // highlight the mouseover target
          event.target.style.backgroundColor = "orange";
        }
      );

      gridSizeButton.addEventListener(
        "click",
        () => {
            while (containter.firstChild) {
                containter.removeChild(containter.firstChild);
              }
            
          gridSize = prompt("Enter a desired nxn grid size. It should be a number between 10 and 100.")
          while(gridSize>100 || gridSize<10){
            gridSize = prompt("It should be a number between 10 and 100.")
          }
          
          createGrid();
        }
      );
  
