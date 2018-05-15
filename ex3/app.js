var addBtn = document.getElementById('addBtn');

document.onload = (function(){
    for(let i = 0; i<4 ; i++){
        var newSquare = document.createElement("div");
        newSquare.className = 'square';
        newSquare.style.opacity = Math.random().toFixed(1);
        document.getElementById('wrapper3').appendChild(newSquare);  
    }
})();

addBtn.onclick = function(){
    var newSquare = document.createElement("div");
    newSquare.className = 'square';
    newSquare.style.opacity = Math.random().toFixed(1);
    document.getElementById('wrapper3').appendChild(newSquare);   
}