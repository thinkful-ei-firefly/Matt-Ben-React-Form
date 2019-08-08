import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import "./note.css";

const Note = props => {
  const date = new Date(props.modified).toLocaleDateString();
  const { deleteNote } = useContext(AppContext);
  return (
    <li className="note-list-item">
      <h3>
        <Link className="note-list-item__link" to={`/notes/${props.id}`}>
          {props.name}
        </Link>
      </h3>
      <div>Date modified: {date}</div>
      <button onClick={() => deleteNote(props.id)}>Delete</button>
    </li>
  );
};

export default Note;
