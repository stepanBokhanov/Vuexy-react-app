import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import ReactPaginate from "react-paginate"
class BasicPagination extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Basic</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use classes <code>.vx-pagination.basic-pagination</code> to create a
            basic pagination.
          </p>
          <ReactPaginate
            previousLabel={"previous"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={
              "vx-pagination basic-pagination pagination-center mt-3"
            }
            activeClassName={"active"}
          />
        </CardBody>
      </Card>
    )
  }
}
export default BasicPagination
