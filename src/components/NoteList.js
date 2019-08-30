import React, { useContext } from 'react';
import Note from './Note';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import './note-list.css';
import PropTypes from 'prop-types';

const NoteList = props => {
  let notesList;
  const { notes } = useContext(AppContext);
  if (props.match.params.folderId) {
    notesList = notes.filter(
      note => note.folder_id === props.match.params.folder_id
    );
  } else {
    notesList = notes;
  }

  return (
    <>
      <ul>
        {notesList.map(note => (
          <Note
            name={note.note_name}
            id={note.id}
            key={note.id}
            modified={note.modified}
          />
        ))}
      </ul>
      <button>
        <Link to="/add-note">Add Note</Link>
      </button>
    </>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      folderId: PropTypes.string.isRequired,
      content: PropTypes.string
    })
  )
};

export default NoteList;
