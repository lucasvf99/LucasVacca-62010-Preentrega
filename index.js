///obtener datos del usuario
//let nombreUsuario = prompt("¿Como se llama? ")
// let edadUsuario = prompt("¿Cuantos años tiene?")

// while(edadUsuario <18 ){
//         alert("Eres menor y no podemos avanzar ")
//         break;
// }

const productosCapo = ["Tarrinas", "Batidos", "Smooties", "Cafe", "Tartas", "Granizadas", "Sanguches" ]
console.log(productosCapo)

alert("Estos son nuestros productos: "+("\n") + productosCapo.join("\n"))

//array del usuario 
let changoUsuario = []

//compra

function compra (elemento){
    let estaOno = productosCapo.includes(elemento)
     if (estaOno ){
        changoUsuario.push(elemento)
        alert("Compra realizada ")
    }else if (estaOno != productosCapo.length)  {
        alert("El producto seleccionado no existe ")
    }

}
//funcion si esta en el chango del usuario o no 

const igualarProducto = (producto) =>{
    let estaOno = changoUsuario.includes(producto)
    if (estaOno ){
        alert("El producto ya esta en el changuito")
    }else{
        compra(producto)
    }
}

//segunda compra 

function otraCompra (bandera) {
    let pararCompra = bandera
       while( pararCompra != "no" ){
        
            if(pararCompra == "no"){
                alert("Prosigamos...")
                break;
            }else{
                let segundaCompra = prompt("¿Que producto deseas agregar?")
                igualarProducto(segundaCompra)
                pararCompra = prompt("Quiere comprar algo mas ? si o no para continuar ")
            }
            
       }

}

//logica cambio de producto 

function logicaProducto (producto ){
    let estaOno = productosCapo.includes(producto)
    let productoCambiado = changoUsuario.indexOf(producto)
    let eleccionProductoCambio = changoUsuario[productoCambiado]
    let productoNuevo = prompt("Escriba el nuevo producto ")
    let esta = productosCapo.includes(productoNuevo)
    if(esta ){    
        changoUsuario[productoCambiado]= productoNuevo
        alert ("Ahora "+ eleccionProductoCambio + " es "+ productoNuevo )
       // pararCiclo = prompt("¿Desea cambiar otro producto? Si o No para continuar")

}else{
  alert("Este producto no es correcto intentelo de nuevo  ")
  

}
}
//funcion para cambio de producto si esta o no 

const estaoNo = (producto) =>{
    let estaOno = changoUsuario.includes(producto)
    if(estaOno){
        logicaProducto(producto)
    }else{
        alert("El producto seleccionado no existe ")
    }
}

// cambio producto 

const cambioProducto = (bandera) =>{
        if(bandera == "si"){
            let pararCiclo= "si"
            while(pararCiclo != "no" ){
            let preguntaProductoCambio = prompt("¿Que producto quiere cambiar?")
            estaoNo(preguntaProductoCambio)
            pararCiclo = prompt("¿Desea cambiar otro producto? Si o no para continuar")
        }
        }else{
            alert("Queda poco para terminar :)")
            
        }
       
      }
      
/////// eliminar un producto 

const verificacionFinal = (producto) =>{
    let estaOno = changoUsuario.includes(producto)
    if(estaOno){
        let eliminarPorducto = changoUsuario.indexOf(producto)
        changoUsuario.splice(eliminarPorducto,1)
        alert("producto eliminado ")
        
    }else{
        alert("El producto seleccionado no existe ")
    }
}



const eliminarProducto = (bandera) =>{

    let pararCiclo= "si"
    while(pararCiclo != "no" ){
        if(bandera){

            let eleccionProductoEliminar = prompt("Que producto desea eliminar?")
            verificacionFinal(eleccionProductoEliminar)
            pararCiclo = prompt("Desea eliminar otro producto?  ")

    }else{
        alert("Gracias por su compra")
        break;
        
    }
     
    }

}



/////// funcion  pregunta si quiere comprar  FUNCION PRINCIPAL ////////////////
let confirmaCompra = confirm("¿Desea comprar algunos de estos productos?")
let  preguntaCompra = (confirmacion)=>{

        if(confirmacion){

                alert("Perfecto, prosigamos ...")
                let eleccionCompra = prompt("¿Que producto desea comprar?")
                compra(eleccionCompra)
                let otrasCompras = prompt("¿Quiere comprar algo mas ? si para continuar no para cerrar compra ")
                otraCompra(otrasCompras)
                let preguntaCambioProducto = prompt("¿Desesa cambiar algun producto ? si o no  ")
                cambioProducto(preguntaCambioProducto)
                let preguntaEliminarProducto = confirm("¿Desea eliminar algun producto?")
                eliminarProducto(preguntaEliminarProducto)


        }else{
             
            alert("Oh que pena, muchas gracias de todos modos")
        }

}

preguntaCompra(confirmaCompra)



console.log(changoUsuario)

alert("Su compra a sido exitosa: "+  "\n" + changoUsuario +  "\n")
