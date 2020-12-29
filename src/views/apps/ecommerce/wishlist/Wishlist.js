import React from "react"
import { Card, CardBody, Badge } from "reactstrap"
import { Star, X, ShoppingCart } from "react-feather"
import { Link } from "react-router-dom"
import { data } from "./wishlistData"
import Breacrumbs from "../../../../components/@vuexy/breadCrumbs/BreadCrumb"
import "../../../../assets/scss/pages/app-ecommerce-shop.scss"
class Wishlist extends React.Component {
  state = {
    items: []
  }

  handleItemsMove = i => {
    let itemsArr = this.state.items
    itemsArr.push(i)
    this.setState({
      items: itemsArr
    })
  }

  render() {
    let renderList = data.map((item, i) => {
      return (
        <Card
          className={`ecommerce-card ${
            this.state.items.includes(i) ? "d-none" : ""
          }`}
          key={i}
        >
          <div className="card-content">
            <div className="item-img text-center">
              <Link to="/ecommerce/product-detail">
                <img className="img-fluid" src={item.img} alt={item.name} />
              </Link>
            </div>
            <CardBody>
              <div className="item-wrapper">
                <div className="item-rating">
                  <Badge color="primary" className="badge-md">
                    <span className="mr-50 align-middle">{item.stars}</span>
                    <Star size={14} />
                  </Badge>
                </div>
                <div className="product-price">
                  <h6 className="item-price">{item.price}</h6>
                </div>
              </div>
              <div className="item-name">
                <Link to="/ecommerce/product-detail">
                  <span>{item.name}</span>
                </Link>
                <p className="item-company">
                  By <span className="company-name">{item.by}</span>
                </p>
              </div>
              <div className="item-desc">
                <p className="item-description">{item.desc}</p>
              </div>
            </CardBody>
            <div className="item-options text-center">
              <div className="item-wrapper">
                <div className="item-rating">
                  <Badge color="primary" className="badge-md">
                    <span className="mr-50 align-middle">{item.stars}</span>
                    <Star size={14} />
                  </Badge>
                </div>
                <div className="product-price">
                  <h6 className="item-price">{item.price}</h6>
                </div>
              </div>
              <div className="wishlist" onClick={() => this.handleItemsMove(i)}>
                <X size={15} />
                <span className="align-middle ml-50">Remove</span>
              </div>
              <div className="cart" onClick={() => this.handleItemsMove(i)}>
                <ShoppingCart size={15} />
                <span className="align-middle ml-50">Move To Cart</span>
              </div>
            </div>
          </div>
        </Card>
      )
    })
    return (
      <React.Fragment>
        <Breacrumbs
          breadCrumbTitle="Wish List"
          breadCrumbParent="eCommerce"
          breadCrumbActive="Wishlist"
        />
        <div className="ecommerce-application">
          <div className="grid-view wishlist-items">{renderList}</div>
        </div>
      </React.Fragment>
    )
  }
}
export default Wishlist
