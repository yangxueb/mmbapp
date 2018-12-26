/*
 * @Author: yangxb 
 * @Date: 2018-12-23 19:35:52 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-26 16:13:52
 */
$(function () {
  // 商品列表渲染
  var categoryid = getSearch('categoryid');
  var currentPage = 1;
  var pageNum;
  render();

  function render() {
    $.ajax({
      url: 'http://127.0.0.1:9090/api/getproductlist',
      data: {
        categoryid: categoryid,
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
        $('#selectPage').find('option').eq(currentPage - 1).attr('selected', true);
      }
    })
  }
  // 分页功能
  $('.prevPage').on('click', function () {
    currentPage--;
    if (currentPage < 1) {
      currentPage = 0;
      return;
    }
    $('#selectPage').val(currentPage);
    render();
  })
  $('.nextPage').on('click', function () {
    currentPage++;
    if (currentPage > pageNum) {
      currentPage = pageNum;
      return;
    }
    $('#selectPage').val(currentPage);
    render();
  })
  $('#selectPage').on('change', function () {
    currentPage = $(this).val();
    $(this).find('option').eq(currentPage - 1).prop('selected', true);
    render();
  })
})