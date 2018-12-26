/*
 * @Author: yangxb 
 * @Date: 2018-12-26 09:50:53 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-26 14:27:43
 */
$(function () {
  // 分类列表渲染
  var brandtitleId = getSearch('brandtitleid');
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbrand',
    data: {
      brandtitleid: brandtitleId
    },
    dataType: 'json',
    success: function (info) {
      $('.category_con ul').html(template('categoryTmp', info));
    }
  })
  // 销量列表渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbrandproductlist',
    data: {
      brandtitleid: brandtitleId
    },
    dataType: 'json',
    success: function (info) {
      $('.sales ul').html(template('salesTmp', info));
      var productId =  info.result[brandtitleId].productId;
      // 评论列表渲染
      $.ajax({
        url: 'http://127.0.0.1:9090/api/getproductcom',
        data: {
          productid: productId
        },
        dataType: 'json',
        success: function (info) {
          console.log(info);
          $('.comment_con ul').html(template('commentTmp', info));
        }
      })
    }
  })
})