import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  console.log(routes)
  return (
    <Suspense fallback={ <span>Loading...</span>} >
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              {
                routes.map(({path, name},index) => (
                  <li key={index}>
                    <NavLink exact to={path} activeClassName="nav-active">{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            {
              routes.map(({path, Component},index) => (
                <Route 
                key={index}
                path={path} 
                render={() => <Component />}
                />
                ))
              }
            <Redirect to={routes[0].path} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}