const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },

    firstname:{
        type: String,
        required: true,
        trim: true
    },

    lastname:{
        type: String,
        required: true,
        trim: true
    },

    faceId:{
        type:String,
        required:false
    },

    role:{
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },

    img:{
        type: String,
        required: false,
        trim: true,
    }

},{
    timestamps: true,
})


//hash the password before the user is saved
userSchema.pre('save', function(next){
	var user = this;
	//hash the password only if the password has been changed or user is new
	if(!user.isModified('password')) return next();

	//generate the salt
	bcrypt.hash(user.password, null, null, function(err, hash){
		if (err) return next(err);

		//change the password to the hashed version
		user.password = hash;
		next();
	});
});

// compare the input with the hashed password
userSchema.methods.comparePassword = function(password) {
	var user = this;
	return bcrypt.compareSync(password, user.password);
};


module.exports = mongoose.model('User', userSchema);
