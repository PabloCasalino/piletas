function loadUser(){
    const user = localStorage.getItem('user')
    if (user){
        document.getElementById('user').value = user;
    }

    const password = localStorage.getItem('password');
    if (password){
        document.getElementById('password').value = password
    }

}
window.onload = loadUser;

function enviar(){
    // Alojar usuario en localStorage
    const user = document.getElementById('user').value;
    localStorage.setItem('user',user)
    // Alojar la contraseña en localStorage
    const password = document.getElementById('password').value;
    localStorage.setItem('password', password);

    validarUsuario(user, password)
}

function validarUsuario(user, password){
    if (user == 'admin' && password == 'admin'){
        alert('Bienvenido ' + user)
    }else{
        alert('Usuario y contraseña inválido')
        borrar()
    }
}
function borrar(){
    document.querySelector('form').reset()
}

