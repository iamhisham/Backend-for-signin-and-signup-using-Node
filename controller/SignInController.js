const { signInService } = require("../service/SignInService");

exports.signInController = {
    init: function (singInRouter) {
        singInRouter.get("", (req, res) => returnResponse(req, res, signInService.getRegistration(req.query.email)));
        return singInRouter;
    }
};