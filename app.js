//app.js
var util = require('utils/util.js');

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    this.getLogin();
  },
  apiUrl: 'http://192.168.0.105:8080/BaTuMapping/app/',
  getLogin: function () {
    var that = this;
    wx.login({
      success: res => {
        if (res.code) {
          var url = `${that.apiUrl}auth?code=${res.code}`;
          
        }
      }
    })
  },
  getUserInfo: function (token) {
    wx.getUserInfo({
      success: function (res) {
        var signature = res.signature,
            encryptedData = res.encryptedData,
            rawData = res.rawData,
            iv = res.iv;

        wx.request({
          url: `${_this.apiURL}consumer/getUserInfo`,
          method: "POST",
          header: { 'content-type': 'application/x-www-form-urlencoded' },
          data: {
            token: token,
            rawData: rawData,
            signature: signature,
            encryptedData: encryptedData,
            iv: iv
          },
          success: function (res) {
            if (res.statusCode == 200) {
              _this.globalData.userInfo = res.data.body.info;
              _this.globalData.usercode = res.statusCode;
              _this.globalData.consumer = res.data.body.consumer;
              _this.globalData.isRealName = (res.data.body.consumer.authFlag == 1);
              _this.globalData.isVip = res.data.body.consumer.vipFlag;
              _this.globalData.isCompany = res.data.body.consumer.companyAuthFlag;
              _this.globalData.RealNameInfo = res.data.body.consumer;
            }
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    usercode: 0,
    consumer: null,
    isRealName: false,
    isVip: false,
    isCompany: false,
    RealNameInfo: {}
  }
})