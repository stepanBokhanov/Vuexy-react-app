import React from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap"
import { Link } from "react-router-dom"
import { ChevronsRight, ChevronsLeft } from "react-feather"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import img1 from "../../../assets/img/pages/kb-article.jpg"
import "../../../assets/scss/pages/knowledge-base.scss"
class Question extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Question"
          breadCrumbParent="Pages"
          breadCrumbParent2="Knowledge Base"
          breadCrumbParent3="Content"
          breadCrumbActive="Question"
        />
        <Row>
          <Col lg="3" md="5" sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Related Questions</CardTitle>
              </CardHeader>
              <CardBody className="knowledge-base-category">
                <ListGroup flush>
                  <ListGroupItem tag="a" href="#">
                    Cake icing gummi bears?
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Jelly soufflé apple pie?
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Soufflé apple pie ice cream cotton?
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Powder wafer brownie?
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Toffee donut dragée cotton candy?
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    Soufflé chupa chups chocolate bar?
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col lg="9" md="7" sm="12">
            <Card>
              <CardHeader>
                <h1>Dessert halvah carrot cake sweet?</h1>
                <p>Last updated on 10 Dec 2018</p>
              </CardHeader>
              <CardBody>
                <p>
                  Pastry jelly chocolate bar caramels fruitcake gummies
                  marshmallow lemon drops. Powder cupcake topping muffin carrot
                  cake croissant soufflé sugar plum sweet roll. Cotton candy ice
                  cream gummies biscuit bonbon biscuit. Icing pastry bonbon.
                  Sweet roll chocolate cake liquorice jelly beans caramels jelly
                  cookie caramels. Pastry candy canes cake powder lollipop
                  tootsie roll sugar plum. Cake cotton candy dragée danish.
                  Muffin croissant sweet roll candy wafer marzipan cheesecake.
                  Carrot cake toffee gummi bears gingerbread donut biscuit.
                  Donut chupa chups oat cake cheesecake apple pie gummies
                  marzipan icing cake. Macaroon jelly beans gummi bears carrot
                  cake tiramisu liquorice. Sweet tootsie roll cookie marzipan
                  brownie icing cookie jelly tart. Lollipop cookie tootsie roll
                  candy canes.
                </p>
                <img
                  src={img1}
                  alt="article img"
                  className="img-fluid rounded-sm mb-1 w-100"
                />
                <p>
                  Candy canes oat cake biscuit halvah ice cream. Marshmallow
                  icing topping toffee caramels dessert carrot cake. Liquorice
                  soufflé brownie sugar plum dessert cotton candy. Cupcake
                  halvah topping oat cake soufflé pastry dragée pudding cotton
                  candy.
                </p>
                <h5 className="mb-1">Topics:</h5>
                <ul className="article-question p-0 list-unstyled">
                  <li>
                    <ChevronsRight size={16} />
                    <span className="align-middle">
                      Pastry jelly chocolate bar caramels
                    </span>
                  </li>
                  <li>
                    <ChevronsRight size={16} />
                    <span className="align-middle">
                      Donut chupa chups oat cake
                    </span>
                  </li>
                  <li>
                    <ChevronsRight size={16} />
                    <span className="align-middle">
                      Marshmallow icing topping toffee caramels dessert carrot
                      cake
                    </span>
                  </li>
                </ul>
                <p className="mt-2">
                  Chocolate cake powder I love jelly beans lemon drops candy
                  fruitcake. Sesame snaps sugar plum chocolate candy canes
                  muffin. Wafer pastry topping croissant pudding dessert I love.
                  Bonbon apple pie fruitcake candy canes I love. Lollipop sweet
                  gingerbread I love I love dessert. I love halvah marshmallow
                  pie jelly beans macaroon candy. Bonbon ice cream lollipop pie
                  fruitcake oat cake. Topping marshmallow I love sesame snaps
                  dragée. I love sesame snaps jelly. Chocolate sesame snaps
                  jelly I love I love powder jelly-o.
                </p>
                <div className="d-flex justify-content-between mt-2">
                  <Link to="#">
                    <ChevronsLeft size={15} />
                    <span className="align-middle">Previous Article</span>
                  </Link>
                  <Link to="#">
                    <span className="align-middle">Next Article</span>
                    <ChevronsRight size={15} />
                  </Link>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}
export default Question
