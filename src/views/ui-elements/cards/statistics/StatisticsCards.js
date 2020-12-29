import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import SubscribersGained from "./SubscriberGained"
import RevenueGenerated from "./RevenueGenerated"
import QuaterlySales from "./QuaterlySales"
import OrdersReceived from "./OrdersReceived"
import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import {
  Monitor,
  UserCheck,
  Mail,
  Eye,
  MessageSquare,
  ShoppingBag,
  Heart,
  Smile,
  Truck,
  Cpu,
  Server,
  Activity,
  AlertOctagon
} from "react-feather"
import {
  siteTraffic,
  siteTrafficSeries,
  activeUsers,
  activeUsersSeries,
  newsLetter,
  newsLetterSeries
} from "./StatisticsData2"

class StatisticsCards extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Statistics Cards"
          breadCrumbParent="Card"
          breadCrumbActive="Statistics Cards"
        />
        <Row>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="primary"
              icon={<Eye className="primary" size={22} />}
              stat="36.9k"
              statTitle="Views"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="success"
              icon={<MessageSquare className="success" size={22} />}
              stat="12k"
              statTitle="Comments"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="warning"
              icon={<ShoppingBag className="warning" size={22} />}
              stat="978"
              statTitle="Orders"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="danger"
              icon={<Heart className="danger" size={22} />}
              stat="26.7k"
              statTitle="Favourited"
            />
          </Col>
          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="success"
              icon={<Smile className="success" size={22} />}
              stat="689"
              statTitle="Reviews"
            />
          </Col>

          <Col xl="2" lg="4" sm="6">
            <StatisticsCard
              hideChart
              iconBg="warning"
              icon={<Truck className="warning" size={22} />}
              stat="2"
              statTitle="Returns"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="primary"
              icon={<Cpu className="primary" size={22} />}
              stat="86%"
              statTitle="CPU Usage"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="success"
              icon={<Server className="success" size={22} />}
              stat="1.2gb"
              statTitle="Memory Usage"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="danger"
              icon={<Activity className="danger" size={22} />}
              stat="0.1%"
              statTitle="Downtime Ratio"
            />
          </Col>
          <Col lg="3" sm="6">
            <StatisticsCard
              hideChart
              iconRight
              iconBg="warning"
              icon={<AlertOctagon className="warning" size={22} />}
              stat="13"
              statTitle="Issues Found"
            />
          </Col>
          <Col lg="3" md="6" sm="12">
            <SubscribersGained />
          </Col>
          <Col lg="3" md="6" sm="12">
            <RevenueGenerated />
          </Col>
          <Col lg="3" md="6" sm="12">
            <QuaterlySales />
          </Col>
          <Col lg="3" md="6" sm="12">
            <OrdersReceived />
          </Col>
          <Col lg="4" md="6" sm="12">
            <StatisticsCard
              iconRight
              icon={<Monitor className="primary" size={22} />}
              stat="78.9k"
              statTitle="Site Traffic"
              options={siteTraffic}
              series={siteTrafficSeries}
              type="line"
            />
          </Col>
          <Col lg="4" md="6" sm="12">
            <StatisticsCard
              iconRight
              icon={<UserCheck className="success" size={22} />}
              iconBg="success"
              stat="659.8k"
              statTitle="Active Users"
              options={activeUsers}
              series={activeUsersSeries}
              type="line"
            />
          </Col>
          <Col lg="4" md="6" sm="12">
            <StatisticsCard
              iconRight
              icon={<Mail className="warning" size={22} />}
              iconBg="warning"
              stat="28.7k"
              statTitle="Newsletter"
              options={newsLetter}
              series={newsLetterSeries}
              type="line"
            />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default StatisticsCards
