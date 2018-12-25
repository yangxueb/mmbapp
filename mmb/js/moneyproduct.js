/*
 * @Author: yangxb 
 * @Date: 2018-12-24 16:31:32 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-24 17:08:16
 */
$(function () {
  // 商品详情渲染
  var productid = getSearch('productid');
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getmoneyctrlproduct',
    data: {
      productid: productid
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.detail').html(template('detailTmp', info));
    }
  })
})