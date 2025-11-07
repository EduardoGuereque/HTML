const options = {
    headers: {
        'x-api-key': 'live_B36G83x0WsncDAz1J9JFyQK6UMlbq3RIcXWjuaSUT3gXm7Izzrk4jlh9PN8P9MT2'
    }
}

function getPageCount(response) {
    const total = parseInt(response.headers.get('Pagination-Count'));
    const limit = parseInt(response.headers.get('Pagination-Limit'));
    return Math.ceil(total / limit);
}

export async function getBreeds(page, limit){
    const apiUrl = "https://api.thecatapi.com/v1/breeds";
    try {
        const response = await fetch(`${apiUrl}?limit=${limit}&page=${page - 1}`, options); 
        
        let pageCount = getPageCount(response);
        return {
            breeds: await response.json(),
            pageCount
        };
    }catch (error) {
        console.error('Error al obtener razas:', error);
    }
}

export async function obtenerDetallesImagen(imageId) {
    const apiUrl = `https://api.thecatapi.com/v1/images/${imageId}`;
    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error("Error " + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error('No se pudo obtner la informacion:', error);
    }
}