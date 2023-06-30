import React, { useContext, useState } from "react";
import NoteDispatchContext from "./context/NoteDispatchContext";

function Note({ id, title, content, onEdit }) {
  const dispatch = useContext(NoteDispatchContext);
  const handleDelete = () => {
    dispatch({ type: "DELETE", payload: id });
  };
  const handleEdit = () => {
    onEdit(id);
  };
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>DELETE</button>
      <button onClick={handleEdit}>EDIT</button>
    </div>
  );
}

export default Note;
