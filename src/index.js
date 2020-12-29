import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { Auth0Provider } from "./authServices/auth0/auth0Service"
import config from "./authServices/auth0/auth0Config.json"
import { IntlProviderWrapper } from "./utility/context/Internationalization"
import { Layout } from "./utility/context/Layout"
import * as serviceWorker from "./serviceWorker"
import { store, persistor } from "./redux/storeConfig/store"
import Spinner from "./components/@vuexy/spinner/Fallback-spinner"
import "./index.scss"
import "./@fake-db"

const LazyApp = lazy(() => import("./App"))

// configureDatabase()

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin + process.env.REACT_APP_PUBLIC_PATH}>
    <Provider store={store}>
        <Suspense fallback={<Spinner />}>
          <Layout>
            <IntlProviderWrapper>
              <PersistGate persistor={persistor}>
                  <LazyApp />
              </PersistGate>
            </IntlProviderWrapper>
          </Layout>
        </Suspense>
    </Provider>
  </Auth0Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
