    document.getElementById('formulario').addEventListener('submit',function(e){
        e.preventDefault();

        let nombre = document.getElementById('nombre').value;
        let apellido = document.getElementById('apellido').value;
        let telefono = document.getElementById('telefono').value;
        let barrio = document.getElementById('barrio').value;
        let fecha = document.getElementById('fecha').value;
        let vendedor = document.getElementById('vendedor').value;
        let email = document.getElementById('email').value;

        localStorage.setItem('nombre',nombre);
        localStorage.setItem('apellido',apellido);
        localStorage.setItem('telefono',telefono);
        localStorage.setItem('barrio',barrio);
        localStorage.setItem('fecha',fecha);
        localStorage.setItem('vendedor',vendedor);
        localStorage.setItem('email',email);
        
        window.location.href = 'presupuesto.html';

    });

