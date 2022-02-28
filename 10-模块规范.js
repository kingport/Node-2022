// node 独有的变量
// 当前文件位置
// console.log(__filename);
// 当前目录位置
// console.log(__dirname);
// 环境变量
// console.log(process);
console.log(process.argv);

// 获取用户行为
var playAciton = process.argv[process.argv.length - 1];
console.log(playAciton);
// 随机
var random = Math.random() * 3;

if (random < 1) {
  var computerAciton = "rock";
} else if (random > 2) {
  var computerAction = "scissor";
} else {
  var computerAction = "paper";
}

if (computerAciton === playAciton) {
  console.log("平局");
} else if ((computerAciton === "rock" && playAciton === "paper") || (computerAciton === "scissor" && playAciton === "rock") || (computerAciton === "paper" && playAciton === "scissor")) {
  console.log("你赢了");
} else {
  console.log("你输了");
}
