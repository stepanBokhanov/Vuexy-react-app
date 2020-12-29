import React from "react"
import { Card, CardBody, CardHeader, CardTitle, Input } from "reactstrap"
import { Search } from "react-feather"
import DataTable from "react-data-table-component"

const CustomHeader = props => {
  return (
    <div className="position-relative has-icon-left mb-1">
      <Input value={props.value} onChange={e => props.handleFilter(e)} />
      <div className="form-control-position">
        <Search size="15" />
      </div>
    </div>
  )
}

class DataTableFilter extends React.Component {
  state = {
    columns: [
      {
        name: "Id",
        selector: "id",
        sortable: true
      },
      {
        name: "First Name",
        selector: "first_name",
        sortable: true
      },
      {
        name: "Last Name",
        selector: "last_name",
        sortable: true
      },
      {
        name: "Email",
        selector: "email",
        sortable: true
      },
      {
        name: "Gender",
        selector: "gender",
        sortable: true
      }
    ],
    data: [
      {
        id: 1,
        first_name: "Alyss",
        last_name: "Lillecrop",
        email: "alillecrop0@twitpic.com",
        gender: "Female"
      },
      {
        id: 2,
        first_name: "Shep",
        last_name: "Pentlow",
        email: "spentlow1@home.pl",
        gender: "Male"
      },
      {
        id: 3,
        first_name: "Gasper",
        last_name: "Morley",
        email: "gmorley2@chronoengine.com",
        gender: "Male"
      },
      {
        id: 4,
        first_name: "Phaedra",
        last_name: "Jerrard",
        email: "pjerrard3@blogs.com",
        gender: "Female"
      },
      {
        id: 5,
        first_name: "Conn",
        last_name: "Plose",
        email: "cplose4@geocities.com",
        gender: "Male"
      },
      {
        id: 6,
        first_name: "Tootsie",
        last_name: "Brandsma",
        email: "tbrandsma5@theatlantic.com",
        gender: "Female"
      },
      {
        id: 7,
        first_name: "Sibley",
        last_name: "Bum",
        email: "sbum6@sourceforge.net",
        gender: "Female"
      },
      {
        id: 8,
        first_name: "Kristoffer",
        last_name: "Thew",
        email: "kthew7@amazon.com",
        gender: "Male"
      },
      {
        id: 9,
        first_name: "Fay",
        last_name: "Hasard",
        email: "fhasard8@java.com",
        gender: "Female"
      },
      {
        id: 10,
        first_name: "Tabby",
        last_name: "Abercrombie",
        email: "tabercrombie9@statcounter.com",
        gender: "Female"
      }
    ],
    value: "",
    filteredData: []
  }

  handleFilter = e => {
    let value = e.target.value
    let data = this.state.data
    let filteredData = this.state.filteredData
    this.setState({ value })

    if (value.length) {
      filteredData = data.filter(item => {
        let startsWithCondition =
          item.first_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.last_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.gender.toLowerCase().startsWith(value.toLowerCase()) ||
          item.id
            .toString()
            .toLowerCase()
            .startsWith(value.toLowerCase())
        let includesCondition =
          item.first_name.toLowerCase().includes(value.toLowerCase()) ||
          item.last_name.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.gender.toLowerCase().includes(value.toLowerCase()) ||
          item.id
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())

        if (startsWithCondition) {
          return startsWithCondition
        } else if (!startsWithCondition && includesCondition) {
          return includesCondition
        } else return null
      })
      this.setState({ filteredData })
    }
  }

  render() {
    let { columns, data, value, filteredData } = this.state
    return (
      <Card>
        <CardHeader>
          <CardTitle>Filter</CardTitle>
        </CardHeader>
        <CardBody>
          <DataTable
            data={value.length ? filteredData : data}
            columns={columns}
            noHeader
            subHeader
            subHeaderComponent={
              <CustomHeader value={value} handleFilter={this.handleFilter} />
            }
          />
        </CardBody>
      </Card>
    )
  }
}

export default DataTableFilter
