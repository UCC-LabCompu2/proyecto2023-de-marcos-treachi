/**
 * Descripción de que hace la función
 * @method Nombre de la función
 * @param {string} ParámetroA - Explicación de que valor almacena ParámetroA
 * @param {number} ParámetroB - Explicación de que valor almacena ParámetroB
 * @return Valor que retorna
 */

let posicion0 = () => {
    let re, v0, x0, a, t;
    t = Number(0);
    v0 = Number(document.operacionesMat.velocidadinicial.range);
    a = Number(document.operacionesMat.aceleracion.range);
    x0 = Number(document.operacionesMat.distanciainicial.range);
    re = x0 + (v0 * t) + (0.5 * a * (Math.pow(t, 2)));
    document.operacionesMat.total_d0.value = re + "m";
}

let sumar = () => {
    let re, s1, s2;
    s1 = Number(document.operacionesMat.sum_num1.value);
    s2 = Number(document.operacionesMat.sum_num2.value);
    re = s1 + s2;
    document.getElementById("totalS").innerHTML;
    document.operacionesMat.sum_total.value = re;
}

let calcular = () => {
    let vi, di, a, tabla, res, t, vf, df, fila, celdavf, celdadf;
    vi = Number(document.getElementById("v0").value);
    di = Number(document.getElementById("x0").value);
    a = Number(document.getElementById("a").value);

    res = document.getElementById("resultados");

    for (t=0; t<10; t++){
        df = di + (vi * t) + (0.5 * a * Math.pow(t, 2));
        vf = vi + (a*t);

        document.getElementById("d_total").innerHTML = df.toFixed(2);
        document.getElementById("v_total").innerHTML = vf.toFixed(2);
    }

}