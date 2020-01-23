function pdf() {
    var texto = document.getElementById('texto').value;
    var doc = new jsPDF();
    doc.text(20,20,texto);
    doc.save("Pedido.pdf");
    
}