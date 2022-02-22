import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';
import { ShoppingPage } from '../02-component-patterns/pages/ShoppingPage';

import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="nav-active">Shopping</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" render={() => <ShoppingPage />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}