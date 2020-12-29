import React from "react"
import { Card, CardHeader, CardBody, CardTitle } from "reactstrap"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const dragItems = [
  {
    id: "1",
    title: "Draggable Card 1",
    content:
      "Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."
  },
  {
    id: "2",
    title: "Draggable Card 2",
    content:
      "Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."
  },
  {
    id: "3",
    title: "Draggable Card 3",
    content:
      "Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."
  },
  {
    id: "4",
    title: "Draggable Card 4",
    content:
      "Jelly beans sugar plum cheesecake cookie oat cake soufflé.Tootsie roll bonbon liquorice tiramisu pie powder.Donut sweet roll marzipan pastry cookie cake tootsie roll oat cake cookie."
  }
]

// get data from array
const getItems = count =>
  dragItems.map(k => ({
    id: k.id,
    title: k.title,
    content: k.content
  }))

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

class DndHorizontal extends React.Component {
  state = {
    items: getItems(),
    direction: "horizontal",
    deviceWidth: window.width
  }

  updateDnd = () => {
    this.setState({
      deviceWidth: window.innerWidth
    })
    if (this.state.deviceWidth <= 992) {
      this.setState({
        direction: "vertical"
      })
    } else {
      this.setState({
        direction: "horizontal"
      })
    }
  }
  componentDidMount() {
    this.updateDnd()
  }

  componentDidUpdate(prevProps, prevState) {
    window.addEventListener("resize", this.updateDnd)
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
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable" direction={this.state.direction}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="d-flex flex-sm-wrap flex-lg-nowrap draggable-cards"
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card
                        className={`draggable-cards ${
                          item.id !== 4 ? "mr-1" : null
                        }`}
                      >
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                        </CardHeader>
                        <CardBody>{item.content}</CardBody>
                      </Card>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }
}

export default DndHorizontal
