export default function TaskFilter({value, onChange}) {
    return (
        <div className="task-filter">
            <button 
                onClick={() => onChange('all')}
                disabled={value === 'all'}
            >
                All
            </button>

            <button
                onClick={() => onChange('completed')}
                disabled={value === 'completed'}
            >
                Completed
            </button>

            <button
                onClick={() => onChange('pending')}
                disabled={value === 'pending'}
            >
                Pending
            </button>
        </div>
    );
}