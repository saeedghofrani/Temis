/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// mongoose plugin dependencie
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    
    first_name: {
        type: String,
        trim: true,
        required: [true, 'First name is required']
    },
    last_name: {
        type: String,
        trim: true,
        required: [true, 'Last name is required']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Password is required'],
        minlength: [8, 'invalid password'],
        validate: {
            validator: function (v) {
                const reg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
                return reg.test(v);
            },
            message: '{VALUE} is not a valid password!'
        },
        select: false,
    },
    username: {
        type: String,
        trim: true,
        required: [true, 'Username is required'],
        minlength: [5, 'invalid phone'],
    },

}, { timestamps: true });

//hashing password hook
UserSchema.pre('save', async function (next) {
    const user = this._doc;
    if (this.isNew || this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        return next();
    }
});

module.exports = mongoose.model('User', UserSchema);