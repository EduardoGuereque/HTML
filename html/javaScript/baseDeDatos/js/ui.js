const GridGatos = document.getElementById('GridGatos');

export function showBreeds(breeds){
    GridGatos.innerHTML = '';
    breeds.forEach(breed => {
        const cartas = document.createElement('div');
        cartas.classList.add('cartas');
        cartas.innerHTML = `
            <img src="${breed.image?.url || 'https://via.placeholder.com/150'}" alt="${breed.name}">
            <h3>${breed.name}</h3>
            <p>${breed.temperament || 'Temperamento no disponible'}</p>
            <a class="botonDetalles" href="detalles.html?id=${breed.reference_image_id}" target="_blank">Ver detalles</a>
        `;
        GridGatos.appendChild(cartas);
    });
}

export function actualizarPagina(paginaActual, conteoPaginas){
    document.getElementById('prevPage').disabled = paginaActual === 1;
    document.getElementById('nextPage').disabled = conteoPaginas <= paginaActual;

    const infoPagina = document.getElementById('infoPagina');
    if (conteoPaginas > 0) {
        infoPagina.textContent = `Página ${paginaActual} de ${conteoPaginas}`;
    } else {
        infoPagina.textContent = 'No hay resultados';
    }
}