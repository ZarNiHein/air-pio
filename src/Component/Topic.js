import React, { Component } from "react";

class Topic extends Component {
  render() {
    return (
      <div id="Topic" className="mr-auto pt-3">
        <h2>What is Air Pollution?</h2>
        <p style={{ textAlign: "justify", fontSize: "3vh" }}>
          Air pollution is the presence of substances in the atmosphere that are
          harmful to the health of humans and other living beings, or cause
          damage to the climate or to materials. There are different types of
          air pollutants, such as gases (such as ammonia, carbon monoxide,
          sulfur dioxide, nitrous oxides, methane and chlorofluorocarbons),
          particulates (both organic and inorganic), and biological molecules.
          Air pollution may cause diseases, allergies and even death to humans;
          it may also cause harm to other living organisms such as animals and
          food crops, and may damage the natural or built environment. Both
          human activity and natural processes can generate air pollution.
        </p>
      </div>
    );
  }
}

export default Topic;
