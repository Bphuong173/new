import React from "react";
import { OpenAddModal } from "../add-modal/openaddmodal";
import { Item } from "./item/item";
import axios from "axios";

export const TodoLabel = ({
  todoLabels,
  reloadAll,
  setOpenModal,
  handleOpenModal,
  handleCloseModal,
}) => {
  const addTodoLabel = (task, color) => {
    const newTodoLabel = {
      task: task,
      color: color,
      isEditing: false,
    };
    axios
      .post("http://localhost:5500/todoLabel", newTodoLabel, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        reloadAll();
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const deleteTodoLabel = (_id) => {
    axios.delete("http://localhost:5500/todoLabel/" + _id, {}).then(() => {
      reloadAll();
    });
  };

  const updateTaskLabel = (task, _id, color) => {
    axios
      .put("http://localhost:5500/todoLabel/" + _id, {
        task: task,
        color: color,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(`Error! status: ${response.status}`);
        }
        reloadAll();
      });
  };
  return (
    <>
      <div>
        <OpenAddModal
          addTodoLabel={addTodoLabel}
          setOpenModal={setOpenModal}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        {todoLabels.map((todoLabel) => (
          <Item
            key={todoLabel._id}
            todoLabel={todoLabel}
            deleteTodoLabel={deleteTodoLabel}
            updateTodoLabel={updateTaskLabel}
          />
        ))}
      </div>
    </>
  );
};
