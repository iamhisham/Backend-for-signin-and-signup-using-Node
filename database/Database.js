module.exports = {
    init: function (db) {
        var { sequelize, Sequelize } = db;
        db.sign_up = require("../model/Signup")(Sequelize, sequelize);
    }
}