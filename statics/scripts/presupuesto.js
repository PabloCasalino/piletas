window.addEventListener('load', function() {
    // Rellenar los campos del formulario
    document.getElementById("nombre").value = localStorage.getItem("nombre");
    document.getElementById('telefono').value = localStorage.getItem('telefono');
    document.getElementById('barrio').value = localStorage.getItem('barrio');
    document.getElementById('fecha').value = localStorage.getItem('fecha');
    document.getElementById('vendedor').value = localStorage.getItem('vendedor');
    document.getElementById('email').value = localStorage.getItem('email');

 
    var modeloValor = localStorage.getItem('modelo_select');
    

    var modeloSpan = document.getElementById('modelo_presupuesto');
    if (modeloSpan) {
        modeloSpan.textContent = modeloValor;
    } else {
        console.error('Elemento con ID "modelo_presupuesto" no encontrado.');
    }
});
