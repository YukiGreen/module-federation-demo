  import React, { Component } from 'react';

class ReactTwo extends Component {
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
      <div style={{backgroundColor: '#789'}}>
        <h3>this is react-2 {this.state.name}</h3>
        <div>{this.state.type}</div>
        <div> {this.props.prop}</div>
        <button onClick={this.changeName.bind(this)}>change name</button>
      </div>
    );
  }
}
export default ReactTwo;
