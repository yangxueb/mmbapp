/*
 * @Author: yangxb 
 * @Date: 2018-12-24 16:09:43 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-27 08:39:31
 */
$(function () {
  // 商品列表渲染
  var currentPage = 0;
  render();
  function render () {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getmoneyctrl',
      data: {
        pageid: currentPage
      },
      dataType: 'json',
      success: function (info) {
        pageNum = Math.ceil(info.totalCount / info.pagesize);
        $('.product ul').html(template('productTmp', info));
        $('#selectPage').html('');
        for (var i = 1; i <= pageNum; i++) {
          $('#selectPage').append('<option index="'+i+'" value="' + i + '">' + i + ' /'+pageNum+'</option>');
        }
        $('#selectPage').find('option').eq(currentPage).attr('selected', true);
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
    if (currentPage > pageNum - 1) {
      currentPage = pageNum - 1;
      return;
    }
    $('#selectPage').val(currentPage);
    render();
  })
  $('#selectPage').on('change', function () {
    currentPage = $(this).val() - 1;
    render();
  })
})