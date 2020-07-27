import * as React from "react"
import * as Root from "./pages/Root"
import * as Test from "./pages/Test"
import * as NotFound from "./pages/NotFound"
import * as LandingsFirst from "./pages/landings/First"

import {BrowserRouter, Switch, Route} from "react-router-dom"
import {Provider} from "react-redux"
import {store} from "./store"

export const App: React.FC = () =>
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Root.View />
        </Route>
        <Route exact path="/test">
          <Test.View />
        </Route>
        <Route exact path="/landings/first">
          <LandingsFirst.View />
        </Route>
        <Route>
          <NotFound.View />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>