import React, { Component, createRef } from "react";

const { tableau } = window;

class Dashboard extends Component {
  constructor() {
    super();
    this.ref = createRef();
  }
  option = { hideTabs: true, device: "desktop" };

  initVitz() {
    new tableau.Viz(this.ref.current, this.props.url, this.option);
  }

  componentDidMount() {
    this.initVitz();
  }

  render() {
    return (
      <div
        id={this.props.id}
        style={{
          width: "100%",
          height: "100%",
          paddingTop: 50,
        }}
      >
        <p>{this.props.title}</p>
        <div
          style={{
            borderStyle: "solid",
            borderWidth: 10,
            borderColor: "#ffcdba",
          }}
          ref={this.ref}
        ></div>
      </div>
    );
  }
}

export default Dashboard;
