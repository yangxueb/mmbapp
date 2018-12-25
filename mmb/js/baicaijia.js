/*
 * @Author: yangxb 
 * @Date: 2018-12-24 20:29:13 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-25 15:41:39
 */
$(function () {
  // 导航列表渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbaicaijiatitle',
    dataType: 'json',
    success: function (info) {
      $('.nav ul').html(template('navTmp', info));
      // 导航滑动效果
      $(window).on('resize', function () {
        var ulWidth = 0;
        $('.nav li').each(function (index, ele) {
          ulWidth += $(ele).width();
        })
        $('.nav ul').width(ulWidth + 10);
      })
      $(window).trigger('resize');
      new IScroll('.nav', {
        scrollX: true,
        scrollY: false
      })
    }
  })
  // 导航点击效果
  var titleId = 0;
  $('.nav').on('click', 'a', function () {
    $(this).addClass('current').parent().siblings().children().removeClass('current');
    titleId = $(this).data('id');
    render();
  })
  // 商品列表渲染
  render();
  function render () {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getbaicaijiaproduct',
      data: {
        titleid: titleId
      },
      dataType: 'json',
      success: function (info) {
        $('.product ul').html(template('productTmp', info));
      }
    })
  }
})