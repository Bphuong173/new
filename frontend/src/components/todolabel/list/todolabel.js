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
      query.refetch();
    },
  });
  const updateTaskLabel = (task, _id, color) => {
    mutation.mutate({ task, _id, color });
  };
  // const updateTaskLabel = (task, _id, color) => {
  //   updateTodoLabelapi(_id, {
  //     task: task,
  //     color: color,
  //   }).then((response) => {
  //     if (response.status !== 200) {
  //       throw new Error(`Error! status: ${response.status}`);
  //     }
  //     reloadAll();
  //   });
  // };
  return (
    <>
      <div>
        <OpenAddModal
          addTodoLabel={addTodoLabel}
          setOpenModal={setOpenModal}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
        {query?.data?.data?.data.map((todoLabel) => (
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
