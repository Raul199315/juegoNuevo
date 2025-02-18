let numeroSecreto = 0;
let numeroMaximo = 0;
let intento = 0;
let nivelDificultad = 0;
//let lista = [];
//console.log(numeroSecreto);


/*
function generarNumero(){
    let numero = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numero)
    console.log(lista)
    //si el numero generado esta en la lista
    if(lista.length == numeroMaximo){
        textos('h1',"ya se sortearon todos los numeros")
    }else{
    if(lista.includes(numero)){
        return generarNumero()
    }else{
        lista.push(numero)
        numeroSecreto = numero
        return numero;
    }
}
    
}
*/

function generarNumero(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado)
    numeroSecreto = numeroGenerado
    console.log(numeroSecreto)
    return numeroGenerado;
}

function validaIntento(){
    let numeroUsuario = document.querySelector('input').value;
    if(nivelDificultad > intento){
        if(numeroUsuario == numeroSecreto){
            textos('h1',`LO ADIVINASTE`);
            textos('p',`Adivinaste el numero secreto lo lograste en ${intento} intentos`);
            limpiarCaja();
            generarNumero();
            borrarFalla()
            intento = '';
            document.querySelector('#botonIntento').setAttribute('disabled','true')
            
        }else{
            if(numeroUsuario > numeroSecreto){
                falla()
                textos('h1',``);
                textos('p',`el numero es menor`);
                intento++
                textos('h3',`te quedan ${intento} intentos`)
                limpiarCaja()
            }else{
                falla()
                textos('h1',``);
                textos('p',`el numero es mayor`);
                intento++
                textos('h3',`${intento} de ${nivelDificultad} intentos`)
                limpiarCaja()
            }
        }
    }else{
        textos('h1','Fin Del Juego')
        textos('p','usaste el numero maximo de intentos posibles')
        document.querySelector('#botonIntento').setAttribute('disabled','true')
        textos('h3','');
        borrarFalla()
        document.querySelector('input').value = '';
        
    }
    
}



function textos(tag,tx){
    let texto= document.querySelector(tag)
    texto.innerHTML = tx

}

function nuevoJuego(){
generarNumero()
intento = '';
limpiarCaja()
textos('h1',`Bienvenido al  Juego Adivina el numero Secreto`);
textos('p','para jugar seleccina una dificultad')

borrarFalla()

}



function dificultad(){
    let nivel = document.querySelector('select').value;
    numeroMaximo = nivel
    if(nivel == 2){
        nivelDificultad =2
        textos('p',`para jugar ingresa un numero entre 1 y ${numeroMaximo} tienes ${nivelDificultad} intentos` );
        document.getElementById('botonIntento').removeAttribute('disabled');
        textos('h3',``);
        generarNumero()
    }else{
        if(nivel == 3){
            nivelDificultad =3
            textos('p',`para jugar ingresa un numero entre 1 y ${numeroMaximo} tienes ${nivelDificultad} intentos` );
            document.getElementById('botonIntento').removeAttribute('disabled');
            textos('h3',``);
            generarNumero()
        }else{
            nivelDificultad =4
            textos('p',`para jugar ingresa un numero entre 1 y ${numeroMaximo} tienes ${nivelDificultad} intentos` );
            document.getElementById('botonIntento').removeAttribute('disabled');
            textos('h3',``);
            generarNumero()
        }
    }
    borrarFalla()

}
function limpiarCaja(){
    document.querySelector('#numeroIngresado').value ='';
}


generarNumero();
textos('h1',`Bienvenido al  Juego Adivina el numero Secreto`);
textos('p','para jugar seleccina una dificultad')
console.log(intento);
/*
function numSecreto(){
    if(){
    }else
}
    */


/// funcion de catura de datos del input
function datosJugador(name){
    let usuario = document.getElementById('nombreUsuario').value;
    let datos = document.querySelector('#datosU').value;
    usuario.innerHTML = "datos"

}
function falla(){
    let colorRojo = document.getElementById('rojo')
    colorRojo.innerHTML = "FALLASTE"
}
function borrarFalla(){
    let colorRojo = document.getElementById('rojo')
    colorRojo.innerHTML = ""
}