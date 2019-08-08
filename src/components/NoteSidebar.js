import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const NoteSidebar = ({ match: { params } }) => {
  const { folders, notes } = useContext(AppContext);
  const note = notes.find(note => note.id === params.noteId);
  const folder = folders.find(folder => folder.id === note.folderId);
  return (
    <div>
      <Link to={`/folders/${folder.id}`}>Go Back</Link>
      <h2>{folder.name}</h2>
    </div>
  );
};

export default NoteSidebar;
