// 获取地址栏参数
function getSearch (key) {
  var search = decodeURI(location.search).slice(1);
  var arr = search.split('&');
  var obj = {};
  arr.forEach(function (ele, index) {
    var key = ele.split('=')[0];
    var value = ele.split('=')[1];
    obj[key] = value;
  })
  return obj[key];
}