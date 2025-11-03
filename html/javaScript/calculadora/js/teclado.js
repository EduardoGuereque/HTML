import { agregar, borrar, resultado } from './calculadora.js';

export function teclado() {
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
}
