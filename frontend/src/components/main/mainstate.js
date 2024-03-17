import { createContext, useState, useContext } from "react";
const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [todoLabels, setTodoLabels] = useState([]);
  const [todos, setTodos] = useState([]);
  const [paginationLabel, setPaginationLabel] = useState([]);
  const [paginationTodo, setPaginationTodo] = useState([]);
  return (
    <MainContext.Provider
      value={{
        todoLabels,
        setTodoLabels,
        todos,
        setTodos,
        paginationLabel,
        setPaginationLabel,
        paginationTodo,
        setPaginationTodo,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export const useData = () => {
  return useContext(MainContext);
};
