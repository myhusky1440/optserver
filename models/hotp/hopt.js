/**
 * Created by Administrator on 2018/1/10 0010.
 */
// import
let jsotp = require('jsotp');
let {config} = require('../../public/javascripts/env');

// Create HOTP object
let hotp = jsotp.HOTP(config.key);
var hotpFuns ={};

hotpFuns.verify =function (key,num) {
    let hotp = jsotp.HOTP(config.key);
    //console.log("正在循环"+num);
    return hotp.verify(key, num);
};
exports.hotpFuns = hotpFuns;