# 小程序 Async await 语法



过程式(命令式) 编程, 对人类来说是比较自然, 容易理解的

在 JS 中, 使用 `async await` 语法来实现 类似 `同步调用的命令式编程`



## 引入



1. 下载 polifyll  [regenerator-runtime](https://github.com/facebook/regenerator/blob/master/packages/regenerator-runtime/runtime.js) 放到项目目录 `./libs/`中 (也可以用 webpack 等引入)
2. 在需要使用 async/await 的 JS 文件的引用这个库文件。
   1. `import regeneratorRuntime from './libs/regenerator-runtime/runtime.js'`
3. 微信开发者工具的项目设置中 ES6 转 ES5 处于设置为打开



## Promisefy

小程序的 Api 都是基于回调的, 需要改造为 Promise 类型的

```javascript
const promisefy = api => {
  return (options, ...params) => {
    return new Promise((resolve, reject) => {
      api({...options, success:resolve, fail:reject}, ...params)
    })
  }
}

export default promisefy
```



`然后 promisefy(wx.login)() 即可`



## 使用



```
// app.js

import regeneratorRuntime from './libs/regenerator-runtime/runtime.js'
import promisefy from './promisefy.js'

App({
  async onLaunch() {
    const ret = await promisefy(wx.login)()
    console.log(ret)
  }
})
```



# Ref



> [微信小程序开发用 JS ES8 async/await 解决异步调用](https://pluwen.com/archives/397)
