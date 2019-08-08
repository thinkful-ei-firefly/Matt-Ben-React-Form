import React, { useContext } from "react";
import Folder from "./Folder";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";

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

export default FolderList;
