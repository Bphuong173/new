import { createContext, useState, useContext } from "react";
const LabelTodoContext = createContext();
export const TodoLabelProvider = ({ children }) => {
  const [todoLabels, setTodoLabels] = useState([]);
  const [filteredLabel, setFilteredLabel] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);

  return (
    <LabelTodoContext.Provider
      value={{
        todoLabels,
        setTodoLabels,
        filteredLabel,
        setFilteredLabel,
        selectedItemId,
        setSelectedItemId,
      }}
    >
      {children}
    </LabelTodoContext.Provider>
  );
};
export const useData = () => {
  return useContext(LabelTodoContext);
};
