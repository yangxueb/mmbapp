/*
 * @Author: yangxb 
 * @Date: 2018-12-25 15:45:49 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-25 16:07:52
 */
$(function () {
  // 优惠券列表渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getcoupon',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.coupon ul').html(template('couponTmp', info));
    }
  })
})