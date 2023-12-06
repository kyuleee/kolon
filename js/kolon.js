$(function() {
    var $w = $(window),
      footerHei = $('footer').outerHeight(),
      $banner = $('#banner');
  
    $w.on('scroll', function() {
  
      var sT = $w.scrollTop();
      var val = $(document).height() - $w.height() - footerHei;
  
      if (sT >= val)
          $banner.addClass('on')
      else
          $banner.removeClass('on')
    });  
});
  