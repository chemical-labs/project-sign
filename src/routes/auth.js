const express = require('express')
const route = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const modelUsers = require('../models/Users')

route.post('/register', (req,res) => {
    modelUsers.find({ req.body.email }, (err, check) => {
        if(check.length > 0){
            res.json({ error: '[!] Users already registered' }).status(301)
        }else{
            bcrypt.hash(req.body.password, 10, (err, password) => {
                if(err){
                    res.json({ error: '[!] Something wrong in server' }).status(501)
                }else{
                    modelUsers.insertMany({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        password: password
                    }, (err, done) => {
                        if(err){
                            res.json({ error: '[!] Something wrong in server' }).status(501)
                        }else{
                            res.json({ done: 'Successfully registered users' })
                        }
                    })
                }
            })
        }
    })
})

module.exports = route
