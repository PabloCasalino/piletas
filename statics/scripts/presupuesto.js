window.addEventListener('load', function() {
    const name = localStorage.getItem('nombre');
    if (name) {
        document.getElementById('nombre').textContent = nombre;
    }
});