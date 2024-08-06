import { v4 as uuidv4 } from "uuid";
import { useContext, useRef, useState } from "react";
import { taskContext } from "../Context/Context";
import "./NewTask.css";
import React from "react";

export const NewTask = () => {
  const { tasks, setTasks, setFilteredTasks } = useContext(taskContext);

  const [titleTask, setTitleTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");

  const txtTitle = useRef("");
  const txtDescription = useRef("");

  const handleTitleTask = (event) => setTitleTask(event.target.value);
  const handleDescriptionTask = (event) =>
    setDescriptionTask(event.target.value);

  const handleCreateTask = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      title: titleTask,
      description: descriptionTask,
      status: false,
    };

    // Actualización inmutable de las tareas
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);

    // Limpieza de los campos del formulario
    setTitleTask("");
    setDescriptionTask("");
    txtTitle.current.value = "";
    txtDescription.current.value = "";
  };

  return (
    <form className="frm-task" onSubmit={handleCreateTask}>
      <fieldset>
        <label>Título de la tarea</label>
        <input
          ref={txtTitle}
          value={titleTask}
          onChange={handleTitleTask}
          id="txt-title"
          placeholder="Ej: Aseo ambiente"
          type="text"
        />
      </fieldset>
      <fieldset>
        <label>Descripción de la tarea</label>
        <input
          ref={txtDescription}
          value={descriptionTask}
          onChange={handleDescriptionTask}
          id="txt-description"
          placeholder="Ej: Realizar Aseo ambiente"
          type="text"
          maxLength={100}
        />
      </fieldset>
      <button type="submit" className="btn-new-task">
        Crear nueva tarea
      </button>
    </form>
  );
};