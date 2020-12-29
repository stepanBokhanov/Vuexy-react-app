import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"

const Icon1 = new L.Icon({
  iconUrl: require("../../assets/img/svg/map-marker.png"),
  iconRetinaUrl: require("../../assets/img/svg/map-marker.png"),
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [55, 55],
  shadowSize: [68, 95],
  shadowAnchor: [20, 92]
})

const Icon2 = new L.Icon({
  iconUrl: require("../../assets/img/svg/map-marker-3.png"),
  iconRetinaUrl: require("../../assets/img/svg/map-marker-3.png"),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [55, 55],
  shadowSize: [29, 40],
  shadowAnchor: [7, 40]
})

class MapCustomIcon extends React.Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 15
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    const position2 = [51.501, -0.09]
    return (
      <Card>
        <CardHeader>
          <CardTitle>Custom Icons</CardTitle>
        </CardHeader>
        <CardBody>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={Icon1}>
              <Popup>This is a popup</Popup>
            </Marker>
            <Marker position={position2} icon={Icon2}>
              <Popup>You're here.</Popup>
            </Marker>
          </Map>
        </CardBody>
      </Card>
    )
  }
}
export default MapCustomIcon
