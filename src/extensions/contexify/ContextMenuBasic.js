import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import { Menu, Item, MenuProvider } from "react-contexify"
import { toast } from "react-toastify"
class ContextMenuBasic extends React.Component {
  handleClick = text => {
    toast.success(text)
  }

  render() {
    const MyBasicMenu = () => {
      return (
        <Menu id="menu_id">
          <Item onClick={() => this.handleClick("Option 1")}>Option 1</Item>
          <Item onClick={() => this.handleClick("Option 2")}>Option 2</Item>
        </Menu>
      )
    }
    return (
      <Card>
        <CardHeader>
          <CardTitle>Basic Context Menu</CardTitle>
        </CardHeader>
        <CardBody>
          <MenuProvider id="menu_id">
            <Button color="primary">Right Click On Me</Button>
          </MenuProvider>
          <MyBasicMenu />
        </CardBody>
      </Card>
    )
  }
}

export default ContextMenuBasic
