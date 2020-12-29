import React from 'react';
import { Table, Divider, Statistic, Progress } from 'antd';
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardTitle,
  CardBody,
} from "reactstrap"
import GoalOverview from "../../ui-elements/data-list/Percent"
import ApexAreaCharts from "./ApexAreaCharts"
import AreaCharts from "./AreaCharts"

const columns = [
  {
    title: 'Filing Date',
    dataIndex: 'filingdate',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Officer Title',
    dataIndex: 'officertitle',

  },
  {
    title: 'Security Title',
    dataIndex: 'securitytitle',

  },
  {
    title: 'Exercise Price',
    dataIndex: 'priceexercisable',

  },
  {
    title: 'Expiration Date',
    dataIndex: 'expirationdate',

  },

  {
    title: 'Transaction Price ',
    dataIndex: 'transactionpricepershare',
    sorter: {
      compare: (a, b) => a.transactionpricepershare - b.transactionpricepershare,
      multiple: 3,
    },
  },
  {
    title: 'Transaction Value ($ Mn)',
    dataIndex: 'transactionvalue',
    sorter: {
      compare: (a, b) => a.transactionvalue - b.transactionvalue,
      multiple: 3,
    },
  }
];
/*

  const sell_config = {
    data: props.sell_value,
    height: 400,
    xField: 'filingdate',
    yField: 'transactionvalue',
    point: {
    size: 3,
    shape: 'circle',
    },
  };
  <Card title="Insider Buy">
    <Area  data: props.buy_value
    height: 400
    xField: 'filingdate'
    yField: 'transactionvalue'
    point: {
    size: 3,
    shape: 'circle',
    } />
    </Card>
    <Divider></Divider>
    <Card title="Insider Sell">
    <Area  {...sell_config} />
    </Card>
  */
let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $label_color_light = "#dae1e7"

