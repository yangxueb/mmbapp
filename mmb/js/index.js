/*
 * @Author: yangxb 
 * @Date: 2018-12-23 16:07:29 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-25 10:47:23
 */
$(function () {
  // 首页导航渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getindexmenu',
    dataType: 'json',
    success: function (info) {
      var htmlStr = template('navTmp', info);
      $('.nav ul').html(htmlStr);
      for (var i = 9; i < 13; i++) {
        $('.nav ul').children().eq(i - 1).addClass('hide');
      }
      $('.nav ul').children().eq(7).on('click', function () {
        $(this).siblings('.hide').toggle();
        return false;
      })
    }
  })
  // 商品列表渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getmoneyctrl',
    dataType: 'json',
    success: function (info) {
      $('.product ul').html(template('productTmp', info));
    }
  })
  // 点击返回顶部
  $('.goTop').on('cilck', function () {
    console.log(111);
    $('html, body').stop().animate({scrollTop: 0}, 1000);
  })
})