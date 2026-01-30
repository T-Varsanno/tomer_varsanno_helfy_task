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
        <div className="task-item">
            <span 
                className={task.completed ? "completed" : ""}
                onClick={() => setExpanded(!expanded)}
            >
                {task.title}
            </span>
            {expanded && (
        <div className="task-details">
          <div>{task.description}</div>
          <div>Priority: {task.priority}</div>
        </div>
      )}
            <button onClick={doToggle}>{task.completed ? "Undo" : "Complete"}</button>
            <button onClick={doDelete}>Delete</button>
        </div>
    )
}