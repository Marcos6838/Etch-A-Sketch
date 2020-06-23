const container = document.querySelector('.gridContainer');

let reset = document.querySelector('#reset');
reset.addEventListener('click',function(e){
    newGrid();
    hover();

});

//changes color of the hover effect
let color = document.querySelector('#color');
color.addEventListener('click',function(e){
    let userColorChoice = String(prompt("enter your color"));
    hover(userColorChoice);
   
});


function gridMaker(grid){
  
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
    for(i = 0; i < grid*grid; i++){
        const squares =document.createElement('div');
        squares.classList.add('squares');
        container.appendChild(squares);
        
   
    };
    hover();
};

gridMaker(grid = 16);

//hover function
function hover(userColorChoice){
 document.querySelectorAll('.squares').forEach(item => {
    item.addEventListener('mouseover', event => {
        
        item.style.backgroundColor = userColorChoice;
        item.classList.add('hover');
    })
        
});
}

//makes the hover effect rainbow

let rainbow = document.querySelector('#rainbow');
rainbow.addEventListener('click',function(e){ 
    
    rainbowHover();
});

function rainbowHover(){
    
    document.querySelectorAll('.squares').forEach(item =>{  
        item.addEventListener('mouseenter', event => {
            let userColorChoice = "rgb( " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")";
        item.style.backgroundColor = userColorChoice;
        })
        
        
    })
    
    
    
}


function eraseGrid(){
        while(container.hasChildNodes()){
            container.removeChild(container.lastChild); 
        };
};

function newGrid(){
    eraseGrid();
    let grid = Number(prompt('Enter a number from 1-100'));
    gridMaker(grid);
}
