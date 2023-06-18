import React from "react";

const Task = ({ title, description, status }) => {
  return (
    <div className="mb-2">
      <h3 className="font-semibold md:text-lg lg:text-xl">{title}</h3>
      <p>{description}</p>
      <p>
        Status: <i>{status ? "Completed" : "Incomplete"}</i>
      </p>
    </div>
  );
};

export default Task;