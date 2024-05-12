import React from "react";
import { OpenAddModal } from "../add-modal/openaddmodal";
import { Item } from "./item/item";
import {
  createTodoLabelapi,
  updateTodoLabelapi,
  deleteTodoLabelapi,
  fetchTodoLabelapi,
} from "../../api/apitodolabel";
import { PaginateTodolabel } from "../../paginate/paginateTodolabel";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ["todolabel"],
    queryFn: fetchTodoLabelapi,
  });
  const mutationCreate = useMutation({
    mutationFn: createTodoLabelapi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todolabel"] });
      query.refetch();
    },
  });
  const mutationDelete = useMutation({
    mutationFn: deleteTodoLabelapi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todolabel"] });
      query.refetch();
    },
  });
  const addTodoLabel = (task, color) => {
    mutationCreate.mutate({
      task: task,
      color: color,
      isEditing: false,
    });
    reloadAll();
  };
  const deleteTodoLabel = (_id) => {
    mutationDelete.mutate(_id);
    reloadAll();
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
      query.refetch();
    },
  });
  const updateTaskLabel = (task, _id, color) => {
    mutation.mutate({ task, _id, color });
  };

  return (
    <>
      <div className="Hola">
        {todoLabels?.map((todoLabel) => (
          <Item
            key={todoLabel._id}
            todoLabel={todoLabel}
            deleteTodoLabel={deleteTodoLabel}
            updateTodoLabel={updateTaskLabel}
          />
        ))}
      </div>
      <PaginateTodolabel
        setTodoLabels={setTodoLabels}
        paginationLabel={paginationLabel}
        setPaginationLabel={setPaginationLabel}
      />
      <div className=" bottom-0 absolute w-full  h-10 pl-5 border-solid border-[1px] border-[#f1f1f1] bg-white  ">
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
