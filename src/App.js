import React, { Component } from 'react';
import './App.css';
import {changeColor} from "./Redux/actions";
import connect from "react-redux/lib/connect/connect";

class App extends Component {

    black(e) {
        e.preventDefault();
        this.props.changeColor("red");
    }

    white (e) {
        e.preventDefault();
        this.props.changeColor("green");
    }

  render() {
      var divStyle = {
          backgroundColor: this.props.color
      };
      return (
      <div style={divStyle}>
        <button onClick={e => this.white(e)}> Green </button>
        <button onClick={e => this.black(e)}> Red </button>
          <h1>{this.props.color}</h1>
      </div>
    );
  }
}



const mapStateToProps = state => {
    return{
        color: state.color
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeColor(color){
            dispatch(changeColor(color));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
