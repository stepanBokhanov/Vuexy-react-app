import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

class MapEvents extends React.Component {
  state = {
    hasLocation: false,
    latlng: {
      lat: 51.505,
      lng: -0.09
    }
  }

  mapRef = React.createRef()

  handleClick = () => {
    const map = this.mapRef.current
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  handleLocationFound = e => {
    this.setState({
      hasLocation: true,
      latlng: e.latlng
    })
  }

  render() {
    const marker = this.state.hasLocation ? (
      <Marker position={this.state.latlng}>
        <Popup>You are here</Popup>
      </Marker>
    ) : null
    return (
      <Card>
        <CardHeader>
          <CardTitle>Event Handling</CardTitle>
        </CardHeader>
        <CardBody>
          <p>Click on map to get to your current location.</p>
          <Map
            center={this.state.latlng}
            length={4}
            onClick={this.handleClick}
            onLocationfound={this.handleLocationFound}
            ref={this.mapRef}
            zoom={13}
          >
            <TileLayer
              attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {marker}
          </Map>
        </CardBody>
      </Card>
    )
  }
}
export default MapEvents
