import React from "react"
import { Card, CardBody, Button } from "reactstrap"
import Slider from "rc-slider"
import { Check, Star } from "react-feather"
import Radio from "../../../../components/@vuexy/radio/RadioVuexy"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import "rc-slider/assets/index.css"

import "../../../../assets/scss/plugins/extensions/slider.scss"

const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

class ShopSidebar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h6 className="filter-heading d-none d-lg-block">Filters</h6>
        <Card>
          <CardBody className="p-2">
            <div className="multi-range-price">
              <div className="multi-range-title pb-75">
                <h6 className="filter-title mb-0">Multi Range</h6>
              </div>
              <ul className="list-unstyled price-range">
                <li>
                  <Radio
                    label="All"
                    defaultChecked={true}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="<= $10"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="$10 - $100"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="$100 - $500"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label=">= $500"
                    defaultChecked={false}
                    name="shopRadio"
                    className="py-25"
                  />
                </li>
              </ul>
            </div>
            <hr />
            <div className="price-slider">
              <div className="price-slider-title mt-1">
                <h6 className="filter-title mb-0">Slider</h6>
              </div>
              <div className="price-slider mt-1">
                <Range
                  min={0}
                  max={500}
                  defaultValue={[100, 250]}
                  tipFormatter={value => `${value}%`}
                />
              </div>
            </div>
            <hr />
            <div className="product-categories">
              <div className="product-category-title">
                <h6 className="filter-title mb-1">Categories</h6>
              </div>
              <ul className="list-unstyled categories-list">
                <li>
                  <Radio
                    label="Appliances"
                    defaultChecked={true}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Cameras & Camcorders"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Car Electronics & GPS"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Cell Phones"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Computers & Tablets"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Health, Fitness & Beauty"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Office & School Supplies"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="TV & Home Theater"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
                <li>
                  <Radio
                    label="Video Games"
                    defaultChecked={false}
                    name="categories-filter"
                    className="py-25"
                  />
                </li>
              </ul>
            </div>
            <hr />
            <div className="brands">
              <div className="brand-title mt-1 pb-1">
                <h6 className="filter-title mb-0">Brands</h6>
              </div>
              <div className="brand-list">
                <ul className="list-unstyled brand-list">
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Insignia™"
                      defaultChecked={false}
                    />
                    <span>746</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Samsung"
                      defaultChecked={false}
                    />
                    <span>633</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Metra"
                      defaultChecked={false}
                    />
                    <span>591</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="HP"
                      defaultChecked={false}
                    />
                    <span>530</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Apple"
                      defaultChecked={false}
                    />
                    <span>442</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="GE"
                      defaultChecked={false}
                    />
                    <span>394</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Sony"
                      defaultChecked={false}
                    />
                    <span>350</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Incipio"
                      defaultChecked={false}
                    />
                    <span>320</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="KitchenAid"
                      defaultChecked={false}
                    />
                    <span>318</span>
                  </li>
                  <li className="d-flex justify-content-between align-items-center py-25">
                    <Checkbox
                      color="primary"
                      icon={<Check className="vx-icon" size={16} />}
                      label="Whirpool"
                      defaultChecked={false}
                    />
                    <span>298</span>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
            <div className="ratings">
              <div className="ratings-title mt-1 pb-75">
                <h6 className="filter-title mb-0">Ratings</h6>
              </div>
              <div className="d-flex justify-content-between">
                <ul className="unstyled-list list-inline ratings-list mb-0">
                  <li className="ratings-list-item">
                    <Star size={23} className="text-warning" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-warning" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-warning" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-warning" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-light" />
                  </li>
                  <li>& up</li>
                </ul>
                <div className="stars-received">(160)</div>
              </div>
              <div className="d-flex justify-content-between">
                <ul className="unstyled-list list-inline ratings-list mb-0">
                  <li className="ratings-list-item">
                    <Star size={23} className="text-warning" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-warning" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-warning" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-light" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-light" />
                  </li>
                  <li>& up</li>
                </ul>
                <div className="stars-received">(176)</div>
              </div>
              <div className="d-flex justify-content-between">
                <ul className="unstyled-list list-inline ratings-list mb-0">
                  <li className="ratings-list-item">
                    <Star size={23} className="text-warning" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-warning" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-light" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-light" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-light" />
                  </li>
                  <li>& up</li>
                </ul>
                <div className="stars-received">(291)</div>
              </div>
              <div className="d-flex justify-content-between">
                <ul className="unstyled-list list-inline ratings-list mb-0">
                  <li className="ratings-list-item">
                    <Star size={23} className="text-warning" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-light" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-light" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-light" />
                  </li>
                  <li className="ratings-list-item">
                    <Star size={23} className="text-light" />
                  </li>
                  <li>& up</li>
                </ul>
                <div className="stars-received">(190)</div>
              </div>
            </div>
            <hr />
            <div className="clear-filters">
              <Button.Ripple block className="btn-block" color="primary">
                CLEAR ALL FILTERS
              </Button.Ripple>
            </div>
          </CardBody>
        </Card>
      </React.Fragment>
    )
  }
}
export default ShopSidebar
