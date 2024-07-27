import { createContext, useState, useContext } from "react";
const MainContext = createContext();
export const MainProvider = ({ children }) => {
  const [todoLabels, setTodoLabels] = useState([]);
  const [todos, setTodos] = useState([]);
  const [filteredLabel, setFilteredLabel] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [focusedLabel, setFocusedLabel] = useState(null);
  const [notes, setNotes] = useState("");
  const resetState = () => {
    setTodoLabels([]);
    setTodos([]);
    setFilteredLabel(null);
    setSelectedItemId(null);
    setFocusedLabel(null);
    setNotes("");
  };

  return (
    <MainContext.Provider
      value={{
        todoLabels,
        setTodoLabels,
        todos,
        setTodos,
        filteredLabel,
        setFilteredLabel,
        selectedItemId,
        setSelectedItemId,
        focusedLabel,
        setFocusedLabel,
        notes,
        setNotes,
        resetState,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
export const useData = () => {
  return useContext(MainContext);
};
