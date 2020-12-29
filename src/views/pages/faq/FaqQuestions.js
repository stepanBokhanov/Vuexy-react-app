import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Collapse } from "reactstrap"
import { ChevronDown } from "react-feather"
import classnames from "classnames"

const collapseItems = [
  {
    id: 1,
    title: "What does royalty free mean?",
    content:
      "Royalty free means you just need to pay for rights to use the item once per end product. You don't need to pay additional or ongoing fees for each person who sees or uses it. Please note that there may be some limits placed on uses under the different license types available on the marketplaces, such as our Photo and Music Licenses."
  },
  {
    id: 2,
    title: "What do you mean by item and end product?",
    content:
      "The item is what you purchase from Envato Market. The end product is what you build with that item. Example: The item is a business card template the end product is the finalized business card. The item is a button graphic the end product is an app using the button graphic in the app's interface."
  },
  {
    id: 3,
    title: "Am I allowed to modify the item that I purchased?",
    content:
      "Yes. You can customize our items to fit the needs of your end product. Example: You could change the colors, text, and layout of a flyer template or convert an HTML template into a WordPress theme for a single client."
  },
  {
    id: 4,
    title: "What does non-exclusive mean?",
    content:
      "Non-exclusive means that you are not the only person with access to the item. Others will also be licensing and using the same item."
  },
  {
    id: 5,
    title: "Is the Regular License the same thing as an editorial license?",
    content:
      "No, our Regular License is for a free end product (whether or not the item is used in the end product in an editorial way). And our Extended License is for an end product that's sold (whether or not the item is used in the end product in an editorial way). If you want to use an item in an editorial way in your end product, choose the Regular License if your end product is distributed for free, and choose the Extended License if your end product is sold to the end customer."
  },
  {
    id: 6,
    title:
      "Which license do I need for an end product that is only accessible to paying users?",
    content:
      "If the end users need to pay to see the end product, you need an Extended License. There can be more than one end user as long as there is only one end product. Example: A website that requires money before you can access the content."
  },
  {
    id: 7,
    title: "Which license do I need to use an item in a commercial?",
    content:
      "You only need a Regular License where the end product is an advertisement, as the audience does not have to pay to view it. It doesn't matter if the advertisement is for things that are being sold. Example: An After Effects template used to produce a TV commercial would only need the Regular License."
  },
  {
    id: 8,
    title: "Can I re-distribute an item? What about under an Extended License?",
    content:
      "No. You can't license items and then make them available to others 'as-is' (that is, as a stand-alone item or as stock), regardless of which license you purchase. Example: You can't buy a business card template and distribute it as a template, source files and all."
  },
  {
    id: 9,
    title: "Can multiple people within my company have access to the item?",
    content:
      "Yes. If you purchased a single-use license, access should only be given to people working on the single end product incorporating that item."
  },
  {
    id: 10,
    title: "Can I store the item on an intranet so everyone has access?",
    content:
      "No, items must be stored in a location where only those who need them have access. If you purchased a single-use license, once the item has been used in a single end product, the only place you should store it is in the archive files for that end product."
  },
  {
    id: 11,
    title: "Does this apply to all items from Envato Market?",
    content:
      "No. This only applies to items with real-world products and trademarks in the actual item. This is most likely in product mock-ups (graphics items), product promos (motion graphics project files) and 3D items. This does not apply to PhotoDune items, which are available for commercial use. This also does not apply to images of products and trademarks used illustratively in item previews, as they're not included in the item you download."
  },
  {
    id: 12,
    title: "What does 'editorial use' mean?",
    content:
      "Editorial use means using an item only for news or journalistic purposes like in blogs, magazine and newspaper editorial applications."
  },
  {
    id: 13,
    title: "Is this item still 'royalty free'?",
    content:
      "Yes. Royalty free means you pay for the item once for each end product, and you don't need to pay any additional or ongoing fees for each person who sees or uses it. This is separate to whether you need a clearance from the owner of rights in the real world product or trademark within an item."
  }
]

class FaqQuestions extends React.Component {
  state = {
    collapseID: "",
    status: "Closed"
  }

  toggleCollapse = collapseID => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }))
  }

  onEntered = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opened" })
  }
  onEntering = id => {
    if (id === this.state.collapseID) this.setState({ status: "Opening..." })
  }

  onExited = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closed" })
  }

  onExiting = id => {
    if (id === this.state.collapseID) this.setState({ status: "Closing..." })
  }

  render() {
    const accordionMarginItems = collapseItems.map(collapseItem => {
      if (this.props.value > 0) {
        return (
          <div
            className="collapse-margin accordion vx-collapse"
            key={collapseItem.id}
          >
            <Card
              onClick={() => this.toggleCollapse(collapseItem.id)}
              className={classnames("shadow-none", {
                "collapse-collapsed":
                  this.state.status === "Closed" &&
                  this.state.collapseID === collapseItem.id,
                "collapse-shown":
                  this.state.status === "Opened" &&
                  this.state.collapseID === collapseItem.id,
                closing:
                  this.state.status === "Closing..." &&
                  this.state.collapseID === collapseItem.id,
                opening:
                  this.state.status === "Opening..." &&
                  this.state.collapseID === collapseItem.id
              })}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed text-truncate w-75">
                  {collapseItem.title}
                </CardTitle>
                <ChevronDown className="collapse-icon" size={15} />
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={() => this.onEntering(collapseItem.id)}
                onEntered={() => this.onEntered(collapseItem.id)}
                onExiting={() => this.onExiting(collapseItem.id)}
                onExited={() => this.onExited(collapseItem.id)}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          </div>
        )
      } else if (collapseItem.title.toLowerCase().includes(this.props.value)) {
        return (
          <div
            className="collapse-margin accordion vx-collapse"
            key={collapseItem.id}
          >
            <Card
              onClick={() => this.toggleCollapse(collapseItem.id)}
              className={classnames("shadow-none", {
                "collapse-collapsed":
                  this.state.status === "Closed" &&
                  this.state.collapseID === collapseItem.id,
                "collapse-shown":
                  this.state.status === "Opened" &&
                  this.state.collapseID === collapseItem.id,
                closing:
                  this.state.status === "Closing..." &&
                  this.state.collapseID === collapseItem.id,
                opening:
                  this.state.status === "Opening..." &&
                  this.state.collapseID === collapseItem.id
              })}
            >
              <CardHeader>
                <CardTitle className="lead collapse-title collapsed text-truncate w-75">
                  {collapseItem.title}
                </CardTitle>
                <ChevronDown className="collapse-icon" size={15} />
              </CardHeader>
              <Collapse
                isOpen={collapseItem.id === this.state.collapseID}
                onEntering={() => this.onEntering(collapseItem.id)}
                onEntered={() => this.onEntered(collapseItem.id)}
                onExiting={() => this.onExiting(collapseItem.id)}
                onExited={() => this.onExited(collapseItem.id)}
              >
                <CardBody>{collapseItem.content}</CardBody>
              </Collapse>
            </Card>
          </div>
        )
      }else{
        return null
      }
      
    })
    return <div> {accordionMarginItems}</div>
  }
}
export default FaqQuestions
