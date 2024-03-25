const containter = document.getElementById('container');
const gridSizeButton = document.getElementById('gridSizeButton');
const kwadraty = document.getElementsByClassName('kwadraty');
const buttonText = document.getElementById('buttonText');
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

function randomColorNum() {
  return Math.floor(Math.random() * 256);
}

function randomRGB() {
  return `(${randomColorNum()} ${randomColorNum()} ${randomColorNum()}`;
}


createGrid();

let opacity = 100;

    containter.addEventListener(
        "mouseover",
        (event) => {
          
            const randomColor = randomRGB();
            event.target.style.background = "rgb" + randomColor + `)`;
            containter.style.opacity = `${opacity}%`;
            //event.target.style.background = "rgb" + randomColor + `/ ${opacity}%)`;
            opacity = opacity - 1;
             if(opacity == 0){
              buttonText.textContent = "Your squares disappeared! Enter a new grid size to refresh and draw again!"
             }

        }
      );

      gridSizeButton.addEventListener(
        "click",
        () => {
          opacity = 100;
           buttonText.textContent = "Choose a different grid size";
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
  
