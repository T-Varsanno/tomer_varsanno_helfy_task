import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";

const mod = (x, m) => {     // works for negative and positive
    if (x < 0) {
        return ((x + m) % m);
    }
    return x % m;
};

export default function TaskList({ tasks, onChange }) {
  const n = tasks.length;
  const [current, setCurrent] = useState(0);

  // Keep current valid when tasks length changes (filter/delete)
  useEffect(() => {
    if (n === 0) {
      setCurrent(0);
    } else {
      setCurrent((c) => mod(c, n));
    }
  }, [n]);

  const visibleTasks = (() => {
    if (n === 0) return [];
    if (n <= 3) return tasks;

    const currid = mod(current , n);
    const nextid = mod(current+1, n);
    const next2id = mod(current + 2, n);

    return [tasks[currid], tasks[nextid], tasks[next2id]];
  })();

  const next = () => {
    if (n === 0) return;
    setCurrent((c) => c + 1); // wrap happens via mod when rendering
  };

  const prev = () => {
    if (n === 0) return;
    setCurrent((c) => c - 1);
  };

  if (n === 0) {
    return <div className="task-list">No tasks</div>;
  }

  return (
    <div className="task-list">
      <div className="carousel-header">
        <button onClick={prev}>Prev</button>

        <button onClick={next}>Next</button>
      </div>

      <div className="carousel-viewport">
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} onChange={onChange} />
        ))}
      </div>
    </div>
  );
}
