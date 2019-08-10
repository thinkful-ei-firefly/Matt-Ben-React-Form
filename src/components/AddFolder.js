import React, { Component } from 'react';

export default class AddFolder extends Component {
  state = {
    name: '',
    error: null
  };

  onChange = e => {
    this.setState({ name: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    if (!name || name.length <= 3 || name.length >= 20) {
      this.setState({
        error:
          'Name is required and must be more than three characters and less than 20'
      });
    } else {
      this.props.addFolder({ name });
    }
  };
  render() {
    return (
      <div>
        <h2>AddFolder</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              aria-required="true"
              aria-describedby="error"
              aria-label="Name for new folder to add"
              required
            />
          </label>
          {this.state.error && (
            <p id="error" style={{ color: 'red' }}>
              {this.state.error}
            </p>
          )}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
