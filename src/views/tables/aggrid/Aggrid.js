import * as React from 'react';
import {Link, Redirect} from 'react-router-dom';
import { LoadingOutlined } from '@ant-design/icons';
import { Divider,Spin, DatePicker, Table, Input } from 'antd';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  FormGroup,
  Row,
  Col,
  // Input,
  Form,
  Button,
  Label
} from "reactstrap";
import axios from 'axios';
import {connect} from 'react-redux';
import { Typography, Space } from 'antd';
import Flatpickr from "react-flatpickr";
const { Text } = Typography;
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class ArticleTable extends React.Component {

    state = {
    basicPicker : new Date(),
    articles: [],
    searchText: '',
    company_health: "0",
    company_yield: "0",
    fair_value_score:"0",
    company_quality: "0",
    risk_score:"0",
    industry_rank: "100",
    net_value_executed_pct:"0",
    net_holding_pct: "0",
    isLoading: true
    }
    fetchArticles = () => {
        axios.get('http://127.0.0.1:8000/api/matrix/')
            .then(res=>{
                // console.log(res.data);
                let items = this.state;
                items['articles'] = res.data;
                this.setState({items});

            });
      }

      componentDidMount() {
        this.fetchArticles();
      }

      componentWillReceiveProps(newProps) {
        if (newProps.token) {
          this.fetchArticles();
        }
      }



  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        {
            dataIndex==="industry_rank" ?
        <Button
          color="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >Max</Button>
        :
             dataIndex === "ticker_name" ?
            <Button
            color="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{ width: 90, marginRight: 8 }}
            >Search</Button>
            :
            <Button
            color="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            size="small"
            style={{ width: 90, marginRight: 8 }}
            >Min</Button>

        }

        <Button onClick={() => this.handleReset(clearFilters, dataIndex)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    onFilter: (value, record) =>{

      if(dataIndex === 'industry_rank'){
      return (parseInt(record[dataIndex])<=parseInt(value));}
      if(dataIndex === 'ticker_name'){
        return (record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()));
      }
      return (parseInt(record[dataIndex])>=parseInt(value));
    },
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    let items = this.state;
    items[dataIndex] = selectedKeys[0];
    this.setState({items});
    console.log(this.state);
  };

  handleReset = (clearFilters, dataIndex) => {
    clearFilters();
    if(dataIndex==='industry_rank'){
        let items = this.state;
        items[dataIndex] = "100";
        this.setState({items});
    }
    else {
        let items = this.state;
        items[dataIndex] = "0";
        this.setState({items});
        this.setState({items});
    }

  };

  render() {
    
    // console.log(localStorage.getItem('token'));
    if (!(this.props.token || localStorage.getItem('token'))) {
      return <Redirect to="/" />;
    }
    const columns = [
        {
            title: 'Ticker',
            dataIndex: 'ticker',
            render: (text) => <Link to={`/dashboard/${text}`}>{text}</Link>,
        },
        {
            title: 'Name',
            dataIndex: 'ticker_name',
            ...this.getColumnSearchProps('ticker_name')
        },
        {
            title: 'Company Health',
            dataIndex: 'company_health',
            sorter: {
                compare: (a, b) => a.company_health - b.company_health,
                multiple: 3,
            },
            ...this.getColumnSearchProps('company_health')
        },
        {
            title: 'Company Yield',
            dataIndex: 'company_yield',
            sorter: {
                compare: (a, b) => a.company_yield - b.company_yield,
                multiple: 3,
            },
            ...this.getColumnSearchProps('company_yield')
        },
        {
            title: 'Company Quality',
            dataIndex: 'company_quality',
            sorter: {
                compare: (a, b) => a.company_quality - b.company_quality,
                multiple: 3,
            },
            ...this.getColumnSearchProps('company_quality')
        },
        {
            title: 'Fair Value',
            dataIndex: 'fair_value_score',
            sorter: {
                compare: (a, b) => a.fair_value_score - b.fair_value_score,
                multiple: 3,
            },
            ...this.getColumnSearchProps('fair_value_score')
        },
        {
            title: 'Industry Rank',
            dataIndex: 'industry_rank',
            sorter: {
                compare: (a, b) => a.industry_rank - b.industry_rank,
                multiple: 3,
            },
            ...this.getColumnSearchProps('industry_rank')
        },
        {
            title: 'Risk',
            dataIndex: 'risk_score',
            sorter: {
                compare: (a, b) => a.risk_score - b.risk_score,
                multiple: 3,
            },
            ...this.getColumnSearchProps('risk_score')
        },
        {
            title: 'Insider Rating',
            dataIndex: 'net_value_executed_pct',
            sorter: {
                compare: (a, b) => a.net_value_executed_pct - b.net_value_executed_pct,
                multiple: 3,
            },
            ...this.getColumnSearchProps('net_value_executed_pct')
        },
        {
            title: 'Institutional Rating',
            dataIndex: 'net_holding_pct',
            sorter: {
                compare: (a, b) => a.net_holding_pct - b.net_holding_pct,
                multiple: 3,
            },
            ...this.getColumnSearchProps('net_holding_pct')
        },
        ];

    const onFinish = (values) => {
        // console.log(values, this.state);
        axios.post(`http://127.0.0.1:8000/api/portfolio/?token=${this.props.token}`, {
        portfolio_name: values.name,
        allocation: values.allocation,
        date_created: this.state.basicPicker.toISOString().split('T')[0],
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

    };
    if(this.state.articles.length === 0 & this.state.isLoading===false){
        let items = this.state;
        items['isLoading'] = true;
        this.setState({items});
    }
    if(this.state.articles.length !== 0 & this.state.isLoading===true){
        let items = this.state;
        items['isLoading'] = false;
        this.setState({items});
    }
    let {basicPicker} =  this.state;
        return (
            <div className="site-card-wrapper">
              <Card>
                <CardHeader>
                  <CardTitle>Portfolio Generation</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <FormGroup row>
                      <Col md="4">
                        <span>Portfolio Name</span>
                      </Col>
                      <Col md="6">
                        <Input
                          type="text"
                          name="name"
                          id="name"
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
                          type="text"
                          name="allocation"
                          id="allocation"
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
                      onChange={date => {
                        this.setState({ basicPicker : date });
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
                          onClick={onFinish}
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
              </Card>
            <Divider/>
            <Card>
            { this.state.isLoading ?
            <div>
            <Spin indicator={antIcon}></Spin> </div>
            :

            <Table  width={100} columns={columns} dataSource={this.state.articles} scroll={{ x: 1500 }} />
            }
            </Card>


            </div>
            );
    }

}

const mapStatetoProps = state =>{
    return{
      token: state.auth.token
    }
  }


export default connect(mapStatetoProps)(ArticleTable);
