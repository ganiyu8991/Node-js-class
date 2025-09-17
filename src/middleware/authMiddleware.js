
const jwt = require('jsonwebtoken')
const userModel = require('../models/userSchema')
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET_KEY;

const protect = async (req, res, next) => {
      let token;

    try {
      
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

            req.user = await userModel.findById(decoded.id).select("-password")

            next()
        }
    } catch (error) {
        console.error(error)
        res.status(401).json({
             reason: error.message,
             message: 'UnAuthorized'
        })
       

    }
   
}

module.exports = {protect}