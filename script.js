const container = document.querySelector('.gridContainer');

let reset = document.querySelector('#reset');
reset.addEventListener('click',function(e){
    newGrid();
    hover();

});

function gridMaker(grid){
  
   
    container.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${grid}, 1fr)`;
    for(i = 0; i < grid*grid; i++){
        const squares =document.createElement('div');
        squares.classList.add('squares')
        container.appendChild(squares);
        
        
    };
    hover();
};

gridMaker(grid = 10);

//hover function
function hover(){
 document.querySelectorAll('.squares').forEach(item => {
    item.addEventListener('mouseover', event => {
        item.classList.add('hover');
    })
        
});
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