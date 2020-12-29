import React from "react"
import { Card, CardBody, Progress, Button } from "reactstrap"
import { ChevronsRight } from "react-feather"

class Funds extends React.Component {
  render() {
    return (
      <Card>
        <CardBody>
          <h1 className="mb-0">
            <sup className="font-medium-3 mr-50">$</sup>
            23,597
          </h1>
          <small>
            <span className="text-muted">Deposits: </span>$20,065
          </small>
          <h5 className="mt-1">
            <span className="text-success">+5.2% ($956)</span>
          </h5>
          <Button.Ripple
            block
            color="primary"
            className="w-100 box-shadow-1 mt-2"
          >
            Add Funds <ChevronsRight size={15} />
          </Button.Ripple>
          <hr className="my-2" />
          <small>Earned: $56,156</small>
          <Progress className="mt-1 mb-2" color="success" value="50" />

          <small>Duration: 2y</small>
          <Progress className="mt-1" color="warning" value="50" />
        </CardBody>
      </Card>
    )
  }
}
export default Funds
