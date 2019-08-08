import React, { useContext } from "react";
import Note from "./Note";
import AppContext from "../context/AppContext";
import "./note-list.css";

const NoteList = props => {
  let notesList;
  const { notes } = useContext(AppContext);
  if (props.match.params.folderId) {
    notesList = notes.filter(
      note => note.folderId === props.match.params.folderId
    );
  } else {
    notesList = notes;
  }

  return (
    <ul>
      {notesList.map(note => (
        <Note
          name={note.name}
          id={note.id}
          key={note.id}
          modified={note.modified}
        />
      ))}
    </ul>
  );
};

export default NoteList;
