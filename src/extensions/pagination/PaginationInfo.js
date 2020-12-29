import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import ReactPaginate from "react-paginate"
import { ChevronLeft, ChevronRight } from "react-feather"

class PaginationInfo extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Info</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use classes <code>.vx-pagination.pagination-info</code>.
          </p>
          <ReactPaginate
            previousLabel={<ChevronLeft size={15} />}
            nextLabel={<ChevronRight size={15} />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={
              "vx-pagination icon-pagination pagination-info pagination-center mt-3"
            }
            activeClassName={"active"}
          />
        </CardBody>
      </Card>
    )
  }
}
export default PaginationInfo
