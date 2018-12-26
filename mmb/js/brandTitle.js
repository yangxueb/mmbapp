/*
 * @Author: yangxb 
 * @Date: 2018-12-26 09:11:10 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-26 09:48:02
 */
$(function () {
  // 品牌列表渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getbrandtitle',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.brand_con ul').html(template('brandTmp', info));
    }
  })
})