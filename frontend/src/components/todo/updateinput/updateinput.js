// import React, { useState, useEffect } from "react";
// import { UpdateClock } from "./updateClock";
// import { useData } from "../../main/mainstate";
// import { ListMenu } from "../input/listmenu";
// export const Updateinput = ({
//   updateTasktodo,
//   todo,
//   loadTodo,
//   setIsEditing,
// }) => {
//   const { todoLabels } = useData();
//   const [value, setValue] = useState(todo.task);
//   const [clockCompleted, setClockCompleted] = useState(
//     todo.clockCompleted.length
//   );
//   const [labelId, setLabelId] = useState(todo.labelId); // Thêm biến trạng thái cho labelId
//   const [showActions, setShowActions] = useState(false);
//   const [notes, setNotes] = useState(todo.notes || "");

//   const handleClockCompletedChange = (newClockCompleted) => {
//     setClockCompleted(newClockCompleted);
//   };
//   const handleClickInside = () => {
//     setShowActions(!showActions);
//   };

//   const closeModal = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//   };
//   const selectedLabelId = labelId !== null ? labelId : todo.labelId;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newClockCompletedArray = new Array(clockCompleted).fill(25);
//     updateTasktodo(
//       value,
//       todo._id,
//       newClockCompletedArray,
//       selectedLabelId._id,
//       notes
//     );
//   };
//   return (
//     <div className="py-8 px-8">
//       <form onSubmit={handleSubmit}>
//         <h2 className="flex justify-center p-4 m-0">Update ToDo</h2>

//         <input
//           className="w-full h-8 border-2 border-solid rounded-md"
//           type="text"
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           placeholder="Update task"
//         />
//         <UpdateClock
//           initialCount={clockCompleted}
//           onCountChange={handleClockCompletedChange}
//         />
//         <textarea
//           className="mt-2 w-full p-2 border rounded-lg"
//           onChange={(e) => setNotes(e.target.value)}
//           value={notes}
//           placeholder="Update notes (optional)"
//         />
//         <div className="mt-5 flex justify-center">
//           <button
//             className="border-solid border-2 text-[#414141] bg-[#ffffff] text-sm h-6 w-14 rounded-md mr-4"
//             type="button"
//             onClick={closeModal}
//             // assuming loadTodo resets editing state
//           >
//             Cancel
//           </button>
//           <button
//             className="bg-[#f93b42] text-[#ffffff] border-none rounded-md h-6 w-14 text-sm"
//             type="submit"
//           >
//             Save
//           </button>
//         </div>
//         <div>
//           <label onClick={handleClickInside}>
//             Nhãn:{todo.labelId ? selectedLabelId.task : "Pick label"}{" "}
//           </label>{" "}
//           {/* Hiển thị tên nhãn và làm nó có thể click */}
//           {showActions && (
//             <ListMenu
//               todoLabels={todoLabels}
//               labelSelected={labelId}
//               setLabelSelected={setLabelId}
//               handleClickInside={handleClickInside}
//             />
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };
