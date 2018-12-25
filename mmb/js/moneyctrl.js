/*
 * @Author: yangxb 
 * @Date: 2018-12-24 16:09:43 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-24 16:19:31
 */
$(function () {
  // 商品列表渲染
  var currentPage = 1;
  render();
  function render () {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        pageid: currentPage
      },
      dataType: 'json',
      success: function (info) {
        console.log(info);
        pageNum = Math.ceil(info.totalCount / info.pagesize);
        $('.product ul').html(template('productTmp', info));
      }
    })
  }
  // 分页功能
  $('.prevPage').on('click', function () {
    currentPage --;
    if (currentPage < 1) {
      currentPage = 0;
      return;
    }
    $('#selectPage').val(currentPage);
    render();
  })
  $('.nextPage').on('click', function () {
    currentPage ++;
    if (currentPage > pageNum) {
      currentPage = pageNum;
      return;
    }
    $('#selectPage').val(currentPage);
    render();
  })
  $('#selectPage').on('change', function () {
    currentPage = $(this).val();
    render();
  })
})