import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home from '../pages/home/Home';

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      <Link to="/">toHome</Link>
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </main>
  </div>
);

export default PrimaryLayout;
