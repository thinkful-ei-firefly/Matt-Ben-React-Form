import React, { useContext } from "react";
import Folder from "./Folder";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FolderList = props => {
  const { folders } = useContext(AppContext);
  return (
    <>
      <ul className="folder-list">
        {folders.map(folder => (
          <Folder name={folder.name} id={folder.id} key={folder.id} />
        ))}
      </ul>
      <button>
        <Link to="/add-folder">Add Folder</Link>
      </button>
    </>
  );
};

FolderList.propTypes = {
  folder: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default FolderList;
