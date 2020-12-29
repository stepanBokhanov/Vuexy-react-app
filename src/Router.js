import React, { Suspense, lazy } from "react"
import { Router, Switch, Route } from "react-router-dom"
import { history } from "./history"
import { connect } from "react-redux"
import Spinner from "./components/@vuexy/spinner/Loading-spinner"
import { ContextLayout } from "./utility/context/Layout"

// Route-based code splitting
const portfolios = lazy(() => import("./views/ui-elements/data-list/ListView"))
const Dashboard = lazy(() => import("./views/tables/aggrid/Aggrid1"))
const articleview = lazy(() => import("./views/charts/apex/ApexCharts"))
const userEdit = lazy(() => import("./views/apps/user/edit/Edit"))
const userView = lazy(() => import("./views/apps/user/view/View"))
const Login = lazy(() => import("./views/pages/authentication/login/Login"))
const register = lazy(() =>
  import("./views/pages/authentication/register/Register")
)

// Set Layout and Component Using App Route
const RouteConfig = ({ component: Component, fullLayout, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return (
        <ContextLayout.Consumer>
          {context => {
            let LayoutTag =
              fullLayout === true
                ? context.fullLayout
                : context.state.activeLayout === "horizontal"
                ? context.horizontalLayout
                : context.VerticalLayout
            return (
              <LayoutTag {...props} permission={props.user}>
                <Suspense fallback={<Spinner />}>
                  <Component {...props} />
                </Suspense>
              </LayoutTag>
            )
          }}
        </ContextLayout.Consumer>
      )
    }}
  />
)
const mapStateToProps = state => {
  return {
    token: state.auth.token
  }
}

const AppRoute = connect(mapStateToProps)(RouteConfig)

class AppRouter extends React.Component {
  render() {
    return (
      // Set the directory path if you are deploying in sub-folder
      <Router history={history}>
        <Switch>

          <AppRoute exact path="/" component={Login} fullLayout/>
          <AppRoute path="/dashboard" component={Dashboard} />
          <AppRoute path="/articleview/:articleID" component={articleview} />
          <AppRoute path="/portfolios" component={portfolios} />
          <AppRoute path="/register" component={register} fullLayout />
          <AppRoute path="/user/edit" component={userEdit} />
          <AppRoute path="/user/view" component={userView} />

        </Switch>
      </Router>
    )
  }
}

export default AppRouter
