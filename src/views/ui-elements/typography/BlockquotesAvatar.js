import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Media } from "reactstrap"
import img1 from "../../../assets/img/portrait/small/avatar-s-5.jpg"
import img2 from "../../../assets/img/portrait/small/avatar-s-3.jpg"

class BlockquotesAvatar extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Blockquotes with avatar</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            You can create a blockquot with avatar using <code>media</code>{" "}
            component.
          </p>
          <blockquote className="blockquote pl-1 border-left-primary border-left-3">
            <Media>
              <Media left>
                <Media
                  object
                  src={img1}
                  alt="Generic placeholder image"
                  className="img-lg mr-2"
                />
              </Media>
              <Media body>
                Sometimes life is going to hit you in the head with a brick.
                Don't lose faith.
              </Media>
            </Media>
            <footer className="blockquote-footer text-right">
              Steve Jobs
              <cite title="Source Title">Entrepreneur</cite>
            </footer>
          </blockquote>

          <blockquote className="blockquote">
            <Media>
              <Media left>
                <Media
                  object
                  src={img2}
                  alt="Generic placeholder image"
                  className="img-lg rounded-circle mr-2"
                />
              </Media>
              <Media body>
                Sometimes life is going to hit you in the head with a brick.
                Don't lose faith.
              </Media>
            </Media>
            <footer className="blockquote-footer text-right">
              Steve Jobs
              <cite title="Source Title">Entrepreneur</cite>
            </footer>
          </blockquote>
        </CardBody>
      </Card>
    )
  }
}
export default BlockquotesAvatar
