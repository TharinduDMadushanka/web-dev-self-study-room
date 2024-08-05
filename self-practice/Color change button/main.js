var index=0;

function changeColor(){
    var color=["red","bule","orange","yellow","green","purple"];

    document.getElementsByTagName("body")[0].style.background=color[index++];

    if(index>color.length-1){
        index=0;
    }
}