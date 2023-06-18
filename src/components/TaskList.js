import React, { useState, useEffect } from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [deleteConfirmationIndex, setDeleteConfirmationIndex] = useState(-1);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    setDeleteConfirmationIndex(index);
  };

  const confirmDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setDeleteConfirmationIndex(-1);
  };

  const cancelDeleteTask = () => {
    setDeleteConfirmationIndex(-1);
  };

  const toggleStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = !updatedTasks[index].status;
    setTasks(updatedTasks);
  };

  return (
    <div className="w-full max-w-xs">
      <TaskForm addTask={addTask} />

      {tasks.map((task, index) => (
        <div key={index} className="border p-2 mb-2">
          <Task
            title={task.title}
            description={task.description}
            status={task.status}
          />

          <div className="flex gap-2 sm:flex text-sm">
            <button
              className="block bg-transparent hover:bg-red-500 text-red-700 hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>

            <button
              className="block bg-transparent hover:bg-indigo-500 text-indigo-700 hover:text-white py-1 px-2 border border-indigo-500 hover:border-transparent rounded"
              onClick={() => toggleStatus(index)}
            >
              {task.status ? "Mark Incomplete" : "Mark Complete"}
            </button>
          </div>

          {deleteConfirmationIndex === index && (
            <>
              <small className="block mt-2 leading-tight">
                Are you sure you want to delete this task?
              </small>
              <div className="flex gap-2 text-sm">
                <button
                  onClick={() => confirmDeleteTask(index)}
                  className="bg-transparent hover:bg-red-500 text-red-700 hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded"
                >
                  Yes
                </button>

                <button
                  onClick={cancelDeleteTask}
                  className="bg-transparent hover:bg-indigo-500 text-indigo-700 hover:text-white py-1 px-2 border border-indigo-500 hover:border-transparent rounded"
                >
                  No
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
