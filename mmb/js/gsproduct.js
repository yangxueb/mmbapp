/*
 * @Author: yangxb 
 * @Date: 2018-12-25 19:01:53 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-25 21:44:06
 */
$(function () {
  var shopId = 0;
  var areaId = 0;
  // 京东下拉列表渲染
  $('.jd').on('click', function () {
    $(this).siblings('ul').toggleClass('hide');
  })
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getgsshop',
    dataType: 'json',
    success: function (info) {
      $('.jd~ul').html(template('firstTmp', info));
      $('.jd~ul').on('click', 'li', function () {
        var text = $(this).text();
        $('.jd').text(text);
        $(this).addClass('current').siblings().removeClass('current');
        $(this).parent().addClass('hide');
        shopId = $(this).data('shopid');
        render();
      })
    }
  })
  // 华北下拉列表渲染
  $('.hb').on('click', function () {
    $(this).siblings('ul').toggleClass('hide');
  })
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getgsshoparea',
    dataType: 'json',
    success: function (info) {
      $('.hb~ul').html(template('hbTmp', info));
      $('.hb~ul').on('click', 'li', function () {
        var text = $(this).text().substr(0, 2);
        $('.hb').text(text);
        $(this).addClass('current').siblings().removeClass('current');
        $(this).parent().addClass('hide');
        areaId = $(this).data('areaid');
        render();
      })
    }
  })
  // 全部价格下拉列表效果
  $('.all_price').on('click', function () {
    $(this).siblings('ul').toggleClass('hide');
  })
  // 商品列表渲染
  render();
  function render () {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getgsproduct',
      data: {
        shopid: shopId,
        areaid: areaId
      },
      dataType: 'json',
      success: function (info) {
        $('.product ul').html(template('productTmp', info));
      }
    })
  }
})