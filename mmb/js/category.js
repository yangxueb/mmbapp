/*
 * @Author: yangxb 
 * @Date: 2018-12-23 18:37:23 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-25 10:47:59
 */
$(function () {
  // 一级分类列表渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcategorytitle',
    dataType: 'json',
    success: function (info) {
      $('.category ul').html(template('firstTmp', info));
    }
  })
  // 一级分类列表下拉效果
  $('.category').on('click', '.firstLi', function () {
    $(this).find('.first').toggleClass('change');
    $(this).find('ul').slideToggle();
    var id = $(this).find('.first').data('id');
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getcategory',
      data: {
        titleid: id
      },
      dataType: 'json',
      success: function (info) {
        $('.category .firstLi ul').html(template('secondTmp', info));
      }
    })
  })
})