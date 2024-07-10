


var codes = {
	400 : "Could not complete your request.",
	401 : "Unauthorized: Please log in.",
	403 : "Forbidden: You do not have access to access this resource.",
	404 : "The requested resource could not be found.",
	405 : "Request method not allowed.",
	408 : "Request Timeout",
	409 : "Conflict.",
	500 : "Application Error"
}

module.exports = {
  get: function(code,message){
    return {
      status: code,
      data: null,
      msg: message || codes[code] || "An error occurred"
    }
  },
  th(code, msg, actual_cause = null) {
    var error = new Error(msg || codes[code]);
    error.code = code;
    error.msg = msg;
    error.actual_cause = actual_cause || msg;
    //TODO Send email on 500 error
    throw error;
  }
};
