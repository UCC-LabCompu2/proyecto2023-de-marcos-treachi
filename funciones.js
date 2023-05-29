/**
 * Descripción de que hace la función
 * @method Nombre de la función
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */
let mostrarValor = (elementId, value) => {
    document.getElementById(elementId).textContent = value;
}

/**
 * Calcula la velocidad final y distancia final en la tabla en los segundos 0 a 9
 * @method calcular
 */

let calcular = () => {
    let vi, di, a, tabla, res, t, vf, df, filaV, filaD ,filas;
    di = parseFloat(document.getElementById("x0").value);
    vi = parseFloat(document.getElementById("v0").value);
    a = parseFloat(document.getElementById("a").value);

    if ((vi===0 && a===0) || (vi===0 && di===0) || (di===0 && a===0) || (vi===0 && di===0 && a===0)){
        alert("Solo 1 dato puede ser igual a 0.");
    }

    tabla = document.getElementById("resultados");
    res = tabla.getElementsByTagName("tbody")[0];
    filas = res.getElementsByTagName("tr");

    filaD = filas[0].getElementsByTagName("td");
    filaV = filas[1].getElementsByTagName("td");

    for (let i=0; i<=9; i++){
        t = i;

        df = di + (vi * t) + (0.5 * a * Math.pow(t, 2));
        vf = vi + (a*t);

        filaD[i].textContent = df.toFixed(2);
        filaV[i].textContent = vf.toFixed(2);
    }
}

