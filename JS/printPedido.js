function printPedido() {
    var pedido = document.getElementById('texto').value;
    var imprimir = window.open();
    
    imprimir.document.write(pedido);
}