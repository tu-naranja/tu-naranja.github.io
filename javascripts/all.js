
$(".link").on('click', function(event){
  $('html, body').animate({
      scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
  }, 500);
  return false;
});

// $('button').on('click', function(event){
//     event.preventDefault();
//     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
// });
