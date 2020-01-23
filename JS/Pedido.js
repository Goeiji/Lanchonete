function pedido(){
    document.getElementById('code').value = Math.floor(Math.random()*100);
    
    var nome = document.getElementById('nome').value;
    var code = document.getElementById('code').value;
    var lanche = document.getElementById('lanche').value;
    var adicionais = "";
    var topping = "";
    var bebida = "";
    var bebidaGelada = "";
    var tipoBebida = "";
    var data = document.getElementById('dt').value;
    var observacao = document.getElementById('obs').value;


    if(document.getElementById('yesadd').checked){
        adicionais = document.getElementById('yesadd').value;
        if(document.getElementById('1').checked){
                topping = document.getElementById('1').value;
            }else if(document.getElementById('2').checked){
                topping = document.getElementById('2').value;
            }else if(document.getElementById('3').checked){
                topping = document.getElementById('3').value;
            }else if(document.getElementById('4').checked){
                topping = document.getElementById('4').value;
            }else if(document.getElementById('5').checked){
                topping = document.getElementById('5').value;
            }else if(document.getElementById('6').checked){
                topping = document.getElementById('6').value;
            }else if(document.getElementById('7').checked){
                topping = document.getElementById('7').value;
        }   
    }else if(document.getElementById('noadd').checked){
        adicionais = document.getElementById('noadd').value;
    }
    
    if(document.getElementById('yesbg').checked){
        bebida = document.getElementById('yesbg').value;
        if(document.getElementById('CC').selected){
            tipoBebida = document.getElementById('CC').value;
        }else if(document.getElementById('SP').selected){
            tipoBebida = document.getElementById('SP').value;
        }else if(document.getElementById('FL').selected){
            tipoBebida = document.getElementById('FL').value;
        }else if(document.getElementById('GU').selected){
            tipoBebida = document.getElementById('GU').value;
        }
    }else if(document.getElementById('nobg').checked){
        bebida = document.getElementById('nobg').value;
    }

    if(document.getElementById('gelada').checked){
        bebidaGelada = document.getElementById('gelada').value;
    }else if(document.getElementById('naogelada').checked){
        bebidaGelada = document.getElementById('naogelada').value;
    }
    
    var list = [nome, code, lanche, adicionais, topping, bebida, bebidaGelada,
    tipoBebida, data, observacao];

    var i;
    for(i in list){
        document.getElementById('texto').value += "\n" + list[i];
    }
}