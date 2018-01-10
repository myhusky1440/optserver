/**
 * Created by Administrator on 2018/1/10 0010.
 */
// import
let jsotp = require('jsotp');

// Create HOTP object
let hotp = jsotp.HOTP('BASE32ENCODEDSECRET');
hotp.at(0); // => 432143
hotp.at(1); // => 231434
hotp.at(2132); // => 242432
console.log(hotp.at(1))
// Verify with a counter
hotp.verify(242432, 2132); // => true
hotp.verify(242432, 2133); // => false