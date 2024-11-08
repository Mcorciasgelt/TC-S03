

const jugada = document.querySelectorAll(".boton-jugada"); //recoge todos los botones

//Variables para ir sumando los puntos de usuario o maquina
let contadorUsuario = 0;
let contadorMaquina = 0;

//Con esto identificamos mas fácilmente los id de contador usuario y contador o
const puntosUsuario = document.getElementById("contador-usuario");
const puntosMaquina = document.getElementById("contador-ordenador");

//función para hacer el aleatorio del ordenador
function jugadaAleatoria() {
    const opciones = ["piedra", "papel", "tijera"]; ///se definen las opciones
    aleat = Math.random() * opciones.length; ///math.random sirve para sacar un número entre 0 y 0.9999 , al * por el length nos dará un valor correspondientes a los index del array [0,1,2,3,....]
    aleat = Math.floor(aleat) ///math.floor nos redondea para abajo
    return opciones[aleat] ///la función devuelve el contenido de ese index del array
}


//código para sacar qué botón presionó el usuario.
//forEach recorre todos los resultados de jugada que definimos más arriba de la clase "boton-jagada"
jugada.forEach(function(boton){

    boton.addEventListener("click", function(event){ //ya que arriba lo llamamos boton, entonces para cada resultado de boton (lo podríamos llamar como queramos) del evento click, ejecuta esto 

        const jugadaUsuario = event.target.getAttribute("data-jugada"); //aquí el event.target identifica el botón que se priosonó (me lia explicarlo, lo entendí al hacerlo)
        const jugadaOrdenador = jugadaAleatoria(); //hacemos una llamada a la función para obtener un aleatorio
        const resultadoTexto = document.getElementById("jugadaActual");
        const resultadoGanador = document.getElementById("ganador")
        const zonaResultados = document.getElementById("resultados")
        const zonaContadores = document.querySelector(".contadores")

        let mensajeResultado = `Tu jugada: ${jugadaUsuario} 
         Jugada del ordenador: ${jugadaOrdenador}` //encontré esto que me moló porque en esta variable los resultados de cada uno y luego más abajo con los += agrega el caso en concreto y luego más abajo se muestra en el DIV que nos piden el resultado final

        let mensajeGanador = ""

        //borramos el estilo que tenga para que se muestre el correspondiente al condicional
        zonaResultados.classList.remove("estilo-empate", "estilo-ganador", "estilo-perdedor")
        zonaContadores.classList.remove("estilo-empate", "estilo-ganador", "estilo-perdedor")

        //empezamos las comparaciones para saber quien ganó
        if (jugadaUsuario === jugadaOrdenador) {
            mensajeGanador += " Has empatado 😐";
            zonaResultados.classList.add("estilo-empate") 

        }

        else if (
                jugadaUsuario == "piedra" && jugadaOrdenador == "tijera" ||
                jugadaUsuario == "tijera" && jugadaOrdenador == "papel"||
                jugadaUsuario == "papel" && jugadaOrdenador == "piedra"){

                    mensajeGanador +=  " Has GANADO 😄";
                    contadorUsuario++;//Aumenta el contador del usuario
                    zonaResultados.classList.add("estilo-ganador")
        }

        else {
            mensajeGanador +=  " Has PERDIDO ☹️";
            contadorMaquina++;//Aumenta el contador de la maquina
            zonaResultados.classList.add("estilo-perdedor")
        }

        //condicional para pintar el div donde están los contadores
        if (contadorUsuario > contadorMaquina) {
            zonaContadores.classList.add("estilo-ganador")
        }

        else if (contadorMaquina > contadorUsuario) {
            zonaContadores.classList.add("estilo-perdedor")
        }

        else {
            zonaContadores.classList.add("estilo-empate")
        }

        resultadoTexto.innerText = mensajeResultado;
        resultadoGanador.textContent = mensajeGanador;
        puntosUsuario.innerHTML = `Tus puntos: ${contadorUsuario}`;//Actualiza los contadores en el HTML de contador-usuario
        puntosMaquina.innerHTML = `Puntos de la máquina: ${contadorMaquina}`;//Actualiza los contadores en el HTML de contador-maquina
    })
});

