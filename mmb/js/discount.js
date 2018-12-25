/*
 * @Author: yangxb 
 * @Date: 2018-12-24 19:23:46 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-24 19:46:20
 */
$(function () {
  // 商品详情渲染
  var productid = getSearch('productid');
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getdiscountproduct',
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