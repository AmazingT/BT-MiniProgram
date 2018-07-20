Component({
  data: {
    files: [],
    imgCount: 3 // 默认限制图片选择数量
  },
  methods: {
    // 本地图片选择
    chooseImage: function (e) {
      var that = this;
      if (this.data.files.length == 3) {
        wx.showToast({
          title: '最多只能添加3张图片喔！',
          icon: 'none',
          duration: 1000
        })
        return;
      }
      var count = this.data.imgCount - this.data.files.length;
      //console.log("count："+count);
      wx.chooseImage({
        count: count,
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          that.setData({
            files: that.data.files.concat(res.tempFilePaths)
          });
        }
      })
    },
    // 选择图片预览
    previewImage: function (e) {
      wx.previewImage({
        current: e.currentTarget.id, // 当前显示图片的http链接
        urls: this.data.files // 需要预览的图片http链接列表
      })
    },
    // 删除选择的图片
    uploaderImageDel: function (e) {
      var imgs = this.data.files;
      imgs.splice(e.currentTarget.dataset.index, 1);
      this.setData({
        files: imgs
      })
    }
  }
});