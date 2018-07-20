// pages/hire/hire.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // product type
    isProductPicker: true,
    proIndex: 0,
    proType: ["RTK","全站仪","水准仪"],
    // product factory
    isFactoryPicker: true,
    factoryIndex: 0,
    factory: ["江南皮革厂","南京鞋厂","杭州服装厂","上海皮鞋厂"],
    // day rent
    isDayRentPicker: true,
    rentIndex: 0,
    dayRentType: ["1000-5000","5000-10000","10000-15000","15000-20000"],
    // select city
    isCityPicker: true,
    cityIndex: 0,
    city: ["上海市", "深圳市", "杭州市", "南京市"],
    // rent data
    isDataPicker: true,
    date: "",
    // pick goods way
    isGoodsPicker: true,
    goodsIndex: 0,
    goods: ["上门自提","邮寄"],
    // upload
    files: [],
    // hackIOS
    hackIOS: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // ios的textarea左侧内边距hack
    var system = wx.getSystemInfoSync();
    if (system.platform == "ios") {
      this.setData({
        hackIOS: "10px"
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  // picker change event
  pickerChange: function (e) {
    //console.log(e.target.dataset.id);
    var id = e.target.dataset.id;
    switch (id) {
      case "1":
        this.setData({
          isProductPicker: false,
          proIndex: e.detail.value
        })
        break;
      case "2":
        this.setData({
          isFactoryPicker: false,
          factoryIndex: e.detail.value
        })
        break;
      case "3":
        this.setData({
          isDayRentPicker: false,
          rentIndex: e.detail.value
        })
        break;
      case "4":
        this.setData({
          isCityPicker: false,
          cityIndex: e.detail.value
        })
        break;
      case "5":
        this.setData({
          isDataPicker: false,
          date: e.detail.value
        })
        break;
      case "6":
        this.setData({
          isGoodsPicker: false,
          goodsIndex: e.detail.value
        })
        break;
      default:
        break;
    }
    //console.log(this.data.isPicker);
  },

  // confirm protocol
  bindAgreeChange: function (e) {
    this.setData({
      isAgree: !!e.detail.value.length
    });
  },

  // submit user data
  formSubmit: function (e) {
    //console.log(e.detail.value);
    wx.navigateTo({
      //url: '../msg/success/success',
      url: '../msg/fail/fail'
    })
  }
})