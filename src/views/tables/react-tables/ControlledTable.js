import React from "react"
import { Card, CardHeader, CardTitle, CardBody, Button } from "reactstrap"
import ReactTable from "react-table"
import { makeData } from "./TableData"
// eslint-disable-next-line
import prism from "prismjs"
const data = makeData()
const makeDefaultState = () => ({
  sorted: [],
  page: 0,
  pageSize: 10,
  expanded: {},
  resized: [],
  filtered: []
})
class ControlledTable extends React.Component {
  state = makeDefaultState()

  resetState = () => {
    this.setState(makeDefaultState())
  }
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Simple</CardTitle>
        </CardHeader>
        <CardBody>
          <Button color="primary" onClick={this.resetState} className="my-1">
            Reset State
          </Button>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "Name",
                columns: [
                  {
                    Header: "First Name",
                    accessor: "firstName"
                  },
                  {
                    Header: "Last Name",
                    id: "lastName",
                    accessor: d => d.lastName,
                    width: 170
                  }
                ]
              },
              {
                Header: "Info",
                columns: [
                  {
                    Header: "Age",
                    accessor: "age"
                  }
                ]
              }
            ]}
            pivotBy={["lastName"]}
            filterable
            defaultPageSize={10}
            className="-striped -highlight"
            // Controlled props
            sorted={this.state.sorted}
            page={this.state.page}
            pageSize={this.state.pageSize}
            expanded={this.state.expanded}
            resized={this.state.resized}
            filtered={this.state.filtered}
            // Callbacks
            onSortedChange={sorted => this.setState({ sorted })}
            onPageChange={page => this.setState({ page })}
            onPageSizeChange={(pageSize, page) =>
              this.setState({ page, pageSize })
            }
            onExpandedChange={expanded => this.setState({ expanded })}
            onResizedChange={resized => this.setState({ resized })}
            onFilteredChange={filtered => this.setState({ filtered })}
          />
          <pre className="p-2 my-1 bg-dark text-white">
            <code>
              <strong>this.state ===</strong>{" "}
              {JSON.stringify(this.state, null, 2)}
            </code>
          </pre>
        </CardBody>
      </Card>
    )
  }
}
export default ControlledTable
