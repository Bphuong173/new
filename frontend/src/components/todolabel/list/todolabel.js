import React, { useRef, useEffect, useState } from "react";
import { OpenAddModal } from "../add-modal/openaddmodal";
import { Item } from "./item/item";
import {
  createTodoLabelapi,
  updateTodoLabelapi,
  deleteTodoLabelapi,
  fetchTodoLabelapi,
} from "../../api/apitodolabel";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useData } from "../../main/mainstate";

export const TodoLabel = ({
  setOpenModal,
  handleOpenModal,
  handleCloseModal,
  loadTodolabel,
}) => {
  const {
    todoLabels,
    selectedItemId,
    setSelectedItemId,
    setFilteredLabel,
    setTodoLabels,
    setFocusedLabel,
  } = useData();
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();
  const containerRef = useRef(null);
  const fetchTodoLabels = async () => {
    const response = await fetchTodoLabelapi();
    setTodoLabels(response.data);
    console.log(response.data);
  };

  const mutationCreate = useMutation({
    mutationFn: createTodoLabelapi,
    onSuccess: (newTodoLabels) => {
      setTodoLabels((prevTodoLabels) => [
        newTodoLabels.data,
        ...prevTodoLabels,
      ]);
      console.log(newTodoLabels);
      queryClient.invalidateQueries({ queryKey: ["todolabel"] });
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteTodoLabelapi,
    onSuccess: () => {
      fetchTodoLabels();
      queryClient.invalidateQueries({ queryKey: ["todolabel"] });
    },
  });

  const mutationUpdate = useMutation({
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

  const updateTaskLabel = (task, _id, color) => {
    mutationUpdate.mutate({ task, _id, color });
  };

  const handleLabelClick = (labelId) => {
    setFilteredLabel(labelId);
    setSelectedItemId(labelId);
    setFocusedLabel(labelId);
  };

  const lastElement = todoLabels[todoLabels.length - 1];
  const latsIdLabel = lastElement?._id;
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const handleScroll = async () => {
        if (
          !isLoading &&
          container.scrollTop + container.clientHeight >=
            container.scrollHeight - 1
        ) {
          setIsLoading(true);
          await loadTodolabel(latsIdLabel);
        }
      };
      container.addEventListener("scroll", handleScroll);
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [latsIdLabel, loadTodolabel, isLoading]);

  return (
    <>
      <div className="h-full overflow-y-auto" ref={containerRef}>
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

      <div className="flex bottom-0  w-full h-10 pl-5 border-solid border-[1px] border-[#f4f4f4] bg-white">
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
