import React, { useContext } from 'react';
import Folder from './Folder';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FolderList = props => {
  const { folders } = useContext(AppContext);
  console.log(folders[0]);
  return (
    <>
      <ul className="folder-list">
        {folders.map(folder => (
          <Folder name={folder.folder_name} id={folder.id} key={folder.id} />
        ))}
      </ul>
      <button>
        <Link to="/add-folder">Add Folder</Link>
      </button>
    </>
  );
};

FolderList.propTypes = {
  folders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default FolderList;
