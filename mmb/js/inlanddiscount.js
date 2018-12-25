/*
 * @Author: yangxb 
 * @Date: 2018-12-24 19:04:56 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-24 19:11:56
 */
$(function () {
  // 商品列表渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getinlanddiscount',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.product ul').html(template('productTmp', info));
    }
  })
})