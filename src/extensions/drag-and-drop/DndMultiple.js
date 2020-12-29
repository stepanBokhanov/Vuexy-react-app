import React from "react"
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Media,
  Row,
  Col
} from "reactstrap"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import img1 from "../../assets/img/portrait/small/avatar-s-12.jpg"
import img2 from "../../assets/img/portrait/small/avatar-s-1.jpg"
import img3 from "../../assets/img/portrait/small/avatar-s-2.jpg"
import img4 from "../../assets/img/portrait/small/avatar-s-3.jpg"
import img5 from "../../assets/img/portrait/small/avatar-s-4.jpg"
import img6 from "../../assets/img/portrait/small/avatar-s-5.jpg"
import img7 from "../../assets/img/portrait/small/avatar-s-6.jpg"
import img8 from "../../assets/img/portrait/small/avatar-s-7.jpg"
import img9 from "../../assets/img/portrait/small/avatar-s-8.jpg"
import img10 from "../../assets/img/portrait/small/avatar-s-9.jpg"

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
      "Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupa."
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

const listItems2 = [
  {
    id: "6",
    img: img6,
    name: "Alexandria I. Smelser",
    content: "Toffee powder marzipan tiramisu. Cake cake dessert danish."
  },
  {
    id: "7",
    img: img7,
    name: "Oscar N. Pool",
    content:
      "Sugar plum fruitcake gummies marzipan liquorice tiramisu. Pastry liquorice chupsake."
  },
  {
    id: "8",
    img: img8,
    name: "Kathy A. Alvarado",
    content:
      "Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."
  },
  {
    id: "9",
    img: img9,
    name: "James E. White",
    content: "Toffee powder marzipan tiramisu. Cake cake dessert danish."
  },
  {
    id: "10",
    img: img10,
    name: "Roberta R. Babin",
    content:
      "Chupa chups tiramisu apple pie biscuit sweet roll bonbon macaroon toffee icing."
  }
]

// get data from array
const getItems = arr =>
  arr.map(k => ({
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

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

class DndMultiple extends React.Component {
  state = {
    items: getItems(listItems),
    selected: getItems(listItems2)
  }

  id2List = {
    droppable: "items",
    droppable2: "selected"
  }

  getList = id => this.state[this.id2List[id]]

  onDragEnd = result => {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      )

      let state = { items }

      if (source.droppableId === "droppable2") {
        state = { selected: items }
      }

      this.setState(state)
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      )

      this.setState({
        items: result.droppable,
        selected: result.droppable2
      })
    }
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Multiple Drop Target</CardTitle>
        </CardHeader>
        <CardBody>
          <div>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <Row>
                <Col md="6" sm="12">
                  <h4 className="my-1">People Group 1</h4>
                  <ListGroup flush>
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
                  </ListGroup>
                </Col>
                <Col md="6" sm="12">
                  <h4 className="my-1">People Group 2</h4>
                  <ListGroup flush>
                    <Droppable droppableId="droppable2">
                      {(provided, snapshot) => (
                        <div ref={provided.innerRef}>
                          {this.state.selected.map((item, index) => (
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
                  </ListGroup>
                </Col>
              </Row>
            </DragDropContext>
          </div>
        </CardBody>
      </Card>
    )
  }
}

export default DndMultiple
