import * as acionTypes from './actionTypes';

const initTotal = `[{"Date":"2017-08-01","count":910},{"Date":"2017-08-02","count":679},{"Date":"2017-08-03","count":457},{"Date":"2017-08-04","count":586},{"Date":"2017-08-05","count":1053},{"Date":"2017-08-06","count":945},{"Date":"2017-08-07","count":672},{"Date":"2017-08-08","count":852},{"Date":"2017-08-09","count":628},{"Date":"2017-08-10","count":1848},{"Date":"2017-08-11","count":1687},{"Date":"2017-08-12","count":629},{"Date":"2017-08-13","count":1481},{"Date":"2017-08-14","count":782},{"Date":"2017-08-15","count":890},{"Date":"2017-08-16","count":878},{"Date":"2017-08-17","count":1095},{"Date":"2017-08-18","count":1067},{"Date":"2017-08-19","count":894},{"Date":"2017-08-20","count":1433},{"Date":"2017-08-21","count":1109},{"Date":"2017-08-22","count":1760},{"Date":"2017-08-23","count":1385},{"Date":"2017-08-24","count":1872},{"Date":"2017-08-25","count":59},{"Date":"2017-08-26","count":421},{"Date":"2017-08-27","count":522},{"Date":"2017-08-28","count":1300},{"Date":"2017-08-29","count":995},{"Date":"2017-08-30","count":661},{"Date":"2017-08-31","count":314}]`;

const initDetail = `[{"applications":{"path":"/applications","count":150},"things":{"path":"/things","count":760}},{"applications":{"path":"/applications","count":330},"things":{"path":"/things","count":349}},{"applications":{"path":"/applications","count":253},"things":{"path":"/things","count":204}},{"applications":{"path":"/applications","count":440},"things":{"path":"/things","count":146}},{"applications":{"path":"/applications","count":904},"things":{"path":"/things","count":149}},{"applications":{"path":"/applications","count":799},"things":{"path":"/things","count":146}},{"applications":{"path":"/applications","count":654},"things":{"path":"/things","count":18}},{"applications":{"path":"/applications","count":539},"things":{"path":"/things","count":313}},{"applications":{"path":"/applications","count":384},"things":{"path":"/things","count":244}},{"applications":{"path":"/applications","count":868},"things":{"path":"/things","count":980}},{"applications":{"path":"/applications","count":757},"things":{"path":"/things","count":930}},{"applications":{"path":"/applications","count":241},"things":{"path":"/things","count":388}},{"applications":{"path":"/applications","count":573},"things":{"path":"/things","count":908}},{"applications":{"path":"/applications","count":525},"things":{"path":"/things","count":257}},{"applications":{"path":"/applications","count":857},"things":{"path":"/things","count":33}},{"applications":{"path":"/applications","count":698},"things":{"path":"/things","count":180}},{"applications":{"path":"/applications","count":200},"things":{"path":"/things","count":895}},{"applications":{"path":"/applications","count":74},"things":{"path":"/things","count":993}},{"applications":{"path":"/applications","count":852},"things":{"path":"/things","count":42}},{"applications":{"path":"/applications","count":776},"things":{"path":"/things","count":657}},{"applications":{"path":"/applications","count":768},"things":{"path":"/things","count":341}},{"applications":{"path":"/applications","count":877},"things":{"path":"/things","count":883}},{"applications":{"path":"/applications","count":455},"things":{"path":"/things","count":930}},{"applications":{"path":"/applications","count":888},"things":{"path":"/things","count":984}},{"applications":{"path":"/applications","count":30},"things":{"path":"/things","count":29}},{"applications":{"path":"/applications","count":313},"things":{"path":"/things","count":108}},{"applications":{"path":"/applications","count":399},"things":{"path":"/things","count":123}},{"applications":{"path":"/applications","count":904},"things":{"path":"/things","count":396}},{"applications":{"path":"/applications","count":445},"things":{"path":"/things","count":550}},{"applications":{"path":"/applications","count":600},"things":{"path":"/things","count":61}},{"applications":{"path":"/applications","count":197},"things":{"path":"/things","count":117}}]`;


const getInitialState = () => ({
  total: JSON.parse(initTotal),
  detail: JSON.parse(initDetail),
});

export default (state = getInitialState(), action = {}) => {
  const { payload } = action;
  switch(action.type) {
    case acionTypes.UPDATE_RANDOM_DATA:
      return {
        ...state,
        detail: payload.detail,
        total: payload.total,
      };
    default:
      return state;
  }

};
