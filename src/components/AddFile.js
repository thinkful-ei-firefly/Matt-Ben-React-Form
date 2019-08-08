import React, { Component } from "react";
import "./add-file.css";

export default class AddFile extends Component {
  state = {
    name: "",
    folderId: "",
    content: "",
    error: null
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, folderId, content } = this.state;
    if (!name || name.length <= 3 || name.length >= 20) {
      this.setState({
        error:
          "Name is required and must be more than three characters and less than 20"
      });
    } else if (!folderId) {
      this.setState({
        error: "You must choose a valid folder"
      });
    } else {
      this.props.addFile({ name, folderId, content, modified: Date.now() });
    }
  };
  render() {
    return (
      <div>
        <h2>Add File</h2>
        <form className="add-file-form" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              required
            />
          </label>
          <label for="folder-select">
            <select
              id="folder-select"
              name="folderId"
              value={this.state.folderId}
              onChange={this.onChange}
              required
            >
              <option>--Please Choose a Folder--</option>
              {this.props.folders.map(folder => (
                <option value={folder.id}>{folder.name}</option>
              ))}
            </select>
          </label>
          <label for="content">Add Note Content:</label>
          <textarea
            id="content"
            name="content"
            rows="5"
            cols="33"
            value={this.state.content}
            onChange={this.onChange}
          >
            Add stuff to me...
          </textarea>
          {this.state.error && (
            <p style={{ color: "red" }}>{this.state.error}</p>
          )}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
