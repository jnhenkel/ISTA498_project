//const bcrypt = require('bcrypt');
//const { Pool } = require('pg');
import users from './data';


let store = {
    addCustomer: (firstName, email, password) => {
        users.push({ 'firstName': firstName, 'email': email, 'password': password });
    },

    findUserInfo: (email, password) => {
        let result = users.find(db =>
            (email.toLowerCase() == db.email.toLowerCase() || email.toLowerCase() == db.email.toLowerCase()) && password == db.password
        );
        return result;
    }
}
//module.exports = { store };
export default store;