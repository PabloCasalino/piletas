window.addEventListener('load', function() {

    document.getElementById('nombre').value = localStorage.getItem('nombre');
    document.getElementById('apellido').value =localStorage.getItem('apellido');
    document.getElementById('telefono').value = localStorage.getItem('telefono');
    document.getElementById('barrio').value = localStorage.getItem('barrio');
    document.getElementById('fecha').value = localStorage.getItem('fecha');
    document.getElementById('vendedor').value = localStorage.getItem('vendedor');
    document.getElementById('email').value = localStorage.getItem('email');
    
});

