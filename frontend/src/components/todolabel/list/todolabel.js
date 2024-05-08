import React, { useEffect } from "react";
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
  setOpenModal,
  handleOpenModal,
  handleCloseModal,
  setTodoLabels,
  paginationLabel,
  setPaginationLabel,
  updateTodoLabels,
  currentPage,
  setCurrentPage,
  displayedLabels,
  setDisplayedLabels,
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
      updateTodoLabels();
    },
  });
  const mutationDelete = useMutation({
    mutationFn: deleteTodoLabelapi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todolabel"] });
      query.refetch();
      updateTodoLabels();
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
  useEffect(() => {
    const loadTodoLabel = async () => {
      try {
        const res = await fetchTodoLabelapi(currentPage); // Sử dụng currentPage để fetch dữ liệu cho trang hiện tại
        setDisplayedLabels(res.data.data); // Cập nhật displayedLabels thay vì todoLabels
        setPaginationLabel(res.data.paginationLabel);
      } catch (error) {
        console.log(error);
      }
    };

    loadTodoLabel();
  }, [currentPage, setPaginationLabel]);
  return (
    <>
      <div className="">
        {displayedLabels.map((todoLabel) => (
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
        setCurrentPage={setCurrentPage}
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
// w-full h-10 border-[#F1F1F1] boder-2 border-solid
