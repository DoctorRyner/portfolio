import * as React from "react"
import * as Root from "./pages/Root"
import * as NotFound from "./pages/NotFound"
import * as LandingsFirst from "./pages/landings/First"
import * as TheaterOfThunder from "./pages/websites/TheaterOfThunder"

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
        <Route exact path="/websites/theater-of-thunder">
          <TheaterOfThunder.View />
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