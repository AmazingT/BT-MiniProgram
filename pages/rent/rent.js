// pages/rent/rent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:["全部","上海市","深圳市","杭州市","南京市"],
    factory: ["江南皮革厂", "深圳药厂", "杭州电厂", "南京鞋厂"],
    model: ["超大号","大号", "中号", "小号"],
    cityIndex: 0,
    isCityPicker: true,
    isFactoryPicker: true,
    isModelPicker: true,
    tapActive: 0,
    productInfo: [
      {
        id: "1",
        imgUrl: "/images/rent/product.png",
        proName: "中海达IRTK2",
        dayRentMin: 80, // 日租金最小值
        dayRentMax: 200, // 日租金最大值
        deposit: 1000, // 押金
        proEnName: "V60",
        proAddress: "太原",
        proCount: 100
      },
      {
        id: "2",
        imgUrl: "/images/rent/product.png",
        proName: "天宝IRUT",
        dayRentMin: 100, // 日租金最小值
        dayRentMax: 500, // 日租金最大值
        deposit: 1000, // 押金
        proEnName: "V60",
        proAddress: "太原",
        proCount: 68
      },
      {
        id: "3",
        imgUrl: "/images/rent/product.png",
        proName: "天宝IRUT8",
        dayRentMin: 100, // 日租金最小值
        dayRentMax: 500, // 日租金最大值
        deposit: 1000, // 押金
        proEnName: "V60",
        proAddress: "太原",
        proCount: 68
      },
      {
        id: "4",
        imgUrl: "/images/rent/product.png",
        proName: "中海达IRTK2",
        dayRentMin: 80, // 日租金最小值
        dayRentMax: 200, // 日租金最大值
        deposit: 1000, // 押金
        proEnName: "V60",
        proAddress: "太原",
        proCount: 68
      },
      {
        id: "5",
        imgUrl: "/images/rent/product.png",
        proName: "中海达IRTK2",
        dayRentMin: 80, // 日租金最小值
        dayRentMax: 200, // 日租金最大值
        deposit: 1000, // 押金
        proEnName: "V60",
        proAddress: "太原",
        proCount: 68
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

  pickerChange: function (e) { 
    var id = e.target.dataset.id;
    switch(id) {
      case "1":
        this.setData({
          isCityPicker: false,
          cityIndex: e.detail.value
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
          isModelPicker: false,
          modelIndex: e.detail.value
        })
        break;
      default:
        break;
    }
  },

  selectItemTap: function (e) {
    var name = e.target.dataset.name;
    switch(name){
      case "rtk":
        this.setData({
          tapActive: 0
        });
        break;
      case "qzy":
        this.setData({
          tapActive: 1
        });
        break;
      case "szy":
        this.setData({
          tapActive: 2
        });
        break;
      default:
        break;
    }
  }
})