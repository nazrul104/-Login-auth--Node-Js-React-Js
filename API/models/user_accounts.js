var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Use_accounts   = new Schema({     	   
         user_type_id: String,
         user_type_name: String,
         title: {type: String, enum: ['Mr.', 'Mrs.', 'Ms.']},
         first_name: String,
         last_name: String,
         sur_name: String,
         email: String,
         mobile_no: String,
         date_of_birth: String,
         date_of_anniversary: String,
         password: String,
         primary_address: {
            address1: String,
            address2: String,
            town: String,
            country: String,
            postcode: String
         }, 
         order_address: [{
            address1: String,
            address2: String,
            town: String,
            country: String,
            postcode: String
         },
         {
            address1: String,
            address2: String,
            town: String,
            country: String,
            postcode: String
         }], 
         access_cradentials: {            
         },            
         access_token_created_at: String,
         access_token: String,         
         ip_address: String,         
         registered_platform: 0,
         status: { type: Boolean, default: 1 },    
         sms_status: { type: Boolean, default: 0 },
         subscription_status: { type: Boolean, default: 1 },
         registered_restaurant: String,
         created_date:  { type: Date, default: Date.now },
         updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Use_accounts', Use_accounts);


