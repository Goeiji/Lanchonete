function bebidaGelada(){
    if(document.getElementById("yesbg").checked){
        document.getElementById("bg").disabled = false;
    } else if(document.getElementById("nobg").checked){
        document.getElementById("bg").disabled = true;
    }
}