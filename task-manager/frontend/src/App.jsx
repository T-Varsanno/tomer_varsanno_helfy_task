import { useEffect, useState } from 'react';
import { getAllTasks } from './services/api';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  async function getTasks() {
    const data = await getAllTasks();
    setTasks(data);
  }

  useEffect(() => {
    getTasks();
  }, []);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div >
      <h1>Task Manager</h1>

      <TaskForm onCreated={getTasks} />

      <TaskFilter value={filter} onChange={setFilter} />

      <TaskList tasks={filteredTasks} onChange={getTasks} />
    </div>
  );
}