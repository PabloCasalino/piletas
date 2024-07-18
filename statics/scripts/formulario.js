function generarPresupuesto(){

    document.getElementById('formulario').addEventListener('submit',function(e){
        e.preventDefault();
        const name = document.getElementById('nombre').value;
        localStorage.setItem('nombre',name)
        window.location.href='presupuesto.html'
    })

    
}