import React from "react"
import { Row, Col } from "reactstrap"
import SubscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import RevenueGenerated from "../../ui-elements/cards/statistics/RevenueGenerated"
import QuaterlySales from "../../ui-elements/cards/statistics/QuaterlySales"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import RevenueChart from "../../ui-elements/cards/analytics/Revenue"
import GoalOverview from "../../ui-elements/cards/analytics/GoalOverview"
import BrowserStats from "../../ui-elements/cards/analytics/BrowserStatistics"
import ClientRetention from "../../ui-elements/cards/analytics/ClientRetention"
import SessionByDevice from "../../ui-elements/cards/analytics/SessionByDevice"
import CustomersChart from "../../ui-elements/cards/analytics/Customers"
import ChatWidget from "../../../components/@vuexy/chatWidget/ChatWidget"

import "../../../assets/scss/plugins/charts/apex-charts.scss"

let $primary = "#7367F0",
  $success = "#28C76F",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $stroke_color = "#b9c3cd",
  $label_color = "#e7eef7"

class EcommerceDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
          <Col lg="3" md="6" sm="6">
            <SubscribersGained />
          </Col>
          <Col lg="3" md="6" sm="6">
            <RevenueGenerated />
          </Col>
          <Col lg="3" md="6" sm="6">
            <QuaterlySales />
          </Col>
          <Col lg="3" md="6" sm="6">
            <OrdersReceived />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="8" md="6" sm="12">
            <RevenueChart
              primary={$primary}
              dangerLight={$danger_light}
              strokeColor={$stroke_color}
              labelColor={$label_color}
            />
          </Col>
          <Col lg="4" md="6" sm="12">
            <GoalOverview strokeColor={$stroke_color} success={$success} />
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="4" md="6" sm="12">
            <BrowserStats />
          </Col>
          <Col lg="8" md="6" sm="12">
            <ClientRetention
              strokeColor={$stroke_color}
              primary={$primary}
              danger={$danger}
              labelColor={$label_color}
            />
          </Col>
        </Row>
        <Row>
          <Col lg="4" md="12">
            <SessionByDevice
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
          <Col lg="4" md="12" className="text-center align-middle">
            <ChatWidget></ChatWidget>
          </Col>
          <Col lg="4" md="12" className="text-center align-middle">
            <CustomersChart
              primary={$primary}
              warning={$warning}
              danger={$danger}
              primaryLight={$primary_light}
              warningLight={$warning_light}
              dangerLight={$danger_light}
            />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default EcommerceDashboard
