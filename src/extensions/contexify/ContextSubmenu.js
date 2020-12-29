import React from "react"
import { Card, CardHeader, CardBody, CardTitle, Button } from "reactstrap"
import { Menu, Item, Submenu, MenuProvider } from "react-contexify"
import { toast } from "react-toastify"
import { ChevronRight } from "react-feather"
class ContextSubMenu extends React.Component {
  handleClick = text => {
    toast.success(text)
  }

  render() {
    const MySubMenu = () => {
      return (
        <Menu id="submenu_id">
          <Item onClick={() => this.handleClick("Option 1")}>Option 1</Item>
          <Item onClick={() => this.handleClick("Option 2")}>Option 2</Item>
          <Item disabled>Option 3</Item>
          <Submenu label="Submenu">
            <Item onClick={() => this.handleClick("Foo Bar")}>Foo Bar</Item>
            <Submenu label="Another Submenu">
              <Item onClick={() => this.handleClick("Echo")}>Echo</Item>
              <Item onClick={() => this.handleClick("Foxtrot")}>Foxtrot</Item>
              <Item onClick={() => this.handleClick("Golf")}>Golf</Item>
            </Submenu>
          </Submenu>
        </Menu>
      )
    }

    const MySubMenuIcon = () => {
      return (
        <Menu id="submenu_icon">
          <Item onClick={() => this.handleClick("Option 1")}>Option 1</Item>
          <Item onClick={() => this.handleClick("Option 2")}>Option 2</Item>
          <Item disabled>Option 3</Item>
          <Submenu label="Submenu" arrow={<ChevronRight size={10} />}>
            <Item onClick={() => this.handleClick("Foo Bar")}>Foo Bar</Item>
            <Submenu label="Another Submenu" arrow={<ChevronRight size={10} />}>
              <Item onClick={() => this.handleClick("Echo")}>Echo</Item>
              <Item onClick={() => this.handleClick("Foxtrot")}>Foxtrot</Item>
              <Item onClick={() => this.handleClick("Golf")}>Golf</Item>
            </Submenu>
          </Submenu>
        </Menu>
      )
    }
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sub Menu</CardTitle>
        </CardHeader>
        <CardBody>
          <MenuProvider id="submenu_id" className="mr-1 mb-1 d-inline-block">
            <Button color="primary">Submenu</Button>
          </MenuProvider>
          <MenuProvider id="submenu_icon" className="mr-1 mb-1 d-inline-block">
            <Button color="primary">Submenu Icon</Button>
          </MenuProvider>
          <MySubMenu />
          <MySubMenuIcon />
        </CardBody>
      </Card>
    )
  }
}

export default ContextSubMenu
