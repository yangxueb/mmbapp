/*
 * @Author: yangxb 
 * @Date: 2018-12-24 09:48:04 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-26 20:11:04
 */
$(function () {
  // 商品详情渲染
  var productid = getSearch('productid');
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getproduct',
    data: {
      productid: productid
    },
    dataType: 'json',
    success: function (info) {
      var title = info.result[0].productName;
      $('.nav_tit').text(title.substr(0, title.indexOf(' ')));
      $('.pro_detail').html(template('detailTmp', info));
    }
  })
  // 评论列表渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getproductcom',
    data: {
      productid: productid
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.comment_con ul').html(template('commentTmp', info));
    }
  })
})