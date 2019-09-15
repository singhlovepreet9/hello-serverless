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
      .get(
        "https://o2ui13lnzc.execute-api.us-east-1.amazonaws.com/test/greet/Falcon?lang=en"
      )
      .then(res => {
        this.setState({ message: res.data.message });
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
        sab merge Serverless {this.state.message}
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
