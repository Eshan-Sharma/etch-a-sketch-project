function createNode(grid=16){
    let divCol = document.createElement('div');
    divCol.className = 'column';
    for(let i = 0; i < grid; i++){
        let gridNode = document.createElement('div');
        gridNode.classList.add('node');
        gridNode.setAttribute('id', 'node');
        gridNode.style.width = (500/grid)+"px";
        gridNode.style.height = (600/grid)+"px";
        divCol.appendChild(gridNode);
        
    }
    let divContainer = document.getElementById('container');
    divContainer.appendChild(divCol);
    sketch();
};

function createGrid(){
    let grid = parseInt(prompt("Enter 1 to 100 for nXn grid: "));
    if(grid>100 || grid<1 ){
        alert("Please enter number only between 1 to 100");
        grid=0;
        createGrid();
    }else{
        console.log(grid);
        for(let i = 0; i < grid;i++){
            createNode(grid);
        }
    }
    
};

function refresh(){
   location.reload();
};


function sketch(){
    let changeColor = document.getElementById('node');
    changeColor.addEventListener('mouseover', ()=>{
        changeColor.style.backgroundColor = "brown";
    });
};

// const box = document.getElementById('container');
// box.addEventListener('mouseover', function handleMouseOver() {
//   box.classList.add('black');
// });




