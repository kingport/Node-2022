// Promise
// 当前事件循环得不到结果，但是未来的事件循环会给到你结果
// 是一个状态机
// pending
// fulfilled/resolved
// rejected

let promise = new Promise(function (res, rej) {
  setTimeout(() => {
    res();
  }, 500);
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log(promise); // Promise { <pending> }

setTimeout(() => {
  console.log(promise); // Promise { undefined }
}, 800);

// .then 和 .catch
// resolved 状态的primise会回调后面的第一个.then
// rejected 状态的primise会回调后面的第一个.catch
// 任何一个rejected 状态且后面没有.catch 的promise 都会造成浏览器/node环境的全局错误
