$(document).ready(function() {
  // Hide code example by default.
  $('.label.code').parent().next('pre').hide();
  $('.label.code').text('Code example (click to show)');

  // Show or hide by clicking on a button.
  $('.label.code').click(function() {
    if($(this).hasClass('enable')) {
      $(this).text('Code example (click to show)');
      $(this).removeClass('enable');
    } else {
      $(this).text('Code example (click to hide)');
      $(this).addClass('enable');
    }
    $(this).parent().next().slideToggle(400)
  });
});