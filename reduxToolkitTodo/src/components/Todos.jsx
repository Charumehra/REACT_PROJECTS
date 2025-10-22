// import React,{ useState} from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo, updateTodo } from "../features/todo/todoSlice";

// function Todos() {
//   const todos = useSelector((state) => state.todo.todos); 
//   const dispatch = useDispatch();

//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");
    
//   const handleSave = (id) => {
//     if (editText.trim()) {
//       dispatch(updateTodo({ id, text: editText }));
//       setEditId(null);
//       setEditText("");
//     }
//   };


//   return (
//     <>

//         <div className="">
//       <ul className="list-none">
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
//           >
//             {editId === todo.id ? (
//               <div className="flex w-full justify-between gap-2">
//                 <input
//                   type="text"
//                   value={editText}
//                   onChange={(e) => setEditText(e.target.value)}
//                   className="flex-1 px-2 py-1 rounded text-black"
//                 />
//                 <button
//                   onClick={() => handleSave(todo.id)}
//                   className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                 >
//                   Save
//                 </button>
//                 <button
//                     onClick={() => dispatch(removeTodo(todo.id))}
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//               </div>
//              ) :(
//               <>
//                <div className="flex w-full justify-between gap-2">
//                 <div className="text-white flex-1 px-2 py-1 rounded ">{todo.text}</div>
//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => {
//                       setEditId(todo.id);
//                       setEditText(todo.text);
//                     }}
//                     className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => dispatch(removeTodo(todo.id))}
//                     className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                   >
//                     Delete
//                   </button>
//                 </div>
//                 </div>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
    
//     </>
//   );
// }

// export default Todos;


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSave = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, text: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-semibold text-center text-white mb-4">
        Your Todos
      </h2>

      {todos.length === 0 ? (
        <p className="text-center text-gray-400">No todos yet. Add one!</p>
      ) : (
        <ul className="list-none space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-zinc-800 px-4 py-3 rounded-lg shadow-md transition-all duration-200 hover:bg-zinc-700"
            >
              {editId === todo.id ? (
                <div className="flex w-full items-center gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-3 py-1 rounded text-black outline-none"
                    placeholder="Edit todo..."
                  />
                  <button
                    onClick={() => handleSave(todo.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <div className="flex w-full items-center justify-between">
                  <span className="text-white text-base truncate">
                    {todo.text}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditId(todo.id);
                        setEditText(todo.text);
                      }}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => dispatch(removeTodo(todo.id))}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
