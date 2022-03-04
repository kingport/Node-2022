// node 整体架构图

// ==== Application(node代码) ====
//  ==== 通过JS ====
//  ==== JS engine V8引擎 ====
//  操作系统调用 是通过V8来执行 返回结果

// OS模块 Event
// EventEmitter
// 观察者模式
// addEventListener
// removeEventListener

const EventEmitter = require("events").EventEmitter;

class Geektime extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit("newlesson", {
        price: Math.random(),
      });
    }, 3000);
  }
}

const geektime = new Geektime();

geektime.addListener("newlesson", (res) => {
  // 能获取到派发的信息
  console.log("通知", res);
});
