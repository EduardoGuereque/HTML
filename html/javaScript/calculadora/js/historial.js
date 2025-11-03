const operaciones = document.getElementById("historial");

export function agregarHistorial(expression, result) {
    const li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    operaciones.appendChild(li);
}
