import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';

ReactDOM.render(
  <AppContainer>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </AppContainer>,
  document.getElementById('root')
);

/*热更新*/
if (module.hot) {
  module.hot.accept();
}
