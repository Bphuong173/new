import { createContext, useState, useContext } from "react";
const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [todoLabels, setTodoLabels] = useState([]);
  const [todos, setTodos] = useState([]);
  const [filteredLabel, setFilteredLabel] = useState(null);
  const [lastIdLabel, setLastIdLabel] = useState(null);
  const [lastIdTodo, setLastIdTodo] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);

  return (
    <MainContext.Provider
      value={{
        todoLabels,
        setTodoLabels,
        todos,
        setTodos,
        lastIdLabel,
        lastIdTodo,
        setLastIdLabel,
        setLastIdTodo,
        filteredLabel,
        setFilteredLabel,
        selectedItemId,
        setSelectedItemId,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export const useData = () => {
  return useContext(MainContext);
};
