import React from "react"
import {
  Card,
  CardBody,
  Media,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap"
import { Star, ChevronRight, ChevronLeft } from "react-feather"
import searchResult from "../../../assets/img/pages/search-result.jpg"

class SearchCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Card>
          <CardBody className="search-results pb-0">
            <div className="media-list p-0">
              <Media>
                <Media className="w-100" body>
                  <h3 className="mb-0 text-bold-400">
                    <a
                      href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
                    </a>
                  </h3>
                  <p className="mb-0">
                    <a
                      href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"
                      className="success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent
                    </a>
                  </p>
                  <ul className="list-inline list-inline-pipe mb-0">
                    <li>
                      <Star fill="#FF8510" stroke="#FF8510" size={16} />
                      <Star fill="#FF8510" stroke="#FF8510" size={16} />
                      <Star fill="#FF8510" stroke="#FF8510" size={16} />
                      <Star fill="#FF8510" stroke="#FF8510" size={16} />
                      <Star fill="#FF8510" stroke="#FF8510" size={16} />
                      &nbsp&nbsp&nbsp25 reviews&nbsp
                    </li>
                    <li>25.00 USD &nbsp</li>
                    <li>In Stock</li>
                  </ul>
                  <p>
                    10 Dec 2018 - Cake sesame snaps cupcake gingerbread danish I
                    love gingerbread. Apple pie pie jujubes chupa chups muffin
                    halvah lollipop. Chocolate cake oat cake tiramisu marzipan
                    sugar plum. Donut sweet pie oat cake dragée fruitcake
                    cotton...
                  </p>
                  <div className="website-detailed-list mx-1 my-1">
                    <Row>
                      <Col md="4" sm="6" className="pl-0">
                        <div className="content-group">
                          <Media className="w-100" body>
                            <p className="mb-0">
                              <a
                                href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Dashboard
                              </a>
                            </p>
                            <p>
                              Halvah marzipan icing chocolate caramels candy
                              can...
                            </p>
                          </Media>
                        </div>
                      </Col>
                      <Col md="4" sm="6" className="pl-0">
                        <div className="content-group">
                          <Media className="w-100" body>
                            <p className="mb-0">
                              <a
                                href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Support
                              </a>
                            </p>
                            <p>
                              Carrot cake sweet soufflé cake bear claw
                              lollipop....
                            </p>
                          </Media>
                        </div>
                      </Col>
                      <Col md="4" sm="6" className="pl-0">
                        <div className="content-group">
                          <Media className="w-100" body>
                            <p className="mb-0">
                              <a
                                href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                UI Components
                              </a>
                            </p>
                            <p>
                              Brownie lollipop chocolate bar chocolate cake
                              maca...
                            </p>
                          </Media>
                        </div>
                      </Col>
                      <Col md="4" sm="6" className="pl-0">
                        <div className="content-group">
                          <Media className="w-100" body>
                            <p className="mb-0">
                              <a
                                href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Charts
                              </a>
                            </p>
                            <p>
                              Gingerbread chupa chups toffee jelly chocolate
                              cak...
                            </p>
                          </Media>
                        </div>
                      </Col>
                      <Col md="4" sm="6" className="pl-0">
                        <div className="content-group">
                          <Media className="w-100" body>
                            <p className="mb-0">
                              <a
                                href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Form Elements
                              </a>
                            </p>
                            <p>
                              Lollipop cake wafer. Candy chocolate toffee
                              icing....
                            </p>
                          </Media>
                        </div>
                      </Col>
                      <Col md="4" sm="6" className="pl-0">
                        <div className="content-group">
                          <Media className="w-100" body>
                            <p className="mb-0">
                              <a
                                href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Documentation
                              </a>
                            </p>
                            <p>
                              Powder brownie candy toffee soufflé. Gingerbread
                              s...
                            </p>
                          </Media>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Media>
              </Media>
              <Media className="d-block d-sm-flex">
                <Media left className="pr-sm-2 pr-0" href="#">
                  <Media
                    object
                    src={searchResult}
                    alt="Generic placeholder image"
                  />
                </Media>
                <Media className="pr-sm-50 pr-0" body>
                  <h3 className="text-bold-400 mb-0">
                    <a
                      href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Attire bench - Quick win shoot me an email
                    </a>
                  </h3>
                  <p className="mb-0">
                    <a
                      href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"
                      className="success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent
                    </a>
                  </p>
                  <ul className="list-inline list-inline-pipe mb-0">
                    <li>
                      <Star fill="#FF8510" stroke="#FF8510" size={16} />
                      <Star fill="#FF8510" stroke="#FF8510" size={16} />
                      <Star fill="#FF8510" stroke="#FF8510" size={16} />
                      <Star fill="#FF8510" stroke="#FF8510" size={16} />
                      &nbsp&nbsp&nbsp17 reviews&nbsp
                    </li>
                    <li>12 votes &nbsp</li>
                    <li>28.00 USD &nbsp</li>
                    <li>In Stock</li>
                  </ul>
                  <p>
                    23 Feb 2017 - Tiramisu soufflé gummies ice cream liquorice
                    gingerbread sweet roll. Cake cotton candy candy ice cream
                    muffin donut soufflé danish. Dessert jelly beans wafer
                    cheesecake. Sugar plum gingerbread caramels candy canes
                    gummi bears...
                  </p>
                </Media>
              </Media>
              <Media className="d-block d-sm-flex">
                <Media left className="pr-sm-2 pr-0" href="#">
                  <Media
                    object
                    src="https://www.youtube.com/embed/oNBX7Ag2Wgc"
                    alt="Generic placeholder image"
                    tag="iframe"
                  />
                </Media>
                <Media className="pr-sm-50 pr-0" body>
                  <h3 className="text-bold-400 mb-0">
                    <a
                      href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      The Table - for what do you feel you would
                    </a>
                  </h3>
                  <p className="mb-0">
                    <a
                      href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"
                      className="success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent
                    </a>
                  </p>
                  <ul className="list-inline list-inline-pipe mb-0">
                    <li>1M Views &nbsp</li>
                    <li>Uploaded by PlayStation &nbsp</li>
                  </ul>
                  <p>
                    25 Jun 2016 - Tiramisu soufflé gummies ice cream liquorice
                    gingerbread sweet roll. Cake cotton candy candy ice cream
                    muffin donut soufflé danish. Dessert jelly beans wafer
                    cheesecake. Sugar plum gingerbread caramels candy canes
                    gummi bears...
                  </p>
                </Media>
              </Media>
              <Media>
                <Media className="w-100" body>
                  <h3 className="text-bold-400 mb-0">
                    <a
                      href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Microdosing - deep v actually schlitz chia
                    </a>
                  </h3>
                  <p className="mb-0">
                    <a
                      href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"
                      className="success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent
                    </a>
                  </p>
                  <p>
                    Wafer liquorice sweet roll jelly beans cake soufflé. Oat
                    cake marzipan chocolate cake sesame snaps jujubes. Dragée
                    biscuit dessert. Chocolate muffin wafer. Sugar plum icing
                    tootsie roll gummi bears marzipan candy canes biscui...
                  </p>
                </Media>
              </Media>
              <Media>
                <Media className="w-100" body>
                  <h3 className="text-bold-400 mb-0">
                    <a
                      href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Aesthetic neutra freegan, mlkshk literally
                    </a>
                  </h3>
                  <p className="mb-0">
                    <a
                      href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"
                      className="success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent
                    </a>
                  </p>
                  <p>
                    30 Jun 2017 - Donut jelly cake chupa chups powder chocolate
                    cake cheesecake. Wafer macaroon sweet roll gingerbread
                    cheesecake gummi bears. Marzipan jujubes sweet roll tootsie
                    roll cookie apple pie brownie bear claw jelly beans....
                  </p>
                </Media>
              </Media>
              <Media>
                <Media className="w-100" body>
                  <h3 className="text-bold-400 mb-0">
                    <a
                      href="https://pixinvent.com/modern-admin-clean-bootstrap-4-dashboard-html-template/html/ltr/vertical-modern-menu-template/search-website.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      iCell - disrupt butcher pitchfork.
                    </a>
                  </h3>
                  <p className="mb-0">
                    <a
                      href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"
                      className="success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent
                    </a>
                  </p>
                  <p>
                    12 DEC 2015 - Cake fruitcake cake caramels jelly beans
                    chocolate bar. Macaroon gingerbread pastry. Gummies ice
                    cream chocolate lollipop brownie cotton candy. Topping
                    cotton candy brownie. Cake tiramisu macaroon sugar plum.
                    Sweet cotton can...
                  </p>
                </Media>
              </Media>
            </div>
          </CardBody>
        </Card>
        <div className="search-pagination">
          <Pagination className="d-flex justify-content-center mt-3">
            <PaginationItem href="#" className="prev-item">
              <PaginationLink href="#" first>
                <ChevronLeft />{" "}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">...</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">37</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">38</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">39</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">40</PaginationLink>
            </PaginationItem>
            <PaginationItem href="#" className="next-item">
              <PaginationLink href="#" last>
                <ChevronRight />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </div>
      </React.Fragment>
    )
  }
}
export default SearchCard
