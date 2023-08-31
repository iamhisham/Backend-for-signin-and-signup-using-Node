const BaseUtil = require("serverless-base-util");
const Database = require("./database/Database");

const { signUpController } = require("./controller/SignUpController.js");
const { signInController } = require("./controller/SignInController.js");

BaseUtil.registerDBTables(Database.init);
BaseUtil.register("/signup", signUpController.init);
BaseUtil.register("/signin", signInController.init);

var port = process.env.SERVER_PORT || 8080;
BaseUtil.startApplication(port, () => console.log("Server Started at http://localhost:" + port + "/"))