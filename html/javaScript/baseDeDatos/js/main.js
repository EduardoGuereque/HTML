import { getBreeds } from './api.js';
import { showBreeds, actualizarPagina } from './ui.js';

let paginaActual = 1;
let limite = 5;
const limitePagina = document.getElementById('limitePagina');

async function cargarRazas(pagina) {
    limite = parseInt(limitePagina.value); 
    
    const datos = await getBreeds(pagina, limite);
    if (datos) {
        showBreeds(datos.breeds);
        actualizarPagina(paginaActual, datos.pageCount);
    }
}

document.getElementById('prevPage').addEventListener('click', () => {
    if (paginaActual > 1) {
        paginaActual--;
        cargarRazas(paginaActual);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    paginaActual++;
    cargarRazas(paginaActual);
});

limitePagina.addEventListener('change', () => {
    paginaActual = 1;
    cargarRazas(paginaActual);
});

window.addEventListener('DOMContentLoaded', () => {
    limitePagina.value = limite;
    cargarRazas(paginaActual, limite);
});