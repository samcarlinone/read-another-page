import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'theming'
import theme from './src/styles/theme'

import { Home } from './src/home'
import { DetailView } from './src/details'
import { NotFound } from './src/not-found'

console.log(NotFound)

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/details/:slug">
          <DetailView />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('main'))
