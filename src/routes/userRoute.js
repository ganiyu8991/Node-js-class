
const express = require('express')
const router = express.Router()
const {getHome, postContact} = require('../controllers/contactController')
const {postUser, login, getAll, getSingle, deleteUser} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
const {upload} = require('../utils/upload')


router.get('/', getHome).get('/all-users',protect, getAll).get("/get-single/:id", protect, getSingle).post('/post-contact', postContact).post('/post-user', upload.single("profilePicture"), postUser).post('/login', login).delete("/delete-user/:id", protect, deleteUser)

module.exports = router