// pages/user/user-rent/user-rent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myRent: [
      {
        id: "1",
        imgUrl: "/images/rent/product.png",
        proName: "中海达IRTK2",
        factory: "上海皮鞋厂",
        ProductType: "IRTK2",
        dayRentMin: 80, // 日租金最小值
        dayRentMax: 200, // 日租金最大值
        deposit: 1000, // 押金
        phoneNum: '15030929098',
        proEnName: "V60",
        proAddress: "太原",
        proCount: 100,
        status: 0
      },
      {
        id: "2",
        imgUrl: "/images/rent/product.png",
        proName: "天宝IRUT",
        factory: "上海皮鞋厂",
        ProductType: "IRTK2",
        dayRentMin: 100, // 日租金最小值
        dayRentMax: 500, // 日租金最大值
        phoneNum: '18585257502',
        deposit: 1000, // 押金
        proEnName: "V60",
        proAddress: "太原",
        proCount: 68,
        status: 0
      },
      {
        id: "3",
        imgUrl: "/images/rent/product.png",
        proName: "天宝IRUT8",
        factory: "上海皮鞋厂",
        ProductType: "IRTK2",
        dayRentMin: 100, // 日租金最小值
        dayRentMax: 500, // 日租金最大值
        phoneNum: '18585257502',
        deposit: 1000, // 押金
        proEnName: "V60",
        proAddress: "太原",
        proCount: 68,
        status: 0
      },
      {
        id: "4",
        imgUrl: "/images/rent/product.png",
        proName: "中海达IRTK2",
        factory: "上海皮鞋厂",
        ProductType: "IRTK2",
        dayRentMin: 80, // 日租金最小值
        dayRentMax: 200, // 日租金最大值
        phoneNum: '15030929098',
        deposit: 1000, // 押金
        proEnName: "V60",
        proAddress: "太原",
        proCount: 68,
        status: 1
      },
      {
        id: "5",
        imgUrl: "/images/rent/product.png",
        proName: "中海达IRTK2",
        factory: "上海皮鞋厂",
        ProductType: "IRTK2",
        dayRentMin: 80, // 日租金最小值
        dayRentMax: 200, // 日租金最大值
        phoneNum: '13096791648',
        deposit: 1000, // 押金
        proEnName: "V60",
        proAddress: "太原",
        proCount: 68,
        status: 0
      }
    ],
    // 点击的产品信息
    selectedProdcutInfo: {}
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

  // 我的租赁详情
  rentProductInfo: function (e) {
    var _this = this;
    var goodsId = e.currentTarget.dataset.goodsid;

    _this.data.myRent.forEach(function (item) {
      if (item.id == goodsId) {
        _this.setData({
          selectedProdcutInfo: item
        })
      }
    });

    wx.navigateTo({
      url: 'rent-info/rent-info?goods=' + JSON.stringify(this.data.selectedProdcutInfo),
    })
  }
})