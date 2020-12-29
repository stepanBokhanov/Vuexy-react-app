import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Row, Col } from "reactstrap"
import ReactPaginate from "react-paginate"
import { ChevronLeft, ChevronRight } from "react-feather"

class PaginationPositions extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Positions</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use classes{" "}
            <code>.vx-pagination.pagination-[start|center|end]</code> to
            position your pagination.
          </p>
          <Row>
            <Col xl="4" md="12">
              <h5 className="text-left">Left Aligned</h5>
              <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={5}
                marginPagesDisplayed={5}
                pageRangeDisplayed={0}
                containerClassName={
                  "vx-pagination icon-pagination pagination-start mt-2"
                }
                activeClassName={"active"}
              />
            </Col>
            <Col xl="4" md="12">
              <h5 className="text-center">Center Aligned</h5>
              <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={5}
                marginPagesDisplayed={5}
                pageRangeDisplayed={0}
                containerClassName={
                  "vx-pagination icon-pagination pagination-center mt-2"
                }
                activeClassName={"active"}
              />
            </Col>
            <Col xl="4" md="12">
              <h5 className="text-right">Right Aligned</h5>
              <ReactPaginate
                previousLabel={<ChevronLeft size={15} />}
                nextLabel={<ChevronRight size={15} />}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={5}
                marginPagesDisplayed={5}
                pageRangeDisplayed={0}
                containerClassName={
                  "vx-pagination icon-pagination pagination-end mt-2"
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
export default PaginationPositions
