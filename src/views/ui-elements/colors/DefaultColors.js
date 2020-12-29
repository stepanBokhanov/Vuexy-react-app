import React from 'react'
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'
import { ChevronsRight } from "react-feather"


class DefaultColors extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Default Colors</CardTitle>
        </CardHeader>
        <CardBody>
          <p>We have a series of colors that are used by default. They include:</p>
          <ul className="colors-list list-unstyled">
            <li>
              <ChevronsRight size="18" />
              Primary
            </li>
            <li>
              <ChevronsRight size="18" />
              Success
            </li>
            <li>
              <ChevronsRight size="18" />
              Danger
            </li>
            <li>
              <ChevronsRight size="18" />
              Warning
            </li>
            <li>
              <ChevronsRight size="18" />
              Info
            </li>
          </ul>
          <p>For each color, we think has its functionality in the application as alerts of errors <b>(danger)</b>,
              warnings to the user <b>(warning)</b>, communications of approval <b>(success)</b>, or main color of the
              application <b>(primary)</b>.
          </p>
          <div className="d-flex justify-content-start flex-wrap">
            <div className="text-center bg-primary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
              <span className="align-middle">Primary</span>
            </div>
            <div className="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow">
              <span className="align-middle">Success</span>
            </div>
            <div className="text-center bg-danger colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow">
              <span className="align-middle">Danger</span>
            </div>
            <div className="text-center bg-warning colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50  my-1 shadow">
              <span className="align-middle">Warning</span>
            </div>
            <div className="text-center bg-info colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow">
              <span className="align-middle">Info</span>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default DefaultColors
