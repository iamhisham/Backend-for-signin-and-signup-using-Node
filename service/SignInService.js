const { DB, CustomException, Response, Util } = require("serverless-base-util");
const { DataNotFoundException, BadRequestException } = CustomException;

exports.signInService = {
    validation: async function (body) {
    },
    getRegistration: function (email) {
        return new Promise(async (resolve, reject) => {
            try {
                let Existingemail = await DB.sign_up.findOne({ where: { email: email } });
                if (!Existingemail) throw DataNotFoundException("Email not found");

                resolve(Existingemail);

            } catch (error) { reject(error); }
        })
    },

}