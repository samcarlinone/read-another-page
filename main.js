import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'theming'
import { Home } from './src/home'
import theme from './src/styles/theme'
import { DetailView } from './src/details'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/details/:slug">
          <DetailView />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('main'))
