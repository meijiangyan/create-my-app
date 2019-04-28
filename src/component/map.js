import React, { Component } from 'react';

class Map extends Component {
    constructor() {
      super();
      this.state = { initialized: false };
      this.map = null;
    }
  initializeMap() {
      this.setState({ initialized: true });
      // 加载第三方 Google map
      loadScript("https://maps.google.com/maps/api/js?key=<your_key>", () => {
        const latlng = new google.maps.LatLng(38.34, -0.48);
        const myOptions = { zoom: 15, center: latlng };
        const map = new google.maps.Map(this.map, myOptions);
      });
    }
  componentDidMount() {
      if (this.props.isVisible) {
        this.initializeMap();
      }
    }
  componentWillReceiveProps(nextProps) {
      if (!this.state.initialized && nextProps.isVisible) {
        this.initializeMap();
      }
    }
  render() {
      return (
        <div
          ref={div => {
            this.map = div;
          }}
        />
      );
    }
  }

export default Map;