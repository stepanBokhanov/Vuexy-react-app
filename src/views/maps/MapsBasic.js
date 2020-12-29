import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import { Map, TileLayer, Marker } from "react-leaflet"

class MapsBasic extends React.Component {
  state = {
    center: [51.5074, 0.1278],
    zoom: 13
  }

  render() {
    return (
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardBody>
          <Map center={this.state.center} zoom={this.state.zoom}>
            <TileLayer
              attribution='&ampcopy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <Marker position={this.state.center} />
          </Map>
        </CardBody>
      </Card>
    )
  }
}
export default MapsBasic
