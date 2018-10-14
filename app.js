
import regeneratorRuntime from './libs/regenerator-runtime/runtime.js'
import promisefy from './promisefy.js'
import 'wx-promise.js'

App({
  async onLaunch() {
    let ret = await promisefy(wx.login)()
    console.log(ret)
    ret = await wx.pro.login()
    console.log(ret)
  }
})
