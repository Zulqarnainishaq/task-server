
var utils = {
    component: 'api',
    send_response(res, payload) {
        payload.status = payload.status || 200;
        payload.data = payload.data || {};
        payload.message = payload.message || '';    
        res.locals.response = payload;
        res.status(payload.status).json(payload);
      },

};

module.exports = utils;
