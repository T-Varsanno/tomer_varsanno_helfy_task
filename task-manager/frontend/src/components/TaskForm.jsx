import { useState } from 'react';
import { createTask } from '../services/api';

export default function TaskForm({onCreated }){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('medium');

    async function submit(e){
        e.preventDefault();
        if(title==='' || description===''){
            alert('Must add title and description');
            return;
        }
        try{
            await createTask({
                title,
                description, 
                priority
            });
            //reseting the form
            setTitle('');
            setDescription('');
            setPriority('medium');  

            onCreated();

        } catch(err){
            alert(err.message);
        }
       
    }
  return (
    <form onSubmit={submit} className="task-form">
      <input
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}