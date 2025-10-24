const operaciones = document.getElementById("historial");

function agregar(value) {
    document.getElementById("calc").value += value;
}

function borrar() {
    document.getElementById("calc").value = "";
}

function resultado() {
    const expresion = document.getElementById("calc").value;

    try {
        const resultadoFinal = eval(expresion);
        document.getElementById("calc").value = resultadoFinal;
        agregarhistorial(expresion, resultadoFinal);

    } catch (error) {
        document.getElementById("calc").value = "ERROR 53";
    }
}

function agregarhistorial(expression, result) {
    const li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    operaciones.appendChild(li);
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9\.\+\-\*\/]/.test(key)) {
        event.preventDefault();
        agregar(key);
    }
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        resultado();
    }
    else if (key === 'Escape' || key.toLowerCase() === 'c') {
        event.preventDefault();
        borrar();
    }
});