/*
 * @Author: yangxb 
 * @Date: 2018-12-23 19:35:52 
 * @Last Modified by: yangxb
 * @Last Modified time: 2018-12-25 10:48:23
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
      success:function (info) {
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