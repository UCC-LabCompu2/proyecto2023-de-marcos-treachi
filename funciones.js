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
    let vi, di, a, tabla, res, t, vf, df, filaV, filaD, filas;

    di = parseFloat(document.getElementById("x0").value);
    vi = parseFloat(document.getElementById("v0").value);
    a = parseFloat(document.getElementById("a").value);

    if ((vi === 0 && a === 0) || (vi === 0 && di === 0) || (di === 0 && a === 0) || (vi === 0 && di === 0 && a === 0)) {
        alert("Solo 1 dato puede ser igual a 0.");
    }

    tabla = document.getElementById("tabla"); //le asigna a tabla el id de la etiqueta table
    res = tabla.getElementsByTagName("tbody")[0];
    filas = res.getElementsByTagName("tr");

    filaD = filas[0].getElementsByTagName("td"); //le asigna a filaD las celdas(td) de la fila[0] (tr)
    filaV = filas[1].getElementsByTagName("td"); //le asigna a filaF las celdas(td) de la fila[1] (tr)

    for (let i = 0; i <= 9; i++) {
        t = i;
        df = di + (vi * t) + (0.5 * a * Math.pow(t, 2));//formula distancia final
        vf = vi + (a * t);//formula velocidad final

        filaD[i].textContent = df.toFixed(2);//toFixed() para mostrar solo 2 decimales
        filaV[i].textContent = vf.toFixed(2);
    }
}

/**
 * Hace que el auto se mueva a lo largo del canvas, teniendo en cuenta la velocidad inicial
 * @method animarImagen
 */

var x = 0; //variable global
let animarImagen = () => {

    const canvas = document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");

    let vi, dx;
    vi = parseFloat(document.getElementById("v0").value);

    let img = new Image();
    img.src = "imagenes/autocanvas.png";

    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 0);
    }

    if (vi >= 11.25) { //aumenta velocidad de movimiento segun la velocidad inicial ingresada en el input
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
    if (x > 750) { //vuelve la animacion al inicio
        x = 0;
    }
}

/**
 * Detiene el movimiento de la imagen en el canvas
 * @method detenerAuto
 */
let detenerAuto = () => {
    console.log("Se detuvo el auto");
    clearInterval(intervalId); // Detener la animación
}

/**
 * Da inicio a la animacion
 * @method comenzarAnimacion
 */
let comenzarAnimacion = () => {
    console.log("Comenzo la animacion");
    intervalId = setInterval(animarImagen, 0);
    setTimeout(detenerAuto, 1500);
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

    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 0);
    }
}