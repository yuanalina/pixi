import * as PIXI from 'pixi.js';
console.log(PIXI);
// 测试pixi是否连接上
let type = "WebGL";
if(!PIXI.utils.isWebGLSupported()) {
  type = "canvas";
}
PIXI.utils.sayHello(type);

// test
let app = new PIXI.Application({width: 200, height: 200});
document.body.appendChild(app.view);
