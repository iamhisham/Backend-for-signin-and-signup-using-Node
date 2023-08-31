module.exports = function (Sequelize, sequelize) {
    return sequelize.define("signup", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING
        },
        pass: {
            type: Sequelize.STRING
        }
    })
}