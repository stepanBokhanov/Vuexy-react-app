import React from "react"
import { Card, CardBody } from "reactstrap"
import { ExternalLink } from "react-feather"
import modernAdmin from "../../../assets/img/pages/modern.jpg"
import apexAdmin from "../../../assets/img/pages/1-apex.png"
import convexAdmin from "../../../assets/img/pages/3-convex.png"
import materializeAdmin from "../../../assets/img/pages/4-materialize.png"
import stackAdmin from "../../../assets/img/pages/2-stack.png"

class ProductCard extends React.Component {
  render() {
    return (
      <Card className="bg-transparent border-light shadow-none">
        <CardBody>
          <img
            src={modernAdmin}
            alt="modernAdmin"
            className="img-fluid rounded"
          />
          <h3 className="mt-1">
            Modern Admin - Clean Bootstrap 4 Dashboard HTML Template
          </h3>
          <small>Clean Bootstrap 4 Dashboard HTML Template</small>
          <p className="mt-1">
            <ExternalLink size={13} className="mr-50" />
            <a
              href="https://themeforest.net/item/modern-admin-clean-bootstrap-4-dashboard-html-template/21430660"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Themeforest
            </a>
          </p>
          <p>
            Clean Bootstrap 4 Dashboard HTML Template + Bitcoin Dashboard can be
            used for any type of web applications: Project Management, eCommerce
            backends, CRM, Analytics, Fitness or any custom admin panels.
          </p>
          <div className="knowledge-panel text-center">
            <div className="panel-1 border-right border-1 d-inline-block pr-2">
              <p className="mb-0">1,367</p>
              <small>Sales</small>
            </div>
            <div className="panel-2 border-right border-1 d-inline-block px-2">
              <p className="mb-0">74</p>
              <small>Comments</small>
            </div>
            <div className="panel-3 d-inline-block pl-2">
              <p className="mb-0">5</p>
              <small>Ratings</small>
            </div>
          </div>
          <div className="py-1 knowledge-panel-info">
            <div>
              <strong>Bootstrap: </strong> v4.13 updated
            </div>
            <div>
              <strong>Created: </strong> Mar 8 2018
            </div>
            <div>
              <strong>Last Update: </strong> Nov 28 2018
            </div>
            <div>
              <strong>Documentation: </strong> Well Documented
            </div>
            <div>
              <strong>Layout: </strong> Responsive
            </div>
          </div>
          <h5>People also search for</h5>
          <div className="knowledge-panel-suggestion">
            <div className="suggestion-1 d-inline-block text-center mr-2">
              <a
                href="https://themeforest.net/item/apex-angular-4-bootstrap-admin-template/20774875"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={apexAdmin} alt="adminImg" height="40" width="40" />
                <span className="font-small-2 d-block">Apex</span>
              </a>
            </div>
            <div className="suggestion-1 d-inline-block text-center mr-2">
              <a
                href="https://themeforest.net/item/convex-angular-bootstrap-admin-dashboard-template/22424619"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={convexAdmin} alt="adminImg" height="40" width="40" />
                <span className="font-small-2 d-block">Convex</span>
              </a>
            </div>
            <div className="suggestion-1 d-inline-block text-center mr-2">
              <a
                href="https://themeforest.net/item/materialize-material-design-admin-template/11446068"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={materializeAdmin}
                  height="40"
                  width="40"
                  alt="adminImg"
                />
                <span className="font-small-2 d-block">Materialize</span>
              </a>
            </div>
            <div className="suggestion-1 d-inline-block text-center">
              <a
                href="https://themeforest.net/item/stack-responsive-bootstrap-4-admin-template/20039431"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={stackAdmin} alt="adminImg" height="40" width="40" />
                <span className="font-small-2 d-block">Stack</span>
              </a>
            </div>
          </div>
        </CardBody>
      </Card>
    )
  }
}
export default ProductCard
