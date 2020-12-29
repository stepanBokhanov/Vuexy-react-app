import React from "react"
import ExtensionsHeader from "../extensionsHeader"
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  CustomInput
} from "reactstrap"
import classnames from "classnames"
import XLSX from "xlsx"
import { Check, Minus, Search } from "react-feather"
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy"

import "../../assets/scss/pages/import-export.scss"
class Export extends React.Component {
  state = {
    data : [
      {
        'id': 1,
        'name': 'Leanne Graham',
        'username': 'Bret',
        'email': 'Sincere@april.biz',
        'website': 'hildegard.org'
      },
      {
        'id': 2,
        'name': 'Ervin Howell',
        'username': 'Antonette',
        'email': 'Shanna@melissa.tv',
        'website': 'anastasia.net'
      },
      {
        'id': 3,
        'name': 'Clementine Bauch',
        'username': 'Samantha',
        'email': 'Nathan@yesenia.net',
        'website': 'ramiro.info'
      },
      {
        'id': 4,
        'name': 'Patricia Lebsack',
        'username': 'Karianne',
        'email': 'Julianne.OConner@kory.org',
        'website': 'kale.biz'
      },
      {
        'id': 5,
        'name': 'Chelsey Dietrich',
        'username': 'Kamren',
        'email': 'Lucio_Hettinger@annie.ca',
        'website': 'demarco.info'
      },
      {
        'id': 6,
        'name': 'Mrs. Dennis Schulist',
        'username': 'Leopoldo_Corkery',
        'email': 'Karley_Dach@jasper.info',
        'website': 'ola.org'
      },
      {
        'id': 7,
        'name': 'Kurtis Weissnat',
        'username': 'Elwyn.Skiles',
        'email': 'Telly.Hoeger@billy.biz',
        'website': 'elvis.io'
      },
      {
        'id': 8,
        'name': 'Nicholas Runolfsdottir V',
        'username': 'Maxime_Nienow',
        'email': 'Sherwood@rosamond.me',
        'website': 'jacynthe.com'
      },
      {
        'id': 9,
        'name': 'Glenna Reichert',
        'username': 'Delphine',
        'email': 'Chaim_McDermott@dana.io',
        'website': 'conrad.com'
      },
      {
        'id': 10,
        'name': 'Clementina DuBuque',
        'username': 'Moriah.Stanton',
        'email': 'Rey.Padberg@karina.biz',
        'website': 'ambrose.net'
      }
    ],
    filteredData : [],
    dataToExport : [],
    value : "",
    modal : false,
    fileName: "",
    fileFormat: "xlsx",
    selectedRows:[],
    selectAll: false
  }

  toggleModal = () => {
    this.setState({ modal : !this.state.modal })
  }

  handleFilter = e => {
    let data = this.state.data
    let filteredData = []
    let value = e.target.value
    this.setState({ value })
    if(value.length){
      filteredData = data.filter(col => {
        let startsWithCondition = col.name.toLowerCase().startsWith(value.toLowerCase()) ||
        col.email.toLowerCase().startsWith(value.toLowerCase()) ||
        col.website.toLowerCase().startsWith(value.toLowerCase()) ||
        col.id.toString().toLowerCase().startsWith(value.toLowerCase())
  
        let includesCondition = col.name.toLowerCase().includes(value.toLowerCase()) ||
        col.email.toLowerCase().includes(value.toLowerCase()) ||
        col.website.toLowerCase().includes(value.toLowerCase()) || 
        col.id.toString().toLowerCase().includes(value.toLowerCase())
  
        if(startsWithCondition) return startsWithCondition
        else if(!startsWithCondition && includesCondition) return includesCondition
        else return null
      })
      this.setState({ value, filteredData })
    }
  }

