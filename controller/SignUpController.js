const { signUpService } = require("../service/SignUpService");

exports.signUpController = {
    init: function (singUpRouter) {
        singUpRouter.post("", (req, res) => returnResponse(req, res, signUpService.createRegistration(req.body)));
        return singUpRouter;
    }
};