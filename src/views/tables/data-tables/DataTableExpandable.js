import React from "react"
import { Card, CardBody, CardHeader, CardTitle, Table } from "reactstrap"
import DataTable from "react-data-table-component"

const columns = [
  {
    name: "Id",
    selector: "id",
    sortable: true
  },
  {
    name: "Name",
    selector: "name",
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
]

const data = [
  {
    id: "42-8972591",
    name: "Genvieve Mahaffey",
    gender: "Female",
    email: "gmahaffey0@istockphoto.com",
    Job_title: "Clinical Specialist",
    salary: "$7024.06",
    address: "7421 Ilene Way",
    city: "Cruz Alta"
  },
  {
    id: "14-1096446",
    name: "Mireielle Quick",
    gender: "Female",
    email: "mquick1@mayoclinic.com",
    Job_title: "Financial Advisor",
    salary: "$2666.37",
    address: "410 Hallows Lane",
    city: "Wonopringgo"
  },
  {
    id: "28-9140427",
    name: "Blanche Bebbell",
    gender: "Female",
    email: "bbebbell2@webeden.co.uk",
    Job_title: "Desktop Support Technician",
    salary: "$7603.07",
    address: "5 Hagan Plaza",
    city: "Daishan"
  },
  {
    id: "48-3954041",
    name: "Dasha Caddie",
    gender: "Female",
    email: "dcaddie3@diigo.com",
    Job_title: "Software Engineer I",
    salary: "$3500.71",
    address: "9346 Kinsman Point",
    city: "Taesal-li"
  },
  {
    id: "75-7908803",
    name: "Shem Boots",
    gender: "Male",
    email: "sboots4@toplist.cz",
    Job_title: "Research Assistant II",
    salary: "$4876.79",
    address: "92 Barby Avenue",
    city: "Milići"
  },
  {
    id: "57-8600270",
    name: "Dot Karolowski",
    gender: "Female",
    email: "dkarolowski5@usatoday.com",
    Job_title: "Geological Engineer",
    salary: "$1277.40",
    address: "85519 Debs Avenue",
    city: "Zapolyarnyy"
  },
  {
    id: "96-4074991",
    name: "Gino St Leger",
    gender: "Male",
    email: "gst6@last.fm",
    Job_title: "VP Product Management",
    salary: "$5411.47",
    address: "557 Fieldstone Road",
    city: "Niquero"
  },
  {
    id: "01-7234530",
    name: "Jermaine Ricold",
    gender: "Female",
    email: "jricold7@facebook.com",
    Job_title: "Recruiter",
    salary: "$6977.39",
    address: "367 2nd Park",
    city: "Gondar"
  },
  {
    id: "86-5709443",
    name: "Emmott Cicchetto",
    gender: "Male",
    email: "ecicchetto8@ustream.tv",
    Job_title: "Paralegal",
    salary: "$1473.46",
    address: "7174 Service Court",
    city: "Ash Shuhadā’"
  },
  {
    id: "03-7533373",
    name: "Hadleigh Denman",
    gender: "Male",
    email: "hdenman9@va.gov",
    Job_title: "Assistant Media Planner",
    salary: "$2170.40",
    address: "9 Village Parkway",
    city: "Duiwelskloof"
  }
]

const ExpandableTable = ({ data }) => {
  return (
    <Table responsive striped>
      <thead>
        <tr>
          <th>Property</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{data.email}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>{data.gender}</td>
        </tr>
        <tr>
          <td>Job title</td>
          <td>{data.Job_title}</td>
        </tr>
        <tr>
          <td>Salary</td>
          <td>{data.salary}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{data.address}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>{data.city}</td>
        </tr>
      </tbody>
    </Table>
  )
}

class DataTableExpandableRows extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Expandable Rows</CardTitle>
        </CardHeader>
        <CardBody>
          <DataTable
            data={data}
            columns={columns}
            noHeader
            expandableRows
            expandOnRowClicked
            expandableRowsComponent={<ExpandableTable />}
          />
        </CardBody>
      </Card>
    )
  }
}

export default DataTableExpandableRows
