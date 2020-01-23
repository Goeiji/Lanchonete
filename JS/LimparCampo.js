function limpar(){
    document.getElementById('nome').value="";

    document.getElementById('code').value="";
    
    document.getElementById('lanche').value="";
    
    if( document.getElementById('yesadd').checked){
        document.getElementById('yesadd').checked=false;
        document.getElementById('1').checked=false;
        document.getElementById('2').checked=false;
        document.getElementById('3').checked=false;
        document.getElementById('4').checked=false;
        document.getElementById('5').checked=false;
        document.getElementById('6').checked=false;
        document.getElementById('7').checked=false;
        document.getElementById('molho').style.display = 'none';
    } else if(document.getElementById('noadd').checked){
        document.getElementById('noadd').checked=false;
        document.getElementById('1').checked=false;
        document.getElementById('2').checked=false;
        document.getElementById('3').checked=false;
        document.getElementById('4').checked=false;
        document.getElementById('5').checked=false;
        document.getElementById('6').checked=false;
        document.getElementById('7').checked=false;
    }

    if(document.getElementById("yesbg").checked){
        document.getElementById("yesbg").checked = false;
        document.getElementById("gelada").checked = false;
        document.getElementById("naogelada").checked = false;
    } else if(document.getElementById("nobg").checked){
        document.getElementById("nobg").checked = false;
        document.getElementById("gelada").checked = false;
        document.getElementById("naogelada").checked = false;
    }

}