const BASE = 'http://localhost:4000/api/tasks';

export async function getAllTasks() {
    const resp= await fetch(BASE);
    if(!resp.ok){
        throw new Error('Failed fetching tasks');
    }
    return resp.json();
}

export async function createTask(task) {
    const resp= await fetch(BASE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });
    if(!resp.ok){
        throw new Error('Failed creating task');
    }    
    return resp.json(); 
}

export async function updateTask(task) {
    const resp= await fetch(`${BASE}/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
    });     
    if(!resp.ok){
        throw new Error('Failed updating task');
    }
    return resp.json();
}

export async function deleteTask(taskId) {
    const resp= await fetch(`${BASE}/${taskId}`, {
        method: 'DELETE',
    });
    if(!resp.ok){
        throw new Error('Failed deleting task');
    }
}

export async function toggleComplete(taskId) {
    const resp= await fetch(`${BASE}/${taskId}/toggle`, {
        method: 'PATCH',
    });
    if(!resp.ok){
        throw new Error('Failed toggling complete');
    }
    return resp.json();
}