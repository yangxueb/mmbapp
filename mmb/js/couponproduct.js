/*
 * @Author: yangxb 
 * @Date: 2018-12-25 16:10:57 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-25 17:13:01
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
    }
  })
})