import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then(result => location.reload())
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <input
        className="w-80 p-3 border-neutral-900 border-2 rounded-md"
        placeholder="Task...."
        onChange={(e) => setTask(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button
        className="h-full p-3 cursor-pointer bg-black text-white ml-1 mb-4 rounded-md"
        type="submit"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default Create;
