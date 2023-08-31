const { DB, CustomException, Response, Util } = require("serverless-base-util");
const { DataNotFoundException, BadRequestException } = CustomException;

exports.signUpService = {
    validation: async function (body) {
    },
    createRegistration: function (body) {
        return new Promise(async (resolve, reject) => {
            try {
                var signUpDetails = {
                    email: body.email,
                    pass: body.pass
                }
                var newRegister = await DB.sign_up.create(signUpDetails);
                resolve(newRegister);
            } catch (error) { reject(error); }
        })
    },

}