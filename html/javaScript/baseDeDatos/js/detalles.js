import { obtenerDetallesImagen } from "./api.js";

const contenedorDetalles = document.getElementById('contenedorDetalles');

async function cargarDetallesGato(idImagen) {

    const datos = await obtenerDetallesImagen(idImagen);

    const raza = datos.breeds[0];
    const urlImagen = datos.url;

    mostrarDetalles(raza, urlImagen);
}

function mostrarDetalles(raza, urlImagen) {
    contenedorDetalles.innerHTML = `
        <div class="cat-details">
            <img src="${urlImagen}" alt="Foto de ${raza.name}">
            <div>
                <h1>${raza.name}</h1>
                <p><strong>Descripción:</strong> ${raza.description || 'No disponible.'}</p>
                <p><strong>Temperamento:</strong> ${raza.temperament || 'No disponible.'}</p>
                <p><strong>Origen:</strong> ${raza.origin || 'No disponible.'}</p>
                <p><strong>Esperanza de vida:</strong> ${raza.life_span || 'No disponible.'} años</p>
                <a href="${raza.wikipedia_url || '#'}" target="_blank">Más información en Wikipedia</a>
            </div>
        </div>
        <a href="index.html" class="botonDetalles" style="margin-top: 20px;">Volver al listado</a>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const idImagen = new URLSearchParams(window.location.search).get('id');
    cargarDetallesGato(idImagen);
});