import React, { useRef, useEffect, Component, createRef } from "react";
import Dashboard from "../Dashboard";

const { tableau } = window;

class HealthRisk extends Component {
  render() {
    return (
      <Dashboard
        id="HealthRisk"
        url="https://public.tableau.com/views/NearACYHourlyHealthRisk/NearACYHourlyHealthRisk?:language=en&:display_count=y&publish=yes&:origin=viz_share_link"
        title="Hourly Health Risk"
      />
    );
  }
}

export default HealthRisk;
