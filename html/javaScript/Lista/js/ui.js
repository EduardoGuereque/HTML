import { tareas, setTareas, agregarTarea, eliminarTarea, toggleTarea } from './tareas.js';
import { cargarTareas } from './lista.js';

const input = document.getElementById('taskInput');
const btn = document.getElementById('addTaskBtn');
const list = document.getElementById('taskList');

export function renderTareas() {
    list.innerHTML = '';
    tareas.forEach(tarea => {
        const li = document.createElement('li');
        li.id = tarea.id;
        if (tarea.terminada) li.classList.add('completed');

        li.innerHTML = `
            <input type="checkbox" ${tarea.terminada ? 'checked' : ''}>
            <span>${tarea.texto}</span>
            <button class="delete">X</button>
        `;

        li.querySelector('input').addEventListener('change', (e) => {
            toggleTarea(tarea.id, e.target.checked);
            renderTareas();
        });

        li.querySelector('.delete').addEventListener('click', () => {
            eliminarTarea(tarea.id);
            renderTareas();
        });

        list.appendChild(li);
    });
}

export function UI() {
    const guardadas = cargarTareas();
    setTareas(guardadas);
    renderTareas();

    btn.addEventListener('click', () => {
        if (input.value.trim() === '') return;
        agregarTarea(input.value);
        renderTareas();
        input.value = '';
    });

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && input.value.trim() !== '') {
            agregarTarea(input.value);
            renderTareas();
            input.value = '';
        }
    });
}
