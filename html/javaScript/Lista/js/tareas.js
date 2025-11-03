import { guardarTareas } from './lista.js';

export let tareas = [];

export function setTareas(nuevasTareas) {
    tareas = nuevasTareas;
}

export function agregarTarea(texto) {
    const nuevaTarea = {
        id: Date.now(),
        texto: texto.trim(),
        terminada: false
    };
    tareas.push(nuevaTarea);
    guardarTareas(tareas);
}

export function eliminarTarea(id) {
    tareas = tareas.filter(t => t.id !== id);
    guardarTareas(tareas);
}

export function toggleTarea(id, terminada) {
    const tarea = tareas.find(t => t.id == id);
    if (tarea) tarea.terminada = terminada;
    guardarTareas(tareas);
}
