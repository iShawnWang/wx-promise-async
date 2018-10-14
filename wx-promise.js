import promisefy from './promisefy.js'

wx.pro = {}
var properties = Object.getOwnPropertyNames(wx)
if(!properties){
  throw 'WFT no wx ???'
}

for (let prop of properties) {
  var descriptor = Object.getOwnPropertyDescriptor(wx, prop)
  if (descriptor.get) {
    wx.pro[prop] = promisefy(wx[prop])
  }
}