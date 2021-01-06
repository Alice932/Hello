var colorArray = ["#0DC2FF", "#007DE8", "#0E5DFF", "#0C28EB", "#1600FF"];
var i = 0;

function changeColor(){
    document.body.style.background = colorArray[i];
    i++;
    if( i >= colorArray.length) {
        i = 0;
    }
}