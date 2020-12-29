import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

class App extends React.Component {
  state = {
    center: {
      lat: 51.505,
      lng: -0.09
    },
    marker: {
      lat: 51.505,
      lng: -0.09
    },
    zoom: 13,
    draggable: true
  }

  refmarker = React.createRef()

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable })
  }

  updatePosition = () => {
    const marker = this.refmarker.current
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng()
      })
    }
  }

  render() {
    const position = [this.state.center.lat, this.state.center.lng]
    const markerPosition = [this.state.marker.lat, this.state.marker.lng]
    return (
      <Card>
        <CardHeader>
          <CardTitle>Draggable Marker</CardTitle>
        </CardHeader>
        <CardBody>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              draggable={this.state.draggable}
              onDragend={this.updatePosition}
              position={markerPosition}
              ref={this.refmarker}
            >
              <Popup minWidth={90}>
                <span onClick={this.toggleDraggable}>
                  {this.state.draggable ? "DRAG MARKER" : "MARKER FIXED"}
                </span>
              </Popup>
            </Marker>
          </Map>
        </CardBody>
      </Card>
    )
  }
}
export default App
