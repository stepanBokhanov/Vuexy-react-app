import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import ReactPaginate from "react-paginate"
import { ChevronsLeft, ChevronsRight } from "react-feather"

const Previous = () => {
  return (
    <React.Fragment>
      <ChevronsLeft size={15} /> {""}
      <span className="align-middle d-none d-md-inline-block">Prev</span>
    </React.Fragment>
  )
}

const Next = () => {
  return (
    <React.Fragment>
      <span className="align-middle d-none d-md-inline-block">Next </span>
      <ChevronsRight size={15} />
    </React.Fragment>
  )
}

class IconTextPagination extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>With icon and text</CardTitle>
        </CardHeader>
        <CardBody>
          <p>
            Use classes <code>.vx-pagination.icon-text-pagination</code> to
            create a pagination with icon and text.
          </p>
          <ReactPaginate
            previousLabel={<Previous />}
            nextLabel={<Next />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={
              "vx-pagination icon-text-pagination pagination-center mt-3"
            }
            activeClassName={"active"}
          />
        </CardBody>
      </Card>
    )
  }
}
export default IconTextPagination
