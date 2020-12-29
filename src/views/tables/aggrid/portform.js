import React from "react"
import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    FormGroup,
    Row,
    Col,
    Input,
    Form,
    Button,
    Label
  } from "reactstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import "../../../assets/scss/plugins/forms/flatpickr/flatpickr.scss"

class PortForm extends React.Component{
    constructor(props){
        super(props)
        this.onFinish = this.onFinish.bind(this);
        this.state = {
            basicPicker : new Date(),
            company_health: "0",
            company_yield: "0",
            fair_value_score:"0",
            company_quality: "0",
            risk_score:"0",
            industry_rank: "100",
            net_value_executed_pct:"0",
            net_holding_pct: "0",
        }
    }

    onFinish(values) {
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
    render(){
        return(
            <React.Fragment>
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
            </React.Fragment>
        )
    }
    
}

export default PortForm