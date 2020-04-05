$('.panel-collapse [data-toggle="collapse"]').on('click', function() {
  var $target = $(this).parents('.panel-collapse');
  $target.removeClass('in').addClass('show');
  setTimeout(function() {
    $target.removeClass('show').addClass('in');
  }, 10)
});
