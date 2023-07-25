/**
 * Muestra en pantalla el valor que se ingresa en la barra
 * @method mostrarValor
 * @param {string} id - Id del elemento input del HTML
 * @param {number} valor - Contiene el valor del input que ingreso el usuario en la barra
 */
let mostrarValor = (id, valor) => {
    document.getElementById(id).textContent = valor;
}

/**
 * Calcula velocidad y distancia final de 0 a 9 segundos, colocando resultados en la tabla
 * @method calcular
 */
let calcular = () => {
    let vi, di, a, tabla, res, t, vf, df, filaV, filaD, filas, i;

    di = parseFloat(document.getElementById("x0").value); //obtenemos el valor de la posición inicial ingresada
    vi = parseFloat(document.getElementById("v0").value); //obtenemos el valor de la velocidad inicial ingresada
    a = parseFloat(document.getElementById("a").value); //obtenemos el valor de la aceleración ingresada

    tabla = document.getElementById("tabla"); //obtenemos la tabla
    res = tabla.getElementsByTagName("tbody")[0]; //obtenemos todos los elementos del tbody de la tabla (los que contienen los resultados)
    filas = res.getElementsByTagName("tr"); //obtenemos todos los elementos tr (filas) del tbody

    filaD = filas[0].getElementsByTagName("td"); //le asigna a filaD las celdas(td) de la fila[0] (tr)
    filaV = filas[1].getElementsByTagName("td"); //le asigna a filaF las celdas(td) de la fila[1] (tr)

    if ((vi === 0 && a === 0) || (vi === 0 && di === 0) || (di === 0 && a === 0) || (vi === 0 && di === 0 && a === 0)) {
        alert("Solo 1 dato puede ser igual a 0.");
        reiniciar();
    } else {
        for (i = 0; i <= 9; i++) {//calcula los resultados de la tabla
            t = i;
            df = di + (vi * t) + (0.5 * a * Math.pow(t, 2));//fórmula distancia final
            vf = vi + (a * t);//fórmula velocidad final

            filaD[i].textContent = df.toFixed(2);//asignamos los valores y usamos toFixed() para mostrar solo 2 decimales
            filaV[i].textContent = vf.toFixed(2);
        }
        comenzarAnimacion();
    }
}

let x = 0; //variable global

/**
 * Hace que el auto se mueva a lo largo del canvas, teniendo en cuenta la velocidad inicial
 * @method animarImagen
 */
let animarImagen = () => {

    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d"); //accede a los tags 2d de canvas

    let vi, dx;
    vi = parseFloat(document.getElementById("v0").value);

    let img = new Image();
    img.src = "imagenes/autocanvas.png";

    img.onload = function () {
        canvas.width = canvas.width;//va borrando el canvas
        ctx.drawImage(img, x, 0);
    }

    if (vi >= 11.25) { //modifica velocidad de movimiento de la imagen según la velocidad inicial ingresada en el input
        dx = 2;
        x = x + dx;
    } else if ((vi >= 7.5) && (vi < 11.25)) {
        dx = 1.5;
        x = x + dx;
    } else if ((vi >= 3.5) && (vi < 7.5)) {
        dx = 1;
        x = x + dx;
    } else if (vi < 3.5) {
        dx = 0.5;
        x = x + dx;
    }

    console.log("la coordenada x es: " + x);
    if (x > 760) { //vuelve la animación al inicio
        x = 0;
    }
}

/**
 * Da inicio a la animación
 * @method comenzarAnimacion
 */
let comenzarAnimacion = () => {
    console.log("Comenzo la animacion");
    x = 0;//reinicia posición para que la imagen se mueva desde el origen
    intervalId = setInterval(animarImagen, 0);
    document.getElementById("botoncalc").disabled = true;
    setTimeout(detenerAuto, 1500);
}

/**
 * Detiene el movimiento de la imagen en el canvas
 * @method detenerAuto
 */
let detenerAuto = () => {
    console.log("Se detuvo el auto");
    clearInterval(intervalId); //cancela el intervalo
    document.getElementById("botoncalc").disabled = false;
}

/**
 * Coloca al inicio del canvas la imagen del auto al cargar la pagina
 * @method aparecerImagen
 */
let aparecerImagen = () => {
    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");

    let img = new Image();
    img.src = "imagenes/autocanvas.png";

    canvas.width = canvas.width;

    img.onload = function () {
        ctx.drawImage(img, 0, 0);
    }
}

/**
 * Resetea los inputs y la tabla al apretar el boton "REINICIAR"
 * @method reiniciar
 */

let reiniciar = () => {
    let filaD, filaV, tabla, res, filas;
    document.getElementById("x0").value = 0;
    document.getElementById("v0").value = 0;
    document.getElementById("a").value = 0;//reinicia la barra

    document.getElementById("valor_di").textContent = '0';
    document.getElementById("valor_vi").textContent = '0';
    document.getElementById("valor_a").textContent = '0';//borra el número del input

    tabla = document.getElementById("tabla");
    res = tabla.getElementsByTagName("tbody")[0];
    filas = res.getElementsByTagName("tr");

    filaD = filas[0].getElementsByTagName("td");
    filaV = filas[1].getElementsByTagName("td");

    for (let i = 0; i <= 9; i++) {
        filaD[i].textContent = ' ';
        filaV[i].textContent = ' ';//borra la tabla
    }
    aparecerImagen();
}