import TaskItem from './TaskItem';

export default function TaskList({tasks, onChange}) {
    return (
        <div className="task-list">
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onChange={onChange} />
            ))}
        </div>
    );
}