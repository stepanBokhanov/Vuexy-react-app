import * as React from 'react';
import { Table, Spin, Divider, List, Space } from 'antd';
import {
  Card,
  Button,
  Col,
  Row,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap"
import { LoadingOutlined, ShopOutlined, YuqueOutlined, RiseOutlined, HeartOutlined, DollarOutlined,StarOutlined, ExperimentOutlined, FireOutlined } from '@ant-design/icons';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import StatisticsCard from "../../../components/@vuexy/statisticsCard/StatisticsCard"
import {DollarSign, PenTool, Heart, Activity, Percent} from "react-feather"
import GoalOverview from "./Percent"
import ApexAreaCharts from "../../charts/apex/ApexAreaCharts"
const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $label_color_light = "#dae1e7"

let themeColors = [$primary, $success, $danger, $warning, $info]
const columns = [
  {
      title: 'Ticker',
      dataIndex: 'ticker',
      render: (text) => <Link to={`/dashboard/${text}`}>{text}</Link>,
  },
  {
      title: 'Name',
      dataIndex: 'ticker_name',
  },
  {
    title: 'Weight (%)',
    dataIndex: 'weight',
    sorter: {
        compare: (a, b) => a.weight - b.weight,
        multiple: 3,
    },
  },
  {
    title: 'Shares',
    dataIndex: 'shares',
    sorter: {
        compare: (a, b) => a.shares - b.shares,
        multiple: 3,
    },
},
{
  title: 'Entry Price',
  dataIndex: 'entry_price',
  sorter: {
      compare: (a, b) => a.entry_price - b.entry_price,
      multiple: 3,
  },
},
  {
    title: 'Current Price',
    dataIndex: 'current_price',
    sorter: {
        compare: (a, b) => a.company_health - b.company_health,
        multiple: 3,
    },
},
{
  title: 'Allocation',
  dataIndex: 'current_allocation',
  sorter: {
      compare: (a, b) => a.current_allocation - b.current_allocation,
      multiple: 3,
  },
},
{
  title: 'Change',
  dataIndex: 'change',
  sorter: {
      compare: (a, b) => a.change - b.change,
      multiple: 3,
  },
},


  ];

class PortfolioList extends React.Component{

  state = {
    portfolios: [],
    portfolio_stats: [],
    stats_set: false,
    isLoading: true,
    isStatsLoading: "",

  }

  fetchArticles = (token) => {
    axios.get(`http://127.0.0.1:8000/api/portfolio/?token=${token}`).then(res => {
      this.setState({
        portfolios: res.data
      });
    });
  }

  componentDidMount() {
    console.log(this.props.token)
    this.fetchArticles(this.props.token);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles(newProps.token);
    }
  }

  portfolioStats = (e, item) => {
      console.log(item);
      let items = this.state;
      items['isStatsLoading'] = item.portfolio_name;
      this.setState({items});
      axios.get(`http://127.0.0.1:8000/api/matrix/?token=${this.props.token}&portfolio_name=${item.portfolio_name}&compute_portfolio=True&allocation=${item.allocation}&date_created=${item.date_created}&min_health=${item.min_health}&min_yield=${item.min_yield}&min_quality=${item.min_quality}&max_industry_rank=${item.max_industry_rank}&min_fair_value=${item.min_fair_value}&min_risk=${item.min_risk}&min_insider_rating=${item.min_insider_rating}&min_inst_rating=${item.min_inst_rating}`)
          .then(res=>{
            console.log(res.data[0]);
            this.setState({
              portfolio_stats: res.data[0],
              stats_set: true
                });
            // console.log(this.state)
          })

      }



render(){
    if(this.state.portfolios.length === 0 & this.state.isLoading===false){
      let items = this.state;
      items['isLoading'] = true;
      this.setState({items});
    }
    if(this.state.portfolios.length !== 0 & this.state.isLoading===true){
        let items = this.state;
        items['isLoading'] = false;
        this.setState({items});
    }

    return (
      <div>
      {
        this.state.isLoading ?

        <Spin indicator={antIcon}>Loading Portfolio Rule List</Spin>


        :

        this.state.stats_set  ?

          <div className="site-card-wrapper">
            <Row gutter={16}>
            <Col lg="5" sm="12">
            <Row gutter={20}>
            <Col lg="6" sm="12">
              <StatisticsCard
                hideChart
                iconBg="warning"
                icon={<DollarSign className="warning" size={22} />}
                stat={this.state.portfolio_stats.portfolio_allocation}
                statTitle="Net Value"
              />
            </Col>
            <Col lg="6" sm="12">
              <StatisticsCard
                hideChart
                iconBg="success"
                icon={<DollarSign className="success" size={22} />}
                stat={this.state.portfolio_stats.portfolio_change}
                statTitle="Change"
              />
            </Col>
            <Divider/>
            <Col lg="6" sm="12">
              <StatisticsCard
                hideChart
                iconBg="primary"
                icon={<Percent className="primary" size={22} />}
                stat={this.state.portfolio_stats.portfolio_historical_return}
                statTitle="Historical Return"
              />
            </Col>
            <Col lg="6" sm="12">
              <StatisticsCard
                hideChart
                iconBg="danger"
                icon={<Percent className="danger" size={22} />}
                stat={this.state.portfolio_stats.portfolio_historical_risk}
                statTitle="Historical Risk"
              />
            </Col>
          <Divider />
          <Col lg="6" sm="12">
            <StatisticsCard
              hideChart
              iconBg="success"
              icon={<Activity className="success" size={22} />}
              stat={this.state.portfolio_stats.portfolio_historical_sharpe}
              statTitle="Historical Sharpe"
            />
          </Col>
          <Col lg="6" sm="12">
            <StatisticsCard
              hideChart
              iconBg="warning"
              icon={<Heart className="warning" size={22} />}
              stat={this.state.portfolio_stats.portfolio_industry_rank}
              statTitle="Aggregate Industry Rank"
            />
            </Col>
          <Divider />
            <Col lg="6" sm="12">
              <GoalOverview strokeColor="#b9c3cd" success="#28C76F" title="Portfolio Health" percent={this.state.portfolio_stats.portfolio_health}/>
            </Col>
            <Col lg="6" sm="12">
              <GoalOverview strokeColor="#b9c3cd" success="#28C76F" title="Portfolio Yield" percent={this.state.portfolio_stats.portfolio_yield}/>
            </Col>
            <Divider />
            <Col lg="6" sm="12">
              <GoalOverview strokeColor="#b9c3cd" success="#28C76F" title="Portfolio Quality" percent={this.state.portfolio_stats.portfolio_quality}/>
            </Col>
            <Col lg="6" sm="12">
              <GoalOverview strokeColor="#b9c3cd" success="#28C76F" title="Insider Rating" percent={this.state.portfolio_stats.portfolio_insider_rating}/>
            </Col>
            <Divider />
            <Col lg="6" sm="12">
              <GoalOverview strokeColor="#b9c3cd" success="#28C76F" title="Institutional Rating" percent={this.state.portfolio_stats.portfolio_inst_rating}/>
            </Col>
            <Col lg="6" sm="12">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<PenTool className="primary" size={22} />}
              stat={this.state.portfolio_stats.portfolio_fair_value}
              statTitle="Fair Value Rating"
            />
            <Divider />
            <StatisticsCard
              hideChart
              iconBg="danger"
              icon={<PenTool className="danger" size={22} />}
              stat={this.state.portfolio_stats.portfolio_risk}
              statTitle="Aggregate Risk Rating"
            />
            <Divider />

            </Col>
          </Row>
          </Col>
          <Col lg="7" sm="12">
            <ApexAreaCharts themeColors={themeColors} data={this.state.portfolio_stats.portfolio_wealth_graph} second={0} title={`Wealth Graph: ${this.state.portfolio_stats.name}`}/>
          <Divider />
          <Card>
            <CardHeader>
              <CardTitle>Constituents: {this.state.portfolio_stats.name}</CardTitle>
            </CardHeader>
            <CardBody>
              <Table  columns ={columns} dataSource= {this.state.portfolio_stats.portfolio_constituents} scroll={{ x: 0 }} />
            </CardBody>
          </Card>
          </Col>
          </Row>
          <Divider />
          <div>

    <List
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={this.state.portfolios}

      renderItem={item => (
        <Card style={{padding: 10}}>
        <List.Item
          key={item.portfolio_name}
          actions={[
            <IconText icon={HeartOutlined} text={item.min_health} key="list-vertical-star-o" />,
            <IconText icon={DollarOutlined} text={item.min_yield} key="list-vertical-like-o" />,
            <IconText icon={ExperimentOutlined} text={item.min_quality} key="list-vertical-message" />,
            <IconText icon={StarOutlined} text={item.min_fair_value} key="list-vertical-star-o" />,
            <IconText icon={RiseOutlined} text={item.max_industry_rank} key="list-vertical-like-o" />,
            <IconText icon={FireOutlined} text={item.min_risk} key="list-vertical-message" />,
            <IconText icon={YuqueOutlined} text={item.min_insider_rating} key="list-vertical-message" />,
            <IconText icon={ShopOutlined} text={item.min_inst_rating} key="list-vertical-message" />

          ]}
        >
          <List.Item.Meta
            title={<a style={{fontSize: 20}}>{item.portfolio_name}</a>}
            description={`Allocation: ${item.allocation},
            Effective Date: ${item.date_created}`}
          />
          <Button color="primary" onClick={(e)=> this.portfolioStats(e,item)}>Apply Rules</Button>
            <Space/>
          { this.state.isStatsLoading===item.portfolio_name  ?

            <Spin indicator={antIcon} style={{
              margin: '0 8px',
            }}/>
            :
            <div/>
          }
        </List.Item>
        </Card>
      )}
    />
    </div>
          </div>
        :
          <div>

    <List
      itemLayout="vertical"
      size="small"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5,
      }}
      dataSource={this.state.portfolios}

      renderItem={item => (
        <Card style={{padding: 10}}>
          <List.Item
            key={item.portfolio_name}
            actions={[
              <IconText icon={HeartOutlined} text={item.min_health} key="list-vertical-star-o" />,
              <IconText icon={DollarOutlined} text={item.min_yield} key="list-vertical-like-o" />,
              <IconText icon={ExperimentOutlined} text={item.min_quality} key="list-vertical-message" />,
              <IconText icon={StarOutlined} text={item.min_fair_value} key="list-vertical-star-o" />,
              <IconText icon={RiseOutlined} text={item.max_industry_rank} key="list-vertical-like-o" />,
              <IconText icon={FireOutlined} text={item.min_risk} key="list-vertical-message" />,
              <IconText icon={YuqueOutlined} text={item.min_insider_rating} key="list-vertical-message" />,
              <IconText icon={ShopOutlined} text={item.min_inst_rating} key="list-vertical-message" />

            ]}
          >
            <List.Item.Meta
              title={<a style={{fontSize: 20}}>{item.portfolio_name}</a>}
              description={`Allocation: ${item.allocation},
              Effective Date: ${item.date_created}`}
            />
            <Button color="primary" onClick={(e)=> this.portfolioStats(e,item)}>Apply Rules</Button>
              <Space/>
            { this.state.isStatsLoading===item.portfolio_name  ?

              <Spin indicator={antIcon} style={{
                margin: '0 8px',
              }}></Spin>
              :
              <div/>
            }
          </List.Item>
        </Card>
      )}
    />
    </div>


}
</div>

);
    }
    }
const mapStatetoProps = state =>{
  return{
    token: state.auth.token
  }
}

export default connect(mapStatetoProps)(PortfolioList);


