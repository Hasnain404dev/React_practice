import { useState } from "react";
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container bg-violet-200 rounded-md  mx-auto min-h-[80vh] p-5 my-4 w-1/2  max-w-screen-sm ">
        <h1 className="text-xl font-bold font-sans">Add Task</h1>
        <div className="tasks flex gap-2 my-3">
          <input
            type="text"
            className="w-10/12 rounded-md px-2 focus: border border-violet-700"
          />
          <button className="bg-violet-800 text-white py-1 px-2  rounded-md hover:bg-violet-900">
            Add
          </button>
        </div>
        <h1 className="text-xl font-sans font-bold">Your Todos</h1>
        <div className="showtask flex gap-4 align-middle  ">
          <p>this is your task</p>
          <div className="btns">
            <button className="bg-violet-800 text-white py-1 px-2  rounded-md text-sm hover:bg-violet-900">
              Edit
            </button>
            <button className="bg-violet-800 text-white py-1 px-2 mx-1  rounded-md text-sm hover:bg-violet-900">
              Delete 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
