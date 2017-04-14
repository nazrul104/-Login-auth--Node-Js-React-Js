var express = require('express');
var app = express();
var mongoose = require('mongoose');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
mongoose.Promise = global.Promise;
var User_accounts = require("../models/user_accounts");

/* GET home page. */

var user_account = {
    signUp: function(req,res){
   res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
        console.log(req.body);
    var user = new User_accounts({ 
        email: req.body.useremail, 
        password: req.body.password
        
    });
    user.save(function(err,user) {
        if (err) throw err;
        console.log('User saved successfully '+user);
        res.json({ success: true });
    });
    },
    loginAuth: function(req, res) { 
    // find the user
   res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    User_accounts.findOne({
        email: req.body.useremail
    }, function(err, user) {
        //console.log(user);
        if (err) throw err;
        if (!user) {
            console.log();
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                
                 console.log(req.body.password );

                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                // if user is found and password is right
                // create a token
                var token = jwt.sign(user, 'super.super.secret.shhh', {
                    expiresIn: 86400 // expires in 24 hours
                });
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }       

        }

    });
    }
};



//module.exports = products;

module.exports = user_account;