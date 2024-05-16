import React, { useState, useRef, useEffect } from "react";
import { OpenAddModal } from "../add-modal/openaddmodal";
import { Item } from "./item/item";
import {
  createTodoLabelapi,
  updateTodoLabelapi,
  deleteTodoLabelapi,
} from "../../api/apitodolabel";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useData } from "../../main/mainstate";

export const TodoLabel = ({
  setOpenModal,
  handleOpenModal,
  handleCloseModal,
  setFilteredLabel,
  loadTodolabel,
}) => {
  const { todoLabels, selectedItemId, setSelectedItemId } = useData();
  const queryClient = useQueryClient();
  const mutationCreate = useMutation({
    mutationFn: createTodoLabelapi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todolabel"] });
      loadTodolabel();
    },
  });
  const mutationDelete = useMutation({
    mutationFn: deleteTodoLabelapi,
    onSuccess: () => {
      loadTodolabel();
    },
  });
  const addTodoLabel = (task, color) => {
    mutationCreate.mutate({
      task: task,
      color: color,
      isEditing: false,
    });
  };
  const deleteTodoLabel = (_id) => {
    mutationDelete.mutate(_id);
  };
  const mutation = useMutation({
    mutationFn: (data) =>
      updateTodoLabelapi(data._id, {
        task: data.task,
        clockCompleted: data.clockCompleted,
        color: data.color,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const updateTaskLabel = (task, _id, color) => {
    mutation.mutate({ task, _id, color });
  };
  const handleLabelClick = (labelId) => {
    setFilteredLabel(labelId);
    setSelectedItemId(labelId);
  };
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = async () => {
        if (
          container.scrollTop + container.clientHeight >=
          container.scrollHeight
        ) {
          const last = todoLabels[todoLabels.length - 1];
          console.log(last);
          await loadTodolabel(last._id);
        }
      };
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [loadTodolabel, todoLabels]);
  return (
    <>
      <div className=" h-full overflow-y-auto" ref={containerRef}>
        {todoLabels?.map((todoLabel, index) => (
          <Item
            key={index}
            todoLabel={todoLabel}
            deleteTodoLabel={deleteTodoLabel}
            updateTodoLabel={updateTaskLabel}
            handleLabelClick={handleLabelClick}
            isSelected={selectedItemId === todoLabel._id}
            onClick={() => handleLabelClick(todoLabel._id)}
          />
        ))}
      </div>

      <div className=" flex bottom-0 absolute w-full  h-10 pl-5 border-solid border-[1px] border-[#f4f4f4] bg-white  ">
        <OpenAddModal
          addTodoLabel={addTodoLabel}
          setOpenModal={setOpenModal}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
      </div>
    </>
  );
};
