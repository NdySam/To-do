import React from "react";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div className="container px-4 sm:px-8 md:px-12">
      <div className="border-b border-indigo-500 mb-4 py-2 flex items-center">
        <h1 className="font-bold sm:text-2xl md:text-4xl">To-do Application</h1>
      </div>
      <TaskList />
    </div>
  );
};

export default App;
