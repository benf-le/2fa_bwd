import mongoose from 'mongoose';

const Schema = mongoose.Schema;
import bcrypt from 'bcryptjs'



//create data database
const UserSchema = new Schema({
    username: {type: String,required: true, unique: true},
    password: {type: String, required: true},

}, {
    timestamps: true
});

// UserSchema.methods.encryptPassword = function (password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
// }
//
// UserSchema.methods.validPassword = function (password) {
//     return bcrypt.compareSync(password, this.password)
// }


export const UsersSchema = mongoose.model('user_db', UserSchema);
