import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./folder.css";

const Folder = props => {
  return (
    <li className="folder-item">
      <NavLink className="folder-item__link" to={`/folders/${props.id}`}>
        {props.name}
      </NavLink>
    </li>
  );
};

export default Folder;
