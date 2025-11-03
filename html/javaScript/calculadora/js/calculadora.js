import { agregarHistorial } from './historial.js';

export function agregar(value) {
    document.getElementById("calc").value += value;
}

export function borrar() {
    document.getElementById("calc").value = "";
}

export function resultado() {
    const expresion = document.getElementById("calc").value;

    try {
        const resultadoFinal = eval(expresion);
        document.getElementById("calc").value = resultadoFinal;
        agregarHistorial(expresion, resultadoFinal);
    } catch (error) {
        document.getElementById("calc").value = "ERROR 53";
    }
}
