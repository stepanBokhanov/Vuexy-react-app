import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import { Menu, Item, MenuProvider } from "react-contexify"
import { toast } from "react-toastify"
class ContextMenuLeftClick extends React.Component {
  handleClick = text => {
    toast.success(text)
  }

  render() {
    const MenuLeftClick = () => {
      return (
        <Menu id="menu_left">
          <Item onClick={() => this.handleClick("Option 1")}>Option 1</Item>
          <Item onClick={() => this.handleClick("Option 2")}>Option 2</Item>
        </Menu>
      )
    }
    return (
      <Card>
        <CardHeader>
          <CardTitle>Left Click</CardTitle>
        </CardHeader>
        <CardBody>
          <MenuProvider id="menu_left" event="onClick">
            <Button color="primary">Left Click On Me</Button>
          </MenuProvider>
          <MenuLeftClick />
        </CardBody>
      </Card>
    )
  }
}

export default ContextMenuLeftClick
