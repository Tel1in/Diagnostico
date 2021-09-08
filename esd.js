function validadLogin(){
    var usuario = document.getElementById("nombre").value;
    var contra = document.getElementById("contraseña").value;

    if(usuario ="admin" && contra =="admin"){
        window.location.href="PaginaPrincipal.html";

    }else{
        alert("Error datos incorrectos");

    }
}


function factorial(numero){
    let  num=parseInt(numero);
    let  tabla=document.getElementById("tabla");
    for(let i=1;i<=num;i++){
        let res=res*i;
        
        let fila=tabla.insertRow(i - 1);
        let celda=fila.insertCell(0);
        celda.innerHTML=i+" " +res;
        }

    
}

