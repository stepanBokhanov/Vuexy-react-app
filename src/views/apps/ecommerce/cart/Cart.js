import React from "react"
import { toast, ToastContainer } from "react-toastify"
import {
  Card,
  CardBody,
  CardHeader,
  Badge,
  Button,
  CardTitle,
  Row,
  Col,
  Input,
  Label,
  FormGroup
} from "reactstrap"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"
import NumericInput from "react-numeric-input"
import {
  Star,
  X,
  Heart,
  ShoppingCart,
  Home,
  CreditCard,
  PlusSquare
} from "react-feather"
import { mobileStyle } from "../../../forms/form-elements/number-input/InputStyles"
import Breacrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import bankLogo from "../../../../assets/img/pages/eCommerce/bank.png"
import Wizard from "../../../../components/@vuexy/wizard/WizardComponent"
import { productsList } from "./cartData"
import { AvInput, AvGroup, AvFeedback } from "availity-reactstrap-validation"

import "../../../../assets/scss/pages/app-ecommerce-shop.scss"
import "react-toastify/dist/ReactToastify.css"
import "../../../../assets/scss/plugins/extensions/toastr.scss"

class Checkout extends React.Component {
  state = {
    activeStep: 0,
    steps: [
      {
        title: <ShoppingCart size={22} />,
        content: (
          <div className="list-view product-checkout">
            <div className="checkout-items">
              {productsList.map((item, i) => (
                <Card className="ecommerce-card" key={i}>
                  <div className="card-content">
                    <div className="item-img text-center">
                      <img src={item.img} alt="Product" />
                    </div>
                    <CardBody>
                      <div className="item-name">
                        <span>{item.name}</span>
                        <p className="item-company">
                          By <span className="company-name">{item.by}</span>
                        </p>
                        <p className="stock-status-in">In Stock</p>
                        <div className="item-quantity">
                          <p className="quantity-title">Quantity</p>
                          <NumericInput
                            min={0}
                            max={10}
                            value={1}
                            mobile
                            style={mobileStyle}
                          />
                        </div>
                        <p className="delivery-date">{item.deliveryBy}</p>
                        <p className="offers">{item.offers}</p>
                      </div>
                    </CardBody>
                    <div className="item-options text-center">
                      <div className="item-wrapper">
                        <div className="item-rating">
                          <Badge color="primary" className="badge-md mr-25">
                            <span className="align-middle">4</span>{" "}
                            <Star size={15} />
                          </Badge>
                        </div>
                        <div className="item-cost">
                          <h6 className="item-price">{item.price}</h6>
                        </div>
                      </div>
                      <div className="wishlist">
                        <X size={15} />
                        <span className="align-middle ml-25">Remove</span>
                      </div>
                      <div className="cart">
                        <Heart size={15} />
                        <span className="align-middle ml-25">Wishlist</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <div className="checkout-options">
              <Card>
                <CardBody>
                  <p className="options-title">Options</p>
                  <div className="coupons">
                    <div className="coupons-title">
                      <p>Coupons</p>
                    </div>
                    <div className="apply-coupon">
                      <p>Apply</p>
                    </div>
                  </div>
                  <hr />
                  <div className="price-details">
                    <p>Price Details</p>
                  </div>
                  <div className="detail">
                    <div className="detail-title">Total MRP</div>
                    <div className="detail-amt">$598</div>
                  </div>
                  <div className="detail">
                    <div className="detail-title">Bag Discount</div>
                    <div className="detail-amt discount-amt">-25$</div>
                  </div>
                  <div className="detail">
                    <div className="detail-title">Estimated Tax</div>
                    <div className="detail-amt">$1.3</div>
                  </div>
                  <div className="detail">
                    <div className="detail-title">EMI Eligibility</div>
                    <div className="detail-amt emi-details">Details</div>
                  </div>
                  <div className="detail">
                    <div className="detail-title">Delivery Charges</div>
                    <div className="detail-amt discount-amt">Free</div>
                  </div>
                  <hr />
                  <div className="detail">
                    <div className="detail-title detail-total">Total</div>
                    <div className="detail-amt total-amt">$574</div>
                  </div>
                  <Button.Ripple
                    type="submit"
                    block
                    color="primary"
                    className="btn-block"
                    onClick={() => this.handleActiveStep(1)}>
                    Place Order
                  </Button.Ripple>
                </CardBody>
              </Card>
            </div>
          </div>
        )
      },
      {
        title: <Home size={22} />,
        content: (
          <div className="list-view product-checkout">
            <Card>
              <CardHeader className="flex-column align-items-start">
                <CardTitle>Add New Address</CardTitle>
                <p className="text-muted mt-25">
                  Be sure to check "Deliver to this address" when you have
                  finished
                </p>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md="6" sm="12">
                    <AvGroup>
                      <Label for="name"> Name </Label>
                      <AvInput id="name" name="name" type="text" required />
                      <AvFeedback>Please enter valid Name</AvFeedback>
                    </AvGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <AvGroup>
                      <Label for="contact-number"> Contact Number </Label>
                      <AvInput
                        id="contact-number"
                        name="contact-number"
                        type="text"
                        required
                      />
                      <AvFeedback>Please enter valid Contact Number</AvFeedback>
                    </AvGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <AvGroup>
                      <Label for="apt-no"> Apt/House No </Label>
                      <AvInput id="apt-no" name="apt-no" type="text" required />
                      <AvFeedback>
                        Please enter valid Apt/House Number
                      </AvFeedback>
                    </AvGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <AvGroup>
                      <Label for="landmark">
                        {" "}
                        Landmark e.g. near Times Square{" "}
                      </Label>
                      <AvInput id="landmark" name="landmark" type="text" />
                    </AvGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <AvGroup>
                      <Label for="town-city"> Town/City</Label>
                      <AvInput
                        id="town-city"
                        name="town-city"
                        type="text"
                        required
                      />
                      <AvFeedback>Please enter valid Town/City</AvFeedback>
                    </AvGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <AvGroup>
                      <Label for="pincode"> Pincode</Label>
                      <AvInput
                        id="pincode"
                        name="pincode"
                        type="text"
                        required
                      />
                      <AvFeedback>Please enter valid Pincode</AvFeedback>
                    </AvGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <AvGroup>
                      <Label for="state"> State</Label>
                      <AvInput id="state" name="state" type="text" required />
                      <AvFeedback>Please enter valid State</AvFeedback>
                    </AvGroup>
                  </Col>
                  <Col md="6" sm="12">
                    <FormGroup>
                      <Label for="address-type">Address Type</Label>
                      <Input type="select" name="select" id="address-type">
                        <option>Home</option>
                        <option>Work</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col sm="6" md={{ offset: 6, size: 6 }}>
                    <Button.Ripple
                      type="submit"
                      color="primary"
                      onClick={() => this.handleActiveStep(2)}>
                      SAVE AND DELIVER HERE
                    </Button.Ripple>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <div className="customer-card">
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                </CardHeader>
                <CardBody>
                  <p className="mb-0">9447 Glen Eagles Drive</p>
                  <p>Lewis Center, OH 43035</p>
                  <p>UTC-5: Eastern Standard Time (EST) </p>
                  <p>202-555-0140</p>
                  <hr />
                  <Button.Ripple
                    type="submit"
                    color="primary"
                    className="btn-block"
                    onClick={() => this.handleActiveStep(1)}>
                    DELIVER TO THIS ADDRESS
                  </Button.Ripple>
                </CardBody>
              </Card>
            </div>
          </div>
        )
      },
      {
        title: <CreditCard size={22} />,
        content: (
          <div className="list-view product-checkout">
            <div className="payment-type">
              <Card>
                <CardHeader className="flex-column align-items-start">
                  <CardTitle>Payment options</CardTitle>
                  <p className="text-muted mt-25">
                    Be sure to click on correct payment option
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="d-flex justify-content-between flex-wrap">
                    <div className="vx-radio-con vx-radio-primary">
                      <input type="radio" name="bank" />
                      <span className="vx-radio">
                        <span className="vx-radio--border"></span>
                        <span className="vx-radio--circle"></span>
                      </span>
                      <img src={bankLogo} alt="img-placeholder" height="40" />
                      <span>US Unlocked Debit Card 12XX XXXX XXXX 0000</span>
                    </div>
                    <div className="card-holder-name mt-75">John Doe</div>
                    <div className="card-expiration-date mt-75">11/2020</div>
                  </div>
                  <div className="customer-cvv mt-1">
                    <div className="form-inline">
                      <Label for="cvv">Enter CVV:</Label>
                      <AvInput
                        type="number"
                        className="input-cvv ml-75 mb-50"
                        id="cvv"
                        name="cvv"
                        required
                      />
                      <Button color="primary" className="ml-50 mb-50">
                        {" "}
                        Continue{" "}
                      </Button>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <ul className="other-payment-options list-unstyled">
                    <li className="py-25">
                      <Radio
                        label="Credit / Debit / ATM Card"
                        color="primary"
                        defaultChecked={false}
                        name="paymentType"
                      />
                    </li>
                    <li className="py-25">
                      <Radio
                        label="Net Banking"
                        color="primary"
                        defaultChecked={false}
                        name="paymentType"
                      />
                    </li>
                    <li className="py-25">
                      <Radio
                        label="EMI (Easy Installment)"
                        color="primary"
                        defaultChecked={false}
                        name="paymentType"
                      />
                    </li>
                    <li className="py-25">
                      <Radio
                        label="Cash On Delivery"
                        color="primary"
                        defaultChecked={false}
                        name="paymentType"
                      />
                    </li>
                  </ul>
                  <hr />
                  <div className="gift-card">
                    <p>
                      <PlusSquare size={22} />
                      <span className="align-middle ml-25">Add Gift Card</span>
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="amount-payable checkout-options">
              <Card>
                <CardHeader>
                  <CardTitle>Price Details</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="detail">
                    <div className="details title">Price of 3 items</div>
                    <div className="detail-amt">
                      <strong>$699.30</strong>
                    </div>
                  </div>
                  <div className="detail">
                    <div className="details title">Delivery Charges</div>
                    <div className="detail-amt discount-amt">
                      <strong>Free</strong>
                    </div>
                  </div>
                  <hr />
                  <div className="detail">
                    <div className="details title">Amount Payable</div>
                    <div className="detail-amt">
                      <strong>$699.30</strong>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        )
      }
    ]
  }

  handleActiveStep = index => {
    this.setState({ activeStep: index })
  }

  onValidationError = errors => {
    toast.error("Please Enter Valid Details", {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  }

  render() {
    const { steps, activeStep } = this.state
    return (
      <React.Fragment>
        <Breacrumbs
          breadCrumbTitle="Checkout"
          breadCrumbParent="eCommerce"
          breadCrumbActive="Checkout"
        />
        <div className="ecommerce-application">
          <Wizard
            steps={steps}
            activeStep={activeStep}
            pagination={false}
            enableAllSteps
            validate
            tabPaneClass="mt-5"
            onValidationError={this.onValidationError}
          />
          <ToastContainer />
        </div>
      </React.Fragment>
    )
  }
}

export default Checkout
