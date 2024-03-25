const containter = document.getElementById('container');
const gridSizeButton = document.getElementById('gridSizeButton');
let gridSize = 256;

for(let i = 0; i<gridSize; i++){
    const div = document.createElement('div');
    div.classList.add('kwadraty');
    containter.append(div);
}


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
          for(let i = 0; i<gridSize; i++){
            const div = document.createElement('div');
            div.classList.add('kwadraty');
            containter.append(div);
        }
        }
      );
  
