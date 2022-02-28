// JavaScript 社区发起，在NodeJS上应用并推广
// 后续也影响到了浏览器端JavaScript

// exports
// module.exports 会覆盖exports上的所有属性
// 每一个模块是一个独立的作用域

exports.add = (a, b) => {
  return a + b;
};
module.exports = function min(a, b) {
  return a - b;
};
