var addBtn = document.getElementById('addBtn');
var squares = document.getElementsByClassName('square');
var x = document.getElementById("myAudio"); 

document.onload = (function(){
     
    for(let i = 0; i<4 ; i++)
        squares[i].style.opacity = Math.random().toFixed(1);  
    
})();

addBtn.onclick = function(){
    x.play();
    var newSquare = document.createElement("div");
    newSquare.className = 'square';
    newSquare.style.opacity = Math.random().toFixed(1);
    document.getElementById('wrapper3').appendChild(newSquare);   
}