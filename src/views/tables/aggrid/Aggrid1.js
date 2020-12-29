import React from "react"
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Input,
  Button,
  UncontrolledDropdown,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Col,
  FormGroup,
  Form
} from "reactstrap"
import { AgGridReact } from "ag-grid-react"
import { ContextLayout } from "../../../utility/context/Layout"
import { ChevronDown } from "react-feather"
import axios from "axios"
import "../../../assets/scss/plugins/tables/_agGridStyleOverride.scss"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import Flatpickr from "react-flatpickr"
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
class AggridTable extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    name: "",
    allocation: "",
    basicPicker: "",
    currenPageSize: "",
    getPageSize: "",
    isLoading: true,
    searchText: '',
    company_health: "0",
    company_yield: "0",
    fair_value_score: "0",
    company_quality: "0",
    risk_score: "0",
    industry_rank: "100",
    net_value_executed_pct: "0",
    net_holding_pct: "0",
    defaultColDef: {
      sortable: true,
      editable: false,
      resizable: true,
      suppressMenu: true
    },
    columnDefs: [
      {
        headerName: "Ticker",
        field: "ticker",
        width: 100,
        cellRenderer: function (params) {
          let keyData = params.value;
          let newLink = `<a href="/articleview/${keyData}">${keyData}</a>`;
          return newLink;
        },
        filter: false,
      },
      {
        headerName: "Name",
        field: "ticker_name",
        filter: true,
        filterParams: {
          filterOptions: [
            'contains'
          ],
          suppressAndOrCondition: true,
        },
        width: 200,
        // pinned: window.innerWidth > 992 ? "left" : false
      },
      {
        headerName: "Health Rating",
        field: "company_health",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 200
      },
      {
        headerName: "Yield Rating",
        field: "company_yield",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 140
      },
      {
        headerName: "Quality Rating",
        field: "company_quality",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 200
      },
      {
        headerName: "Industry Rank",
        field: "industry_rank",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'lessThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 180
      },
      {
        headerName: "Fair Value Rating",
        field: "fair_value_score",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 200
      },
      {
        headerName: "Risk Rating",
        field: "risk_score",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 140
      },
      {
        headerName: "Insider Rating",
        field: "net_value_executed_pct",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 200
      },
      {
        headerName: "Institutional Rating",
        field: "net_holding_pct",
        filter: "agNumberColumnFilter",
        filterParams: {
          filterOptions: [
            'greaterThan'
          ],
          suppressAndOrCondition: true,
        },
        width: 200
      },
    ]
  }
  fetchArticles = () => {
    axios.get('http://127.0.0.1:8000/api/matrix/')
      .then(res => {
        console.log(res.data);
        let items = this.state;
        items['rowData'] = res.data;
        this.setState({ items });

      });
  }

  componentDidMount() {
    console.log(this.props.token)
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }


  onGridReady = params => {
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages()
    })
  }

  updateSearchQuery = val => {
    this.gridApi.setQuickFilter(val)
  }

  filterSize = val => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val))
      this.setState({
        currenPageSize: val,
        getPageSize: val
      })
    }
  }
  filter = (params) => {
    var model = this.gridApi.getFilterModel();
    let items = this.state;
    for (const field in model) {
      items[`${field}`] = `${model[field].filter}`;
    }
    this.setState({ items });
    console.log(this.state);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    // console.log(this.state)
  }
  handleSubmit = event => {
    event.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/portfolio/?token=${localStorage.getItem('token')}`, {
        portfolio_name: this.state.name,
        allocation: this.state.allocation,
        date_created: this.state.basicPicker[0].toISOString().split('T')[0],
        min_health: parseInt(this.state.company_health),
        min_yield: parseInt(this.state.company_yield),
        min_fair_value:parseInt(this.state.fair_value_score),
        min_quality: parseInt(this.state.company_quality),
        min_risk:parseInt(this.state.risk_score),
        max_industry_rank: parseInt(this.state.industry_rank),
        min_insider_rating:parseInt(this.state.net_value_executed_pct),
        min_inst_rating: parseInt(this.state.net_holding_pct),
      })
      this.props.history.push('/portfolios/');
  }
  render() {
    if (!this.props.token) {
      return <Redirect to="/" />;
    }
    const { rowData, columnDefs, defaultColDef, basicPicker } = this.state
    if (this.state.rowData.length === 0 & this.state.isLoading === false) {
      let items = this.state;
      items['isLoading'] = true;
      this.setState({ items });
    }
    if (this.state.rowData.length !== 0 & this.state.isLoading === true) {
      let items = this.state;
      items['isLoading'] = false;
      this.setState({ items });
    }
    return (
      <React.Fragment>

        <Card>

          <CardHeader id="portgen">
            <CardTitle>
              <h4 style={{paddingBottom: 15}}>Portfolio Generation</h4>
            </CardTitle>
            <ChevronDown size={15} className="collapse-icon" />
          </CardHeader>
          <UncontrolledCollapse toggler="#portgen">
          <CardBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Col md="4">
                  <span>Portfolio Name</span>
                </Col>
                <Col md="6">
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.handleChange}
                    placeholder="Portfolio 1"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="4">
                  <span>Allocation</span>
                </Col>
                <Col md="6">
                  <Input
                    //  ref="sdf"
                    type="text"
                    name="allocation"
                    id="allocation"
                    onChange={this.handleChange}
                    placeholder={10000}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="4">
                  <span>Effective Date</span>
                </Col>
                <Col md="6">
                  <Flatpickr
                    className="form-control"
                    value={basicPicker}
                    placeholder="yyyy-mm-dd"
                    onChange={date => {
                      this.setState({ basicPicker: date });
                    }}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 8, offset: 4 }}>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Submit
                  </Button.Ripple>
                  <Button.Ripple
                    outline
                    color="warning"
                    type="reset"
                    className="mb-1"
                  >
                    Reset
                  </Button.Ripple>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
          </UncontrolledCollapse>
        </Card>
        <Card className="overflow-hidden agGrid-card">
          {this.state.isLoading ?
            <div>
              <Spin indicator={antIcon}>
                <h6 style={{paddingLeft: 10, paddingTop: 10, paddingBottom: 10}}>Loading Ratings Matrix</h6>
              </Spin>
            </div>
            :
            <CardBody className="py-0">
              {this.state.rowData === null ? null : (
                <div className="ag-theme-material w-100 my-2 ag-grid-table">
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="mb-1">
                      <UncontrolledDropdown className="p-1 ag-dropdown">
                        <DropdownToggle tag="div">
                          {this.gridApi
                            ? this.state.currenPageSize
                            : "" * this.state.getPageSize -
                            (this.state.getPageSize - 1)}{" "}
                        -{" "}
                          {this.state.rowData.length -
                            this.state.currenPageSize * this.state.getPageSize >
                            0
                            ? this.state.currenPageSize * this.state.getPageSize
                            : this.state.rowData.length}{" "}
                        of {this.state.rowData.length}
                          <ChevronDown className="ml-50" size={15} />
                        </DropdownToggle>
                        <DropdownMenu right>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(20)}
                          >
                            20
                        </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(50)}
                          >
                            50
                        </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(100)}
                          >
                            100
                        </DropdownItem>
                          <DropdownItem
                            tag="div"
                            onClick={() => this.filterSize(134)}
                          >
                            134
                        </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between mb-1">
                      <div className="table-input mr-1">
                        <Input
                          placeholder="search..."
                          onChange={e => this.updateSearchQuery(e.target.value)}
                          value={this.state.value}
                        />
                      </div>
                      <div className="export-btn">
                        <Button.Ripple
                          color="primary"
                          onClick={() => this.gridApi.exportDataAsCsv()}
                        >
                          Export as CSV
                      </Button.Ripple>
                      </div>
                    </div>
                  </div>
                  <ContextLayout.Consumer>
                    {context => (
                      <AgGridReact
                        gridOptions={{}}
                        rowSelection="multiple"
                        defaultColDef={defaultColDef}
                        columnDefs={columnDefs}
                        rowData={rowData}
                        onGridReady={this.onGridReady}
                        colResizeDefault={"shift"}
                        animateRows={true}
                        floatingFilter={true}
                        onFilterChanged={this.filter}
                        pagination={true}
                        paginationPageSize={this.state.paginationPageSize}
                        pivotPanelShow="always"
                        enableRtl={context.state.direction === "rtl"}
                      />
                    )}
                  </ContextLayout.Consumer>
                </div>
              )}
            </CardBody>}
        </Card>
      </React.Fragment>
    )
  }
}

const mapStatetoProps = state => {
  console.log(state)
  return {
    token: state.auth.token
  }
}


export default connect(mapStatetoProps)(AggridTable);
