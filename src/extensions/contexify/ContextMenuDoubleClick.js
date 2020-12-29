import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import { Menu, Item, MenuProvider } from "react-contexify"
import { toast } from "react-toastify"
class ContextMenuDoubleClick extends React.Component {
  handleClick = text => {
    toast.success(text)
  }

  render() {
    const MenuLeftClick = () => {
      return (
        <Menu id="menu_double">
          <Item onClick={() => this.handleClick("Option 1")}>Option 1</Item>
          <Item onClick={() => this.handleClick("Option 2")}>Option 2</Item>
        </Menu>
      )
    }
    return (
      <Card>
        <CardHeader>
          <CardTitle>Double Click</CardTitle>
        </CardHeader>
        <CardBody>
          <MenuProvider id="menu_double" event="onDoubleClick">
            <Button color="primary" className="mb-1">
              Double Click On Me
            </Button>
          </MenuProvider>
          <MenuLeftClick />
        </CardBody>
      </Card>
    )
  }
}

export default ContextMenuDoubleClick
