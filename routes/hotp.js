/**
 * Created by Administrator on 2018/1/10 0010.
 */
const express = require('express');
const {resolve} = require('path');
const hotp = require("../models/hotp/hopt");

const {config} = require('../public/javascripts/env');
const {readFile,writerFile}  = require("../models/file/file");

const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/sendKey', function(req, res, next) {
    let key = req.query.key;

    let fileUrl = resolve(config.fileUrl);
    let num = readFile(fileUrl);
    console.log("开始数字"+num)
    let flag = false;
    function send(num) {
        res.send(num);
    }
    for(let i = num;i<num+50;i++){

        flag = hotp.hotpFuns.verify(key,i);
        if(flag){
            num = i;
            writerFile(i,fileUrl,send);
            return;
        }
    }
    if(!flag){
        res.send(false);
    }

});
module.exports = router;
