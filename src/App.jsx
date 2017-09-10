import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import ChartContainer1 from './ChartContainer1'
import ChartContainer2 from './ChartContainer2'
import { devToolsEnhancer } from 'redux-devtools-extension'
import reducers from './reducers';

const preloadedState = {};

const store = createStore(
  reducers,
  preloadedState,
  devToolsEnhancer(),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <ChartContainer1 />
          <ChartContainer2 />
        </div>
      </Provider>
    )
  }
}

export default App;
