const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
router.get('/',(req,res,next) => {
    res.sendFile(path.join(__dirname,'..','views','main.html'));
});

module.exports = router;