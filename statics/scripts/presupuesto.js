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


const data = {
    "piletas":[
        {
            "familia": "RECTA HÚMEDA",
            "modelo":"MRH505",
            "medidas": "5 X 2,65 X 1X3",
            "precio":""
        },
        {
            "familia": "RECTA HÚMEDA",
            "modelo":"MRH605",
            "medidas": "6 X 3 X 1.35",
            "precio":""
        },
        {
            "familia": "RECTA HÚMEDA",
            "modelo":"MRH705",
            "medidas": "7 X 3,45 X 1,35",
            "precio":""
        },
        {
            "familia": "RECTA HÚMEDA",
            "modelo":"MRH805",
            "medidas": "8 X 3,45 X 1,35",
            "precio":""
        },
        {
            "familia": "RECTA",
            "modelo":"MRC400",
            "medidas": "4 X 2,25 X 1,22 ",
            "precio":""
        },
        {
            "familia": "RECTA",
            "modelo":"MR5C00",
            "medidas": "5 X 2,65 X 1,3",
            "precio":""
        },
        {
            "familia": "RECTA",
            "modelo":"MR6C00",
            "medidas": "6 X 3 X 1,35",
            "precio":""
        },
        {
            "familia": "RECTA",
            "modelo":"MR7C00",
            "medidas": "7 X 3,45 X 1,35",
            "precio":""
        },
        {
            "familia": "RECTA",
            "modelo":"MR8C00",
            "medidas": "8 X 3,45 X 1,35",
            "precio":""
        },
        {
            "familia": "RECTA",
            "modelo":"MRC900",
            "medidas": "9 X 3,8 X 1,4",
            "precio":""
        },
        {
            "familia": "ARCO ROMANO",
            "modelo":"MAR650",
            "medidas": "6,5 X 3 X 1,35",
            "precio":""
        },
        {
            "familia": "ARCO ROMANO",
            "modelo":"MAR750",
            "medidas": "7,5 X 3,45 X 1,35",
            "precio":""
        },
        {
            "familia": "ARCO ROMANO",
            "modelo":"MAR850",
            "medidas": "8,5 X 3,45 X 1,35",
            "precio":""
        },
        {
            "familia": "ARCO ROMANO",
            "modelo":"MAR950",
            "medidas": "9,5 X 3,8 X 1,4",
            "precio":""
        },
        {
            "familia": "DOBLE BANCO",
            "modelo": "DB360",
            "medidas": "3,6 X 2,00 X 0,90",
            "precio":"2.341.326"
        },
        {
            "familia": "DOBLE BANCO",
            "modelo":"DB385",
            "medidas": "3,90 X 2,10 X 1,00",
            "precio":"2.356.649"
        },   
        {
            "familia": "BANCO ESCALERA",
            "modelo":"BE385",
            "medidas": "390 X 2,25 X 1,00",
            "precio":"2.415.134"
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo":"BE390",
            "medidas": "3,90 X 2,25 X 1X3",
            "precio":"2.523.221"
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo":"BE490",
            "medidas": "4,90 X 2,60 X 1,3",
            "precio":"3.082.501"
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo":"BE590",
            "medidas": "5,85 X 2,8 X 1,4",
            "precio":""
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo":"BE680",
            "medidas": "6,8 X 3,25 X 1,4",
            "precio":""
        },
        {
            "familia": "BANCO ESCALERA",
            "modelo":"BE780",
            "medidas": "7,8 X 3,8 X 1,4",
            "precio":""
        },
        {
            "familia": "SOLARIUM HÚMEDO",
            "modelo":"MSH585",
            "medidas": "5,85 X 2,8 X 1,4",
            "precio":""
        },
        {
            "familia": "SOLARIUM HÚMEDO",
            "modelo":"MSH675",
            "medidas": "6,8 X 3,25 X 1,4",
            "precio":""
        },
        {
            "familia": "SOLARIUM HÚMEDO",
            "modelo":"MSH775",
            "medidas": "7,8 X 3,8 X 1,4",
            "precio":""
        },
        {
            "familia": "SPA",
            "modelo":"MSP200",
            "medidas": "2,18 X 2,18 X 0,90",
            "precio":""
        }
    ]
    
    }
    
    let modelo = data.piletas.find(pileta => pileta.modelo === "BE390")

    if (modelo){
        alert(modelo.medidas)
    }else{
        alert('El modelo no se encuentra')
    }