import { combineReducers } from 'redux';
import { ChartReducer1 } from './ChartContainer1';
import { ChartReducer2 } from './ChartContainer2';

export default combineReducers({
  chart1: ChartReducer1,
  chart2: ChartReducer2,
});
