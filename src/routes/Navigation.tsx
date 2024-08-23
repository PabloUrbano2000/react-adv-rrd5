import {
  NavLink,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'

import { Suspense } from 'react'
import logo from '../logo.svg'
import { routes } from './routes'

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Router>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />
            <ul>
              {routes.map((route) => (
                <li key={route.name}>
                  <NavLink to={route.path} activeClassName='nav-active'>
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                render={() => <route.Component />}
              />
            ))}
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  )
}
