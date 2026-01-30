import {useState} from 'react';
import { deleteTask,toggleComplete } from '../services/api';

export default function TaskItem({task, onChange}) {
    const [expanded, setExpanded] = useState(false);

    async function doToggle() {
        try{
            await toggleComplete(task.id);
            onChange();
        } 
        catch(err){
            alert(err.message);
        }
    }
    async function doDelete() {
        try{
            await deleteTask(task.id);
            onChange();
        } 
        catch(err){
            alert(err.message);
        }
    }
    return (
       <div className={`task-item ${task.completed ? 'completed-task' : 'pending-task'} ${expanded ? 'expanded' : ''}`}>
  
  <div 
    className="task-content"
        onClick={() => setExpanded(!expanded)}
    >
        <div className="task-title">
        {task.title}
        </div>

        {expanded && (
        <div className="task-details">
            <div>{task.description}</div>
            <div>Priority: {task.priority}</div>
        </div>
        )}
    </div>

    <div className="task-actions">
        <button onClick={doToggle}>
        {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={doDelete}>Delete</button>
    </div>

    </div>
    )
}