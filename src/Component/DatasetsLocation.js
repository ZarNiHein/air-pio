import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

export default class DatasetsLocation extends Component {
  render() {
    const defaultProps = {
      center: {
        lat: 47.444,
        lng: -122.176,
      },
      zoom: 11,
    };
    return (
      <div className="pt-3 pb-5" style={{ height: "100vh", width: "100%" }}>
        <p>Dataseta Location</p>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        />
      </div>
    );
  }
}
