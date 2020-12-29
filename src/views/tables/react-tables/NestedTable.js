import React from "react"
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import ReactTable from "react-table"
import treeTableHOC from "react-table/lib/hoc/treeTable"
import { nestedData } from "./TableData"
const TreeTable = treeTableHOC(ReactTable)
class NestedTable extends React.Component {
  state = {
    data: nestedData
  }
  render() {
    const { data } = this.state

    return (
      <Card>
        <CardHeader>
          <CardTitle>Nested</CardTitle>
        </CardHeader>
        <CardBody>
          <TreeTable
            filterable
            className="nested-table"
            defaultFilterMethod={(filter, row, column) => {
              const id = filter.pivotId || filter.id
              return row[id] !== undefined
                ? String(row[id])
                    .toLowerCase()
                    .includes(filter.value.toLowerCase())
                : true
            }}
            data={data}
            columns={[
              // we only require the accessor so TreeTable
              // can handle the pivot automatically

              // any other columns we want to display
              {
                Header: "First Name",
                accessor: "first_name"
              },
              {
                Header: "Last Name",
                accessor: "last_name"
              },
              {
                Header: "Company Name",
                accessor: "company_name"
              },
              {
                Header: "Address",
                accessor: "address"
              },
              {
                Header: "Phone 1",
                accessor: "phone1"
              },
              {
                Header: "Email",
                accessor: "email"
              }
            ]}
            defaultPageSize={10}
            SubComponent={row => {
              // a SubComponent just for the final detail
              const columns = [
                {
                  Header: "Property",
                  accessor: "property",
                  width: 200,
                  Cell: ci => {
                    return `${ci.value}:`
                  },
                  style: {
                    backgroundColor: "#DDD",
                    textAlign: "right",
                    fontWeight: "bold"
                  }
                },
                { Header: "Value", accessor: "value" }
              ]
              const rowData = Object.keys(row.original).map(key => {
                return {
                  property: key,
                  value: row.original[key].toString()
                }
              })
              return (
                <div style={{ padding: "10px" }}>
                  <ReactTable
                    data={rowData}
                    columns={columns}
                    pageSize={rowData.length}
                    showPagination={false}
                  />
                </div>
              )
            }}
          />
        </CardBody>
      </Card>
    )
  }
}
export default NestedTable
