var addBtn = document.getElementById('addBtn');
var squares = document.getElementsByClassName('square');

document.onload = (function(){
    for(let i = 0; i<4 ; i++)
        squares[i].style.opacity = Math.random().toFixed(1);  
})();

addBtn.onclick = function(){
    var newSquare = document.createElement("div");
    newSquare.className = 'square';
    newSquare.style.opacity = Math.random().toFixed(1);
    document.getElementById('wrapper3').appendChild(newSquare);   
}