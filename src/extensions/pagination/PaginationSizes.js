import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
import ReactPaginate from "react-paginate"
import { ChevronLeft, ChevronRight } from "react-feather"

class PaginationSizes extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use classes <code>.vx-pagination.pagination-[lg|sm]</code> to change
            size of your pagination.
          </p>
          <Row>
            <Col lg="4" sm="12">
              <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={5}
                marginPagesDisplayed={5}
                pageRangeDisplayed={0}
                containerClassName={
                  "vx-pagination icon-pagination pagination-lg mt-2"
                }
                activeClassName={"active"}
              />
            </Col>
            <Col lg="4" sm="12">
              <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={5}
                marginPagesDisplayed={5}
                pageRangeDisplayed={0}
                containerClassName={"vx-pagination icon-pagination mt-2"}
                activeClassName={"active"}
              />
            </Col>
            <Col lg="4" sm="12">
              <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={5}
                marginPagesDisplayed={5}
                pageRangeDisplayed={0}
                containerClassName={
                  "vx-pagination icon-pagination pagination-sm mt-2"
                }
                activeClassName={"active"}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    )
  }
}
export default PaginationSizes
