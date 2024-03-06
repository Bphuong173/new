import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// asdasdas
// const loadNextPage = async () => {
//     const nextPage = pagination.current_page + 1;
//     if (nextPage <= pagination.total_pages) {
//       await fetchTodos({ page: nextPage })
//         .then((res) => {
//           setTodos(res.data);
//           setPagination(res.pagination);
//         })
//         .catch((error) => console.log(error));
//     }
//   };

//   const loadPrevPage = async () => {
//     const prevPage = pagination.current_page - 1;
//     if (prevPage >= 1) {
//       await fetchTodos({ page: prevPage })
//         .then((res) => {
//           setTodos(res.data);
//           setPagination(res.pagination);
//         })
//         .catch((error) => console.log(error));
//     }
//   };
