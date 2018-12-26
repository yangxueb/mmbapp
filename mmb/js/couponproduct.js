/*
 * @Author: yangxb 
 * @Date: 2018-12-25 16:10:57 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-26 19:42:01
 */
$(function () {
  // 优惠券列表渲染
  var couponid = getSearch('couponid');
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcouponproduct',
    data: {
      couponid: couponid
    },
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.ticket ul').html(template('ticketTmp', info));
      // 模态框效果
      var id;
      var num = info.result.length;
      $('.ticket').on('click', 'li', function () {
        $('.modal').addClass('show');
        id = $(this).find('a').data('id');
        $('.modal .inner').html(info.result[id].couponProductImg);
      })
      $('.next').on('click', function () {
        id ++;
        if (id >= num) {
          id = num - 1;
          return;
        }
        $('.modal .inner').html(info.result[id].couponProductImg);
      })
      $('.prev').on('click', function () {
        id --;
        if (id < 0) {
          id = 0;
          return;
        }
        $('.modal .inner').html(info.result[id].couponProductImg);
      })
    }
  })
  $('.close').on('click', function () {
    $('.modal').removeClass('show');
  })
})