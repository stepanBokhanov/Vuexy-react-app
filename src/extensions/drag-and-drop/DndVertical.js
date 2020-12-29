import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Media
} from "reactstrap"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import img1 from "../../assets/img/portrait/small/avatar-s-12.jpg"
import img2 from "../../assets/img/portrait/small/avatar-s-1.jpg"
import img3 from "../../assets/img/portrait/small/avatar-s-2.jpg"
import img4 from "../../assets/img/portrait/small/avatar-s-3.jpg"
import img5 from "../../assets/img/portrait/small/avatar-s-4.jpg"

const listItems = [
  {
    id: "1",
    img: img1,
    name: "Mary S. Navarre",
    content:
      "Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."
  },
  {
    id: "2",
    img: img2,
    name: "Samuel M. Ellis",
    content: "Toffee powder marzipan tiramisu. Cake cake dessert danish."
  },
  {
    id: "3",
    img: img3,
    name: "Sandra C. Toney",
    content:
      "Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa chupsake."
  },
  {
    id: "4",
    img: img4,
    name: "Cleveland C. Goins",
    content: "Toffee powder marzipan tiramisu. Cake cake dessert danish."
  },
  {
    id: "5",
    img: img5,
    name: "Linda M. English",
    content:
      "Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."
  }
]

// get data from array
const getItems = count =>
  listItems.map(k => ({
    id: k.id,
    content: k.content,
    img: k.img,
    name: k.name
  }))

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

class DndVertical extends React.Component {
  state = {
    items: getItems()
  }

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    )

    this.setState({
      items
    })
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Basic List Group Sortable</CardTitle>
        </CardHeader>
        <CardBody>
          <ListGroup id="list-group-dnd">
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div ref={provided.innerRef}>
                    {this.state.items.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="drag-wrapper"
                          >
                            <ListGroupItem>
                              <Media>
                                <Media left tag="div">
                                  <Media
                                    object
                                    src={item.img}
                                    className="rounded-circle mr-2"
                                    alt="Generic placeholder image"
                                    height="50"
                                    width="50"
                                  />
                                </Media>
                                <Media body>
                                  <h5 className="mt-0">{item.name}</h5>
                                  {item.content}
                                </Media>
                              </Media>
                            </ListGroupItem>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </ListGroup>
        </CardBody>
      </Card>
    )
  }
}

export default DndVertical
