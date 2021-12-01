import React, { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

export const Context = React.createContext();

function App() {

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  return (
    <>
      <header className="flex justify-center items-center bg-blue-500 text-white font-medium text-2xl font-yekan py-4">
        <h1>مدیریت زمان BAM</h1>
      </header>
      <Context.Provider value={{ tasks, setTasks }}>
        <AddTask />
        <TaskList />
      </Context.Provider>

    </>
  );
}

export default App;
