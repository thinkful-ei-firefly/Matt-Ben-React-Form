import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Note from "./Note";
import PropTypes from "prop-types";

const NotePage = props => {
  const { notes } = useContext(AppContext);
  const noteArr = notes.filter(note => note.id === props.match.params.notesId);
  const note = noteArr[0];

  return (
    <div>
      <Note {...note} />
      <p>{note.content}</p>
    </div>
  );
};
NotePage.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      folderId: PropTypes.string.isRequired,
      content: PropTypes.string
    })
  )
};
export default NotePage;
