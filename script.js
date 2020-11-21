function openNav(){
    var x = document.getElementById( "into");
    if(x.className === " into "){
        x.className += " menujs ";
        document.getElementById("menu").innerHTML= " &Cross; ";



    }else {
        x.className = " into ";
        document.getElementById("menu").innerHTML= " &#9776; ";
    }
}   