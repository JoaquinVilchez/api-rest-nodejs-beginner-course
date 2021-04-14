'use strict'

const express = require('express');
const api = express.Router()
const UserController = require('../controllers/user')
const ProductController = require('../controllers/product')
const auth = require('../middlewares/auth')

api.get('/product', ProductController.getProducts)
api.get('/product/:productId', ProductController.getProduct)
api.post('/product', auth, ProductController.getProduct)
api.put('/product/:productId', auth, ProductController.getProduct)
api.delete('/product/:productId', auth, ProductController.getProduct)

api.post('/signup', UserController.signUp)
api.post('/login', UserController.signIn)

api.get('/private', auth, function(req,res){
    res.status(200).send({message:`Tienes acceso`})
})

module.exports = api