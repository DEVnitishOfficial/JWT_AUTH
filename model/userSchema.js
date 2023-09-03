
const mongoose = require ('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({

    name:{
        type:String,
        required:[true,'user name is required'],
        minLength:[5,'Name must be at least 5 char'],
        maxLength:[50,'Name must be less than 50 char'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'user email is required'],
        unique:true,
        lowercase:true,
        unique:[ture,'already registered']

    },
    password:{
        type:String,
    },
    forgetPasswordToken:{
        type:String,
    },
    forgetPasswordExpiryDate:{

    }
});

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;