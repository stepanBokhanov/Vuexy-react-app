import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import { Menu, Item, MenuProvider, theme } from "react-contexify"
import { toast } from "react-toastify"
class ContextMenuDark extends React.Component {
  handleClick = text => {
    toast.success(text)
  }

  render() {
    const MyBasicMenu = () => {
      return (
        <Menu id="menu_dark" theme={theme.dark}>
          <Item onClick={() => this.handleClick("Option 1")}>Option 1</Item>
          <Item onClick={() => this.handleClick("Option 2")}>Option 2</Item>
        </Menu>
      )
    }
    return (
      <Card>
        <CardHeader>
          <CardTitle>Dark Menu</CardTitle>
        </CardHeader>
        <CardBody>
          <MenuProvider id="menu_dark">
            <Button color="primary" className="mb-1">
              Dark Menu
            </Button>
          </MenuProvider>
          <MyBasicMenu />
        </CardBody>
      </Card>
    )
  }
}

export default ContextMenuDark
