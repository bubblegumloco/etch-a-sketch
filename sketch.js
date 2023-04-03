const container = document.querySelector('#container');
let newDiv = document.createElement('div');
newDiv.classList.add('divGroup');

const smallBtn = document.querySelector('#smallBtn');
const mediumBtn = document.querySelector('#mediumBtn');
const largeBtn = document.querySelector('#largeBtn');
const eraser = document.querySelector('#eraseLabel');

let color = "black";

function blockLoop(area) {
    for (let i = 1; i <= area; i++){
        newDiv = document.createElement('div');
        newDiv.id = 'box' + i;
        newDiv.classList.add('divGroup');
        changeArea(area);
        container.appendChild(newDiv);

        newDiv.addEventListener("mouseover", changeColor);
        newDiv.style.backgroundColor = "white";
    };
};

function changeArea(area) {
    if (area > 1000 && area < 5500){
        newDiv.setAttribute("style", "width:30px;height:30px;");
        //large
    } else if (area > 6000 && area < 9000) {
        newDiv.setAttribute("style", "width:20px;height:20px;");
        //medium
    } else {
        newDiv.setAttribute("style", "width:10px;height:10px;");
        //small
    };
};

function clearDiv() {
    container.textContent = '';
}

function uponStartUp() {
    blockLoop(7470);
    changeArea(7470);
};

function reset(){
    clearDiv();
    uponStartUp();
}

uponStartUp();

smallBtn.addEventListener("click", smallBox);
mediumBtn.addEventListener("click", mediumBox);
largeBtn.addEventListener("click", largeBox);

function smallBox() {
    clearDiv();
    blockLoop(9001);
    changeArea(9001);
};

function mediumBox() {
    clearDiv();
    blockLoop(7470);
    changeArea(7470);
};

function largeBox() {
    clearDiv();
    blockLoop(5000);
    changeArea(5000);
};

function changeColor(){
    if (color == 'random'){
        this.style.backgroundColor = randomHsl();
    } else {
        this.style.backgroundColor = color;
    };
    //"this" refers to the specific div that mouse touches 
};

function options(choice){
    color = choice;
};

function randomHsl() {
    return 'hsla(' + (Math.floor(Math.random()*360)) + ', 100%, 70%, 1)';
};

eraser.addEventListener("click", shakeAnimation, false);

function shakeAnimation(event){
    eraser.style.animationName = 'none';

    requestAnimationFrame(() => {
        eraser.style.animationName = '';
    });
};






