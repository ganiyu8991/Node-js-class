
const Joi = require('joi')

const userValidator = Joi.object({
    username: Joi.string().required().min(3).max(20),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6).max(15),
    bio: Joi.string().allow().max(100),
})

module.exports = { userValidator }