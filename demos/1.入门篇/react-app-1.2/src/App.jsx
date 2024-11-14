import React, { Component } from "react";

class App extends Component {
  state = {
    value: "",
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.value);
  }
  render() {
    return (
      <>
        <fieldset>
          <legend>表单</legend>
          <div>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>提交</button>
          </div>
        </fieldset>
      </>
    );
  }
}

export default App;
