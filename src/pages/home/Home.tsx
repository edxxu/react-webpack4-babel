import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Count from './components/Count';

const store = createStore(reducer);

export default class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Count />
      </Provider>
    );
  }
}
