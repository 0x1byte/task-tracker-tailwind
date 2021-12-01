import React, { useContext, useState } from 'react';
import { Context } from '../App';

const Task = ({ id, task, checked }) => {
    const [isEditing, setEditState] = useState(false);
    const { tasks, setTasks } = useContext(Context);
    const checkHandler = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, checked: !task.checked } : task));
    }
    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }
    const editTask = () => {
        setEditState(!isEditing);
    }
    const handleEdit = (id, e) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, task: e.target.value } : task));
    }
    return (
        <div className="flex flex-row rounded-xl text-center justify-between items-center shadow-myshadow box-content w-5/6 py-0.5 px-2 mx-0.5 my-3 md:w-4/12">
            {isEditing ? (
                <>
                    <div className="flex items-center py-4">
                        <input type="checkbox" className="px-2" name="Task-Check" id="Task-Check" checked={checked} onChange={() => checkHandler(id)} />
                        <input type="text" className="rounded-md ring-2 outline-none focus:ring-red-500 w-64 mr-2 px-1" placeholder={task} onChange={(e) => handleEdit(id, e)} />
                    </div>
                    <div className="Task-Buttons">
                        <i className="fas fa-check fa-lg px-1" onClick={editTask}></i>
                    </div>
                </>
            ) : (
                <>
                    <div className="flex items-center py-4">
                        <input type="checkbox" name="Task-Check" id="Task-Check" className="checked:bg-blue-600 checked:border-transparent" checked={checked} onChange={() => checkHandler(id)} />
                        <p className="pr-1">{task}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        <i className="far fa-trash-alt fa-lg px-1" onClick={() => removeTask(id)}></i>
                        <i className="far fa-edit fa-lg px-1" onClick={editTask}></i>
                    </div>
                </>
            )}

        </div>
    )
}

export default Task;
