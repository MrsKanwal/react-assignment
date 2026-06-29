// Task 9: To-Do List App
import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      setError('Please enter a task! Task cannot be empty.');
      return;
    }
    onAddTask(text);
    setText('');
    setError('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '5px' }}>
        <input
          type="text"
          placeholder="Enter a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{ padding: '8px', flex: 1 }}
        />
        <button type="submit" style={{ padding: '8px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add
        </button>
      </form>
      {error && <p style={{ color: 'red', fontSize: '14px', margin: '5px 0' }}>{error}</p>}
    </div>
  );
}

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px', borderBottom: '1px solid #eee' }}>
      <span
        onClick={() => onToggle(task.id)}
        style={{
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? '#888' : '#000',
          cursor: 'pointer',
          flex: 1
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        style={{ backgroundColor: '#ff4d4d', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px', cursor: 'pointer' }}
      >
        Delete
      </button>
    </li>
  );
}

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Buy groceries', completed: false },
    { id: 2, text: 'Finish React homework', completed: true }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const remainingCount = tasks.filter((task) => !task.completed).length;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px', backgroundColor: '#fff' }}>
      <h2>My To-Do List</h2>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
        <span><strong>{remainingCount}</strong> tasks remaining</span>
        <button
          onClick={clearCompleted}
          style={{ backgroundColor: '#ff9800', color: 'white', border: 'none', borderRadius: '4px', padding: '6px 12px', cursor: 'pointer' }}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