  handleExport = () => {
    this.toggleModal()
    let dataToExport = this.state.dataToExport
    this.state.data.map(item => {
      if(this.state.selectedRows.includes(item.id)){
        return dataToExport.push(item)
      }else{
        return null
      }
    })
    this.setState({ dataToExport })
    let fileName =
      this.state.fileName.length && this.state.fileFormat.length
        ? `${this.state.fileName}.${this.state.fileFormat}`
        : "excel-sheet.xlsx"
    let wb = XLSX.utils.json_to_sheet(dataToExport)
    let wbout = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wbout, wb, 'test')
    XLSX.writeFile(wbout, fileName);
  }

  handleSelect = id => {
    let selectedRows = this.state.selectedRows
    if(!selectedRows.includes(id)){
      selectedRows.push(id)
    }else if(selectedRows.includes(id)){
      selectedRows.splice(selectedRows.indexOf(id), 1)
    }else{
      return null
    }
    this.setState({ selectedRows })
  }

  handleSelectAll = () => {
    let selectedRows = this.state.selectedRows
    let data = this.state.data
    if(selectedRows.length < data.length){
      let ids = data.map(i => i.id)
      selectedRows = ids
    }
    else if (selectedRows.length === data.length){
      selectedRows = []
    }else{
      return null
    }

    this.setState({ selectedRows })
  }
  
  render() {
    let array = this.state.value ? this.state.filteredData : this.state.data
    let renderTableData = array.map(col => {
      return <tr key={col.id} className={classnames({
        selected : this.state.selectedRows.includes(col.id)
      })}>
        <td>
          <Checkbox
            size="sm"
            color="primary"
            icon={<Check className="vx-icon" size={12} />}
            label=""
            checked={this.state.selectedRows.includes(col.id)}
            onChange={() => this.handleSelect(col.id)}
          />
        </td>
        <td>{col.email}</td>
        <td>{col.name}</td>
        <td>{col.website}</td>
        <td>{col.id}</td>
      </tr>
    })
    let IconTag = this.state.selectedRows.length !== this.state.data.length && this.state.selectedRows.length ? Minus : Check
    return (
      <React.Fragment>
        <ExtensionsHeader
          title="XLSX"
          subTitle="Xlsx is a parser and writer for various spreadsheet formats"
          link="https://github.com/AdeleD/react-paginate"
        />
        <Row className="export-component">
          <Col sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col sm="12">
                    <div className="d-flex flex-wrap justify-content-between">
                      <Button.Ripple color="primary" onClick={this.toggleModal}>
                        Export Selected
                      </Button.Ripple>
                     <div className="filter position-relative has-icon-left">
                        <Input type="text" value={this.state.value} onChange={e => this.handleFilter(e)} />
                        <div className="form-control-position">
                          <Search size={15} />
                        </div>
                     </div>
                    </div>
                  </Col>
                  <Col sm="12">
                    <Table
                      className="table-hover-animation mt-2"
                      responsive
                    >
                      <thead>
                        <tr>
                          <th>
                            <Checkbox
                              size="sm"
                              color="primary"
                              icon={<IconTag className="vx-icon" size={12} />}
                              checked={this.state.selectedRows.length}
                              onChange={e => this.handleSelectAll()}
                            />
                          </th>
                          <th>Email</th>
                          <th>Name</th>
                          <th>Website</th>
                          <th>Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        {renderTableData}
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className="modal-dialog-centered"
        >
          <ModalHeader toggle={this.toggleModal}>Export To Excel</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Input 
                type="text" 
                value={this.state.fileName} 
                onChange={e => this.setState({fileName : e.target.value})} 
                placeholder="Enter File Name" 
              />
            </FormGroup>
            <FormGroup>
              <CustomInput 
                type="select" 
                id="selectFileFormat" 
                name="customSelect"
                value={this.state.fileFormat}
                onChange={e => this.setState({ fileFormat : e.target.value })}
              >
                <option>xlsx</option>
                <option>csv</option>
                <option>txt</option>
              </CustomInput>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleExport}>
              Export
            </Button>
            <Button color="flat-danger" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}

export default Export
