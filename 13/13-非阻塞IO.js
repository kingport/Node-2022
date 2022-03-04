// NodeJS 的非阻塞IO
// IO Input output 一个系统的输入和输出
// 阻塞IO 和 非阻塞IO
// 的区别在于系统接受输入再到输出的期间，能不能接受其他的输入
const glob = require("glob");

// 阻塞
// let result = null;
// console.time("glob");
// result = glob.sync(__dirname + "/**/*");
// console.timeEnd("glob"); //glob: 38.269ms
// console.log(result);

// 非阻塞
let result = null;
console.time("glob");
glob(__dirname + "/**/*", (err, res) => {
  result = res;
  console.log("got result"); // got result
});
console.timeEnd("glob"); // glob: 4.642ms
console.log(2 + 2); // 4
