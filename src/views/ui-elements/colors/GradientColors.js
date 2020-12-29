import React from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { ChevronsRight } from "react-feather"


class GradientColors extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Gradient Colors</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            We have created gradient colors based on our default colors, use below mentioned classes for gradient colors.
          </p>
          <ul className="colors-list list-unstyled mb-0">
            <li>
              <ChevronsRight size="18" /> bg-gradient-primary
              </li>
            <li>
              <ChevronsRight size="18" /> bg-gradient-success
              </li>
            <li>
              <ChevronsRight size="18" /> bg-gradient-danger
              </li>
            <li>
              <ChevronsRight size="18" /> bg-gradient-warning
              </li>
            <li>
              <ChevronsRight size="18" /> bg-gradient-info
              </li>
          </ul>
          <div className="d-flex justify-content-start flex-wrap">
            <div className="text-center colors-container bg-gradient-primary rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
              <span className="align-middle">Primary gradient</span>
            </div>
            <div className="text-center colors-container bg-gradient-success rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow">
              <span className="align-middle">Success gradient</span>
            </div>
            <div className="text-center colors-container bg-gradient-danger rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow">
              <span className="align-middle">Danger gradient</span>
            </div>
            <div className="text-center colors-container bg-gradient-warning rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow">
              <span className="align-middle">Warning gradient</span>
            </div>
            <div className="text-center colors-container bg-gradient-info rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow px-1">
              <span className="align-middle">Info gradient</span>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default GradientColors
