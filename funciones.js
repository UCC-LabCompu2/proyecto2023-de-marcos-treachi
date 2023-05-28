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
