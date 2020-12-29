import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import { Menu, Item, MenuProvider, animation } from "react-contexify"
import { toast } from "react-toastify"
class ContextMenuAnimations extends React.Component {
  handleClick = text => {
    toast.success(text)
  }

  render() {
    const FadeMenu = () => {
      return (
        <Menu id="fade" animation={animation.fade}>
          <Item onClick={() => this.handleClick("Option 1")}>Option 1</Item>
          <Item onClick={() => this.handleClick("Option 2")}>Option 2</Item>
        </Menu>
      )
    }
    const FlipMenu = () => {
      return (
        <Menu id="flip" animation={animation.flip}>
          <Item onClick={() => this.handleClick("Option 1")}>Option 1</Item>
          <Item onClick={() => this.handleClick("Option 2")}>Option 2</Item>
        </Menu>
      )
    }

    const PopMenu = () => {
      return (
        <Menu id="pop" animation={animation.pop}>
          <Item onClick={() => this.handleClick("Option 1")}>Option 1</Item>
          <Item onClick={() => this.handleClick("Option 2")}>Option 2</Item>
        </Menu>
      )
    }

    const ZoomMenu = () => {
      return (
        <Menu id="zoom" animation={animation.zoom}>
          <Item onClick={() => this.handleClick("Option 1")}>Option 1</Item>
          <Item onClick={() => this.handleClick("Option 2")}>Option 2</Item>
        </Menu>
      )
    }
    return (
      <Card>
        <CardHeader>
          <CardTitle>Animations</CardTitle>
        </CardHeader>
        <CardBody>
          <MenuProvider id="fade" className="mb-1 mr-1 d-inline-block">
            <Button color="primary">Fade</Button>
          </MenuProvider>
          <MenuProvider id="flip" className="mb-1 mr-1 d-inline-block">
            <Button color="primary">Flip</Button>
          </MenuProvider>
          <MenuProvider id="pop" className="mb-1 mr-1 d-inline-block">
            <Button color="primary">Pop</Button>
          </MenuProvider>
          <MenuProvider id="zoom" className="mb-1 mr-1 d-inline-block">
            <Button color="primary">Zoom</Button>
          </MenuProvider>
          <FadeMenu />
          <FlipMenu />
          <PopMenu />
          <ZoomMenu />
        </CardBody>
      </Card>
    )
  }
}

export default ContextMenuAnimations
