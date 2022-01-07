// This is response wrapper - service will use it to send status and data for response

const responseWrapper = (status, data) => {
  let res = { status, data };
  return res;
};

module.exports.responseWrapper = responseWrapper;

// This is a shortcut for success with status 200 and data
module.exports.responseSuccess = (data) => {
  return responseWrapper(200, data);
};

// This is a shortct for error with service setting the status and error message
module.exports.responseError = (status, error, data = null) => {
  return responseWrapper(status, { error, data });
};

// This is used for server error message I.e status 500
module.exports.SERVER_ERROR = "Server Error";
