$("document").ready(function () {
    $(".btn_scroll").click(function() {
        window.scrollTo({ top: 590, behavior: 'smooth'});
      });

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
})