var app = getApp();

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 手机号格式化
const fmtPhoneNumber = n => {
  var reg = /^1[3456789]\d{9}$/;
  if (!reg.test(n)) {
    wx.showToast({
      title: '请输入正确手机号',
      icon: 'none',
      duration: 1000
    })
    return false;
  }
  return true;
}

// 请求封装
const request = (url, method, data, success, fail) => {

}

// 获取URL参数
const parseQueryString = url => {
  var reg = /([^\?\&\=]+)\=([^\?\&\=]*)/g;
  var obj = {};
  while (reg.test(url)) {
    obj[RegExp.$1] = RegExp.$2;
  }
  return obj;
};

module.exports = {
  formatTime: formatTime,
  fmtPhoneNumber: fmtPhoneNumber,
  request: request,
  parseQueryString: parseQueryString
}
