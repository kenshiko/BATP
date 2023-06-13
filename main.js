function contactar(){
    let respuesta= prompt("Estas seguro de querer contactarme?");
        if(respuesta == "si"){
            window.location.href = "contacto.html"
        } else if(respuesta == "no") {
            alert("jaja, que gracioso");
        } else {
            alert("Responda con si o no");
        }
};


function consultar(){
    alert("gracias por intentar contactarme! Esta funcion actualmente es de prueba y no me llegara el mensaje :c")
};



const cliente = document.getElementById("cliente");
cliente.addEventListener("click", miCliente);

function miCliente(){
    alert("Esta seccion aun esta en desarrollo ya que no tengo clientes T.T");
}

