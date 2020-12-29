import React from "react"
import { Row, Col } from "reactstrap"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import SearchHeader from "./SearchHeader"
import SearchCard from "./SearchCard"
import ProductCard from "./ProductCard"

import "../../../assets/scss/pages/search.scss"
class Search extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Breadcrumbs
          breadCrumbTitle="Search"
          breadCrumbParent="Pages"
          breadCrumbActive="Search"
        />
        <Row id="search-website">
          <Col sm="12">
            <SearchHeader />
          </Col>
          <Col
            lg={{ size: 8, order: 1 }}
            md={{ size: 12, order: 2 }}
            sm={{ size: 12, order: 2 }}
            xs={{ size: 12, order: 2 }}
          >
            <SearchCard />
          </Col>
          <Col
            lg={{ size: 4, order: 2 }}
            md={{ size: 12, order: 1 }}
            sm={{ size: 12, order: 1 }}
            xs={{ size: 12, order: 1 }}
          >
            <ProductCard />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default Search
