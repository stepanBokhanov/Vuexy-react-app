import React from "react"
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb"
import { connect } from "react-redux";
import axios from "axios"
import Report from "./Report"
import { Redirect } from "react-router-dom"
class ApexCharts extends React.Component {
  state = {
    articles: [],
    buy_value: [],
    sell_value: [],
    top10_buys: [],
    top10_sells: [],
    net_inst_by_date: [],
    top10_inst: [],
    net_inst_value: [],
    wealth_graph: []
  }

  fetchArticles = () => {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/matrix/${articleID}/`)
      .then(res => {
        this.setState({
          articles: res.data,
          wealth_graph: (res.data.wealth_graph),
          buy_value: (res.data.buy_value),
          sell_value: (res.data.sell_value),
          top10_buys: (res.data.top10_buys),
          top10_sells: (res.data.top10_sells),
          net_inst_by_date: (res.data.net_inst_by_date),
          top10_inst: (res.data.top10_inst),
          net_inst_value: (res.data.net_inst_value)

        });

      });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  // componentWillReceiveProps(newProps) {
  //   if (newProps.token) {
  //     this.fetchArticles();
  //   }
  // }

  render() {
    console.log("ApexChart")
    if (!this.props.token) {
      return <Redirect to="/" />;
    }
    return (<React.Fragment>
      <Report data={this.state.articles} buy_value={this.state.buy_value} sell_value={this.state.sell_value} top10_buys={this.state.top10_buys} top10_sells={this.state.top10_sells} net_inst_by_date={this.state.net_inst_by_date} top10_inst={this.state.top10_inst} net_inst_value={this.state.net_inst_value} wealth_graph={this.state.wealth_graph} />
    </React.Fragment>
    );
  }

}
//
const mapStatetoProps = state => {
  return {
    token: state.auth.token
  }
}


export default connect(mapStatetoProps)(ApexCharts);
