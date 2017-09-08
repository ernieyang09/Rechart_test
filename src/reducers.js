import { combineReducers } from 'redux';
import { ChartReducer1 } from './ChartContainer1';

export default combineReducers({
  chart1: ChartReducer1,
});
