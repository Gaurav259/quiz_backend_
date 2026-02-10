const express = require('express'); 
const jwt = require('jsonwebtoken');
const {v4: uuid} = require('uuid');

const userdata = require('../db/users');



const singnupHandler = (req,res) => {
    const { username, password } = req.body;
    const userExists = userdata.users.some(user => user.username === username);
    if (userExists) {
      return res.status(400).json({ message: 'Username already exists' });
    }else{
       const id = uuid();
       const newUser = { id, username, password };
       userdata.users = [...userdata.users, newUser];
       const token = jwt.sign({id: username },process.env.SECRET_TOKEN)
       res.json({message:`Success - created new user --> ${username}::${token}`});
    }
  }

const loginHandler = (req,res) => {
    const { username, password } = req.body;
  const user = userdata.users.some(user => user.username === username && user.password === password);
  if (user) {
    const token = jwt.sign({id: username },process.env.SECRET_TOKEN)
    res.json({ username,token,message: 'Login successful'});
  } else {
    res.status(401).json({ message: 'Invalid email or password' })

  }
}

module.exports = {loginHandler,singnupHandler}