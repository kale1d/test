

$(window).on('load', function(){
  $('.red').each(function(){
    console.log($(this).data('imgr'))
    $(this).attr('src', $(this).data('imgr'))
  })
})



$(".red").mouseenter(function () {
  console.log('hola')
    $(this).attr('src', $(this).data('imgw'))
});
$('.red').mouseleave(function(){
  $(this).attr('src', $(this).data('imgr'))
})