let themeColors = [$primary, $success, $danger, $warning, $info]
class Report extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="site-card-wrapper">
        <Row>
          <Col lg="4" sm="12">
            <Card>
              <CardHeader>
                <CardTitle>
                  {this.props.data.ticker_name}
                </CardTitle>
              </CardHeader><hr />
              <CardBody>
                <Statistic value={this.props.data.price} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Divider />
        <ApexAreaCharts themeColors={themeColors} data={this.props.wealth_graph} second="1" title="Wealth Graph" />
        <Divider></Divider>
        <Row gutter={16}>
          <Col lg="4" sm="12">
            <Card>
              <CardBody>
                <GoalOverview strokeColor="#b9c3cd" success="#28C76F" title="Portfolio Health" percent={this.props.data.company_health} />
                <Divider />
                <Row gutter={20}>
                  <Col lg="6" sm="12">
                    <Statistic title="5 Yr Revenue Growth (%)" value={this.props.data.rev_growth} />
                  </Col>

                  <Col lg="6" sm="12">
                    <Statistic title="Revenue Growth Uncertainty (%)" value={this.props.data.rev_uncertainty} />
                  </Col>
                  <Divider />
                  <Col lg="6" sm="12">
                    <Statistic title="5 Yr Average Profit Margin (%)" value={this.props.data.profit_margin} />
                  </Col>
                  <Col lg="6" sm="12">
                    <Statistic title="5 Yr Average Market Share Growth (%)" value={this.props.data.market_share_growth} />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" sm="12">
            <Card><CardBody>
            <GoalOverview  strokeColor="#b9c3cd" success="#28C76F" title="Company Yield" percent={this.props.data.company_yield} />
              <Divider />
              <Row gutter={20}>
                <Col span={12}>
                  <Statistic title="5 Yr Average Dividend Yield (%)" value={this.props.data.dividend_yield} />
                </Col>

                <Col span={12}>
                  <Statistic title="5 Yr Average Earnings Yield (%)" value={this.props.data.earnings_yield} />
                </Col>
                <Divider />
                <Col span={12}>
                  <Statistic title="5 Yr Average Payout Ratio (%)" value={this.props.data.payout_ratio} />
                </Col>
                <Col span={12}>
                  <Statistic title="5 Yr Average Free Cash Flow ($bn)" value={this.props.data.free_cash_flow} />
                </Col>
              </Row>
              </CardBody></Card>
          </Col>
          <Col lg="4" sm="12">
            <Card><CardBody>
            <GoalOverview strokeColor="#b9c3cd" success="#28C76F" title="Company Quality" percent={this.props.data.company_quality} />
            <Divider />
            <Row gutter={20}>
              <Col span={12}>
                <Statistic title="5 Yr Average Debt/Equity (%)" value={this.props.data.debt_to_equity} />
              </Col>

              <Col span={12}>
                <Statistic title="5 Yr Average Return on Invested Capital (%)" value={this.props.data.return_on_invested_capital} />
              </Col>
              <Divider />
              <Col span={12}>
                <Statistic title="5 Yr Average Growth in ROE (%)" value={this.props.data.roe_growth} />
              </Col>
              <Col span={12}>
                <Statistic title="ROE Growth Uncertainty (%)" value={this.props.data.roe_uncertainty} />
              </Col>
            </Row>
            </CardBody></Card>
          </Col>
        </Row>
        <Divider></Divider>
        <Row gutter={16}>
          <Col lg="4" sm="12">
            <Card>
              <CardHeader>
                <CardTitle>
                  Fair Value
                </CardTitle>
              </CardHeader>
              <CardBody>
              <Statistic title="Fair Value Rating ( / 20)" value={this.props.data.fair_value_score} />
              <Divider></Divider>
              <Row gutter={20}>
                <Col span={12}>
                  <Statistic title="Fair Value by Dividend Discount Model ($)" value={this.props.data.fair_value_ddm} />
                </Col>

                <Col span={12}>
                  <Statistic title="Fair Value by Dividend Discount Model ($)" value={this.props.data.fair_value_fcf} />
                </Col>
              </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" sm="12">
            <Card>
              <CardHeader>
                <CardTitle>
                  Industry Rank
                </CardTitle>
              </CardHeader>
              <CardBody>
              <Statistic value={this.props.data.industry_rank} />
              <Divider />
              <Row gutter={20}>
                <Col span={12}>
                  <Statistic title="Profitability Rank" value={this.props.data.profitability_rank} />
                </Col>

                <Col span={12}>
                  <Statistic title="Value Rank" value={this.props.data.value_rank} />
                </Col>
                <Divider />
                <Col span={24}>
                  <Statistic title="Quality Rank" value={this.props.data.quality_rank} />
                </Col>
              </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" sm="12">
            <Card>
              <CardHeader>
                <CardTitle>Market Risk</CardTitle>
              </CardHeader>
              <CardBody>
              <Statistic title="Risk Rating ( / 30)" value={this.props.data.risk_score} />
              <Divider />
              <Row gutter={20}>
                <Col span={12}>
                  <Statistic title="Annualized Volatility (%)" value={this.props.data.vol} />
                </Col>
                <Col span={12}>
                  <Statistic title="Max Drawdown (%)" value={this.props.data.max_drawdown} />
                </Col>
                <Divider />
                <Col span={24}>
                  <Statistic title="Correlation with Market" value={this.props.data.correl} />
                </Col>
              </Row>
              </CardBody>
            </Card>
          </Col>

          <Divider />
          <Col sm="12" lg="5">
            <AreaCharts themeColors={themeColors} data={this.props.buy_value} title="Insider Buy" />
          </Col>

          <Col sm="12" lg="7">
            <Card>
              <CardHeader>
                <CardTitle>
                  Top 10 Insider Trades Buy
                </CardTitle>
              </CardHeader>
              <CardBody>
              <Table dataSource={this.props.top10_buys}
                columns={columns} scroll={{ x: 1500 }}
              /></CardBody>
              </Card>
          </Col>

          <Divider />
          <Col sm="12" lg="5">
            <AreaCharts themeColors={themeColors} data={this.props.sell_value} title="Insider Sell" />
          </Col>

          <Col sm="12" lg="7">
            <Card>
              <CardHeader>
                <CardTitle>Top 10 Insider Trades Sell</CardTitle>
              </CardHeader>
              <CardBody>
              <Table dataSource={this.props.top10_sells}
                columns={columns} scroll={{ x: 1500 }}
              />
              </CardBody>
              </Card>
          </Col>
        </Row>
      </div>
    );
  }
}


export default Report;
