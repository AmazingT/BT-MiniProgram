// pages/user/user-hire/user-hire.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myHire: [
      {
        name: '中海达IRTK2',
        factory: '上海皮鞋厂',
        ProductType: 'IRTK2',
        address: '上海',
        count: 58,
        status: 0
      },
      {
        name: '中海达IRTK2',
        factory: '上海皮鞋厂',
        ProductType: 'IRTK2',
        address: '上海',
        count: 58,
        status: 0
      },
      {
        name: '中海达IRTK2',
        factory: '上海皮鞋厂',
        ProductType: 'IRTK2',
        address: '上海',
        count: 58,
        status: 0
      },
      {
        name: '中海达IRTK2',
        factory: '上海皮鞋厂',
        ProductType: 'IRTK2',
        address: '上海',
        count: 58,
        status: 0
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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

  hireProductInfo: function () {
    wx.navigateTo({
      url: 'hire-info/hire-info',
    })
  }
})