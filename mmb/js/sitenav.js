/*
 * @Author: yangxb 
 * @Date: 2018-12-26 08:31:49 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-26 09:02:12
 */
$(function () {
  // 导航列表渲染
  $.ajax({
    url: 'http://127.0.0.1:9090/api/getsitenav',
    dataType: 'json',
    success: function (info) {
      console.log(info);
      $('.nav ul').html(template('navTmp', info));
    }
  })
})