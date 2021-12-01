import React, { useContext, useState } from 'react'
import { Context } from '../App';

const AddTask = () => {
    const [task, setTask] = useState('');
    const [taskState, setTaskState] = useState(false);
    const { tasks, setTasks } = useContext(Context);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (task !== "") {
            const newTask = {
                id: Math.floor(Math.random() * 100),
                task: task,
                checked: taskState
            };
            setTasks([...tasks, newTask])
        } else {
            alert("لطفا نام کار را وارد کنید!")
        }
    }
    return (
        <div className="py-4 pr-8 w-80">
            <input type="text" className="border border-transparent shadow-sm rounded-md px-2 py-0.5 font-yekan mb-3 w-full ring-2 outline-none focus:ring-red-500" name="task-text" id="task-text" placeholder="نام کار" onChange={(e) => setTask(e.target.value)} />
            <div className="flex justify-between">
                <div className="flex items-center">
                    <label className="font-yekan ml-1" htmlFor="save-task">انجام شده؟</label>
                    <input type="checkbox" className="checked:bg-blue-600 checked:border-transparent" name="task-checkbox" id="task-checkbox" onClick={(e) => setTaskState(!taskState)} />
                </div>
                <button type="submit" className="mt-3 font-yekan ring-2 rounded-xl px-3 py-1" id="save-task" onClick={(e) => handleSubmit(e)}>ذخیره</button>
            </div>
        </div>
    )
}

export default AddTask;
