import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      setError("Please enter a title.");
      return;
    }

    if (description.trim() === "") {
      setError("Please enter a description.");
      return;
    }

    setIsSubmitting(true);

    const newTask = {
      title: title,
      description: description,
      status: false
    };

    setTimeout(() => {
      addTask(newTask);
      setTitle("");
      setDescription("");
      setError("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <h2 className="font-semibold sm:text-lg md:text-xl lg:text-2xl">
        Add New Task
      </h2>
      <form onSubmit={handleSubmit} className="mb-4">
        {error && <p className="error">{error}</p>}

        <div className="mt-2 grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              for="title"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Task
            </label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              for="description"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isSubmitting ? "Adding..." : "Add Task"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TaskForm;
