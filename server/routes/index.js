const express = require('express');
const { isLoggedIn, isNotLoggedIn } = require("../middlewares");
const {login, logout} = require("../controller/auth");
const router = express.Router();

router.use((req, res, next)=>{
    res.locals.user = req.user;
    next();
})

router.get('/', (req, res, next)=>{
    res.render('index', { title: '관리자모드'});
});

router.post('/login', isNotLoggedIn, login);
router.get('/logout', isLoggedIn, logout);
module.exports = router;