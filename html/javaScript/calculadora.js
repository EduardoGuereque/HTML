function suma(a, b) {
    return a + b
}

function resta(a, b) {
    return a - b
}

function mult(a, b) {
    return a * b
}

function div(a, b) {
    if (b === 0)
    {
        console.log("Error: no se puede dividir entre cero")
    }
    return a / b
}

let op = prompt("Por favor, introduzca la operación deseada (1 - suma, 2 - resta, 3 - multiplicación, 4 - división): ")
let x = parseInt(prompt("Introduzca el primer valor: "))
let y = parseInt(prompt("Introduzca el segundo valor: "))
let resultado


if (op == 1) {
    resultado = suma(x, y)
} else if (op == 2) {
    resultado = resta(x, y)
} else if (op == 3) {
    resultado = mult(x, y)
} else if (op == 4) {
    resultado = div(x, y)
} else {
    console.log("Operación no válida")
}

console.log("El resultado es: " + resultado)
