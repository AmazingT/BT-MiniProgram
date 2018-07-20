// pages/company/company.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPersonPicker: true,
    personIndex: 0,
    personRange: ["0-50", "50-100","100-500","500-1000"],
    isTradePicker: true,
    tradeIndex: 0,
    trade: ["金融业", "服务业", "公共事业", "娱乐业", "制造业", "其他"],
    isPositionPicker: true,
    positionIndex: 0,
    position: ["总经理", "部门主管", "区域负责人", "普通员工"]
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

  // 信息选择
  pickerChange: function (e) {
    var id = e.target.dataset.id;
    switch (id) {
      case "1":
        this.setData({
          isPersonPicker: false,
          personIndex: e.detail.value
        })
        break;
      case "2":
        this.setData({
          isTradePicker: false,
          tradeIndex: e.detail.value
        })
        break;
      case "3":
        this.setData({
          isPositionPicker: false,
          positionIndex: e.detail.value
        })
        break;
      default:
        break;
    }
  }
})