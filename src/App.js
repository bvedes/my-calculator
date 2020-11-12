import "./App.scss";
import React from "react";
//import { calculator } from "./utils";

class App extends React.Component {
  state = {
    opA: [],
    opB: [],
    operator: null,
    screen: 0,
  };

  handleClear = () => {
    this.setState({
      screen: 0,
      opA: [],
      opB: [],
      operator: null,
    });
  };

  handleResult = () => {
    if (
      this.state.opA.length === 0 ||
      this.state.opB.length === 0 ||
      this.state.operator === null
    ) {
      return;
    }
    const result =
      this.state.opA.join("") + this.state.operator + this.state.opB.join("");
    //console.log(eval(result));
    this.setState({ screen: eval(result) });
  };

  handleCalc = ({ value, type }) => {
    if (type === "percentage") {
      if (this.state.operator === null) {
        return this.setState({
          opA: [this.state.opA.join("") / 100],
          screen: [this.state.opA.join("") / 100],
        });
      }
      return this.setState({
        opB: [this.state.opB.join("") / 100],
        screen: [this.state.opB.join("") / 100],
      });
    }
    if (type === "negative") {
      if (this.state.operator === null) {
        const isOpAPositive = this.state.opA.join("") > 0;
        const newOpA = this.state.opA.unshift();
        return this.setState({
          opA: isOpAPositive ? ["-", ...this.state.opA] : newOpA,
          screen: isOpAPositive ? ["-", ...this.state.opA] : newOpA,
        });
      }
      const isOpBPositive = this.state.opB.join("") > 0;
      const newOpB = this.state.opB.unshift();
      return this.setState({
        opB: isOpBPositive ? ["-", ...this.state.opB] : newOpB,
        screen: isOpBPositive ? ["-", ...this.state.opB] : newOpB,
      });
    }
    if (type === "operator") {
      if (this.state.operator === null) {
        return this.setState({ operator: value }, console.log(value));
      }
      const aux = eval(
        this.state.opA.join("") + this.state.operator + this.state.opB.join("")
      );
      this.setState({
        opA: [aux],
        opB: [],
        operator: value,
        screen: aux,
      });
    } else if (this.state.operator === null) {
      return this.setState({
        opA: [...this.state.opA, value],
        screen: [...this.state.opA, value],
      });
    } else {
      this.setState({
        opB: [...this.state.opB, value],
        screen: [...this.state.opB, value],
      });
    }
  };
  render() {
    //console.table(this.state);
    console.log(this.state);

    return (
      <div>
        <div className="display">
          <div className="displ">{this.state.screen}</div>
        </div>
        <div className="btns">
          <button className="button" onClick={() => this.handleClear()}>
            C
          </button>
          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: "±",
                type: "negative",
              })
            }
          >
            ±
          </button>
          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: "%",
                type: "percentage",
              })
            }
          >
            %
          </button>
          <button
            className="button"
            id="oprt"
            onClick={() =>
              this.handleCalc({
                value: "/",
                type: "operator",
              })
            }
          >
            /
          </button>

          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: "7",
                type: "number",
              })
            }
          >
            7
          </button>
          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: "8",
                type: "number",
              })
            }
          >
            8
          </button>
          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: "9",
                type: "number",
              })
            }
          >
            9
          </button>
          <button
            className="button"
            id="oprt"
            onClick={() =>
              this.handleCalc({
                value: "*",
                type: "operator",
              })
            }
          >
            X
          </button>

          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: "4",
                type: "number",
              })
            }
          >
            4
          </button>
          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: "5",
                type: "number",
              })
            }
          >
            5
          </button>
          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: "6",
                type: "number",
              })
            }
          >
            6
          </button>
          <button
            className="button"
            id="oprt"
            onClick={() =>
              this.handleCalc({
                value: "-",
                type: "operator",
              })
            }
          >
            -
          </button>

          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: "1",
                type: "number",
              })
            }
          >
            1
          </button>
          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: "2",
                type: "number",
              })
            }
          >
            2
          </button>
          <button
            className="button"
            id="three"
            onClick={() =>
              this.handleCalc({
                value: "3",
                type: "number",
              })
            }
          >
            3
          </button>
          <button
            className="button"
            id="oprt"
            onClick={() =>
              this.handleCalc({
                value: "+",
                type: "operator",
              })
            }
          >
            +
          </button>
          <button
            className="button"
            id="zero"
            onClick={() =>
              this.handleCalc({
                value: "0",
                type: "number",
              })
            }
          >
            0
          </button>

          <button
            className="button"
            onClick={() =>
              this.handleCalc({
                value: ".",
                type: "number",
              })
            }
          >
            .
          </button>
          <button
            className="button"
            id="oprt"
            onClick={() => this.handleResult()}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
export default App;
