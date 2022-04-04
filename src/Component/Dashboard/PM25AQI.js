import React, { Component } from "react";
import Dashboard from "../Dashboard";

class PM25AQI extends Component {
  render() {
    return (
      <Dashboard
        id="PM25AQI"
        url="https://public.tableau.com/shared/HH3YDWDMC?:display_count=y&:origin=viz_share_link"
        title="Air Quality Index"
      />
    );
  }
}

export default PM25AQI;
