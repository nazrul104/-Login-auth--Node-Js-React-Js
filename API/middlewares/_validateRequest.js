var jwt = require('jwt-simple');
var validateApiRequest = require('../routes/auth').validateMyRequest;

module.exports = function(req, res, next) {

  // When performing a cross domain request, you will recieve
  // a preflighted request first. This is to check if our the app
  // is safe. 

  // We skip the token outh for [OPTIONS] requests.
  //if(req.method == 'OPTIONS') next();

  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
  //var key = (req.body && req.body.x_key) || (req.query && req.query.x_key) || req.headers['x-key'];
//console.log(token);
  if (token) {
 /*     var decoded = jwt.decode(token, require('../config/secret.js')());
      if (decoded.exp <= Date.now()) {
        res.status(400);
        res.json({
          "status": 400,
          "message": "Token Expired"
        });
        return;
      }*/

      // Authorize the user to see if s/he can access our resources

      var data = validateApiRequest(token); 
      console.log(data);
      if (data.status =="success") {
        console.log('imhere');
        if ((req.url.indexOf('/api/v1/') >= 0)) {
          next(); // To move to next middleware
        } else {
          res.status(403);
          res.json({
            "status": 403,
            "message": "Not Authorized"
          });
          return;
        }
      } else {
        res.status(401);
        res.json({
          "status": 401,
          "message": "Invalid request"
        });
        return;
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
