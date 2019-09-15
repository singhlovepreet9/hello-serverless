import React, { Component } from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import axios from "axios";

class Counter extends Component {
  state = {
    message: ""
  };
  componentWillMount = async () => {
    await axios
      .get("https://pqswkk8tdg.execute-api.us-east-1.amazonaws.com/dev/hello")
      .then(res => {
        this.setState({ message: res.message });
      });
  };
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };
  render() {
    return (
      <div style={{ align: "center" }}>
        Hello Serverless {this.state.message}
        <div>
          <Button varaint="outlined" onClick={this.decrement} color="secondary">
            -
          </Button>
          <span>{this.props.count}</span>
          <Button varaint="outlined" onClick={this.increment} color="secondary">
            +
          </Button>
        </div>
        <div>
          <Button color="primary" variant="contained" onClick={this.reset}>
            Reset
          </Button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);
