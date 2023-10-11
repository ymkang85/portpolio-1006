const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.send('라우터가 실행됨.');
});

module.exports = router;