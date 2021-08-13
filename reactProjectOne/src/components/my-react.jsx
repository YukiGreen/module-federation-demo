  import React, { Component } from 'react';

class MyReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'myreact.jsx',
      type: 'isReactState',
    };
  }
  changeName() {
    this.setState({
      name: 'other react',
    });
  }
  render() {
    return (
      <div style={{backgroundColor: 'aquamarine'}}>
        <h3>this is react-1 {this.state.name}</h3>
        <div>{this.state.type}</div>
        <div> {this.props.prop}</div>
        <button onClick={this.changeName.bind(this)}>change name</button>
      </div>
    );
  }
}
export default MyReact;
