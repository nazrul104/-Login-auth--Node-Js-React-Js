var jwt = require('jwt-simple');
var validateUser = require('../routes/auth').validateUser;
var api_tokens = require("../models/api_tokens");
module.exports = function(req, res, next) {

  // When performing a cross domain request, you will recieve
  // a preflighted request first. This is to check if our the app
  // is safe. 

  // We skip the token outh for [OPTIONS] requests.
  //if(req.method == 'OPTIONS') next();

  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
  var key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];
  if (token || key) {
    try {
      var decoded = jwt.decode(token, require('../config/secret.js')());

      if (decoded.exp <= Date.now()) {
        res.status(400);
        res.json({
          "status": 400,
          "message": "Token Expired"
        });
        return;
      }

      // Authorize the user to see if s/he can access our resources

    var query = api_tokens.findOne({
            token: token
        });
        query.then(function(doc) {
         //success
        if (req.url.indexOf('/api/v1/') >= 0) {
          next(); // To move to next middleware
        } else {
          res.status(403);
          res.json({
            "status": 403,
            "message": "Not Authorized"
          });
          return;
        }

        }, function() {
          return {status: 'error', msg: 'Invalid Request. please contact with vendor'};
        });

    } catch (err) {
      res.status(500);
      res.json({
        "status": 500,
        "message": "Oops something went wrong",
        "error": err
      });
    }
  } else {
    res.status(401);
    res.json({
      "status": 401,
      "message": "Invalid Token or Key"
    });
    return;
  }
};
