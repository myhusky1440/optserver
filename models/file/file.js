/**
 * Created by Administrator on 2018/1/10 0010.
 */
var fs = require("fs");



function readFile(fileUrl){
    console.log(fs.readFileSync(fileUrl).toString())
   return fs.readFileSync(fileUrl).toString();
}

function writerFile(str,fileUrl,callback) {
    fs.writeFile(fileUrl, str,  function(err) {
        if (err) {
            return console.error(err);
        }
        console.log("数据写入成功！");
        console.log("--------我是分割线-------------")
        console.log("读取写入的数据！");
        fs.readFile(fileUrl, function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("异步读取文件数据: " + data.toString());
            callback(str)
        });
    });
}

exports.readFile = readFile
exports.writerFile = writerFile