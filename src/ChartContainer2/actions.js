import * as acionTypes from './actionTypes';


export const UpdateData = ({total, detail}) => ({
  type: acionTypes.UPDATE_RANDOM_DATA,
  payload: {
    total,
    detail,
  },
})
