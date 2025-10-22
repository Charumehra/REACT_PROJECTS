import React from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="bg-gradient-to-b from-[#1a002c] via-[#26023f] to-[#0d001a] min-h-screen py-10 m-0 flex flex-col items-center overflow-x-hidden">
      <h2 className="text-4xl font-serif  text-white mb-4">TaskList</h2>
      <div className="bg-black/50 rounded-2xl min-h-[80vh] min-w-[80vw]  m-0 flex flex-col items-center ">
        <div className="bg-black w-full h-full flex flex-col items-center py-7"
        style={{
          backgroundImage: `url('https://i.pinimg.com/736x/62/8b/71/628b71f7aa0502732aa32c03ac434a39.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <p className=" text-2xl font-bold text-black mb-4">
            Turn your to-dos into ta-dahs!
          </p>
          <AddTodo />
        </div>
        <Todos />
      </div>
    </div>
  );
}

export default App;
