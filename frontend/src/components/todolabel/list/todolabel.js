import React from "react";
import { OpenAddModal } from "../add-modal/openaddmodal";
import { Item } from "./item/item";
import {
  createTodoLabelapi,
  updateTodoLabelapi,
  deleteTodoLabelapi,
} from "../../api/apitodolabel";
import { PaginateTodolabel } from "../../paginate/paginateTodolabel";
export const TodoLabel = ({
  todoLabels,
  reloadAll,
  setOpenModal,
  handleOpenModal,
  handleCloseModal,
  setTodoLabels,
  paginationLabel,
  setPaginationLabel,
}) => {
  const addTodoLabel = (task, color) => {
    createTodoLabelapi({
      task: task,
      color: color,
      isEditing: false,
    })
      .then(() => {
        reloadAll();
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  const deleteTodoLabel = (_id) => {
    deleteTodoLabelapi(_id).then(() => {
      reloadAll();
    });
  };

  const updateTaskLabel = (task, _id, color) => {
    updateTodoLabelapi(_id, {
      task: task,
      color: color,
    }).then((response) => {
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
        <PaginateTodolabel
          setTodoLabels={setTodoLabels}
          paginationLabel={paginationLabel}
          setPaginationLabel={setPaginationLabel}
        />
      </div>
    </>
  );
};
