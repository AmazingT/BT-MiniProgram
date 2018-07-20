Component({
  data: {
    goodsDetail: null // 当前选择商品信息
  },
  properties: {
    product: {
      type: Array,
      value: []
    }
  },
  methods: {
    // 商品详情页
    selectProductTap: function (e) {
      var _this = this;
      var goodsId = e.currentTarget.dataset.goodsid;

      _this.data.product.forEach(function(item) {
        if (item.id == goodsId) {
          _this.setData({
            goodsDetail: item
          })
        }
      });
      
      wx.navigateTo({
        url: '/pages/rent/rent-detail/rent-detail?goods=' + JSON.stringify(this.data.goodsDetail),
      })
    }
  }
})