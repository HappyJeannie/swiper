let $imgs = $('.img').width($('.window').width());
let $images = $('.images');
let len = $imgs.length;
let $btns = $('#buttonWrapper>.btn');
let $slides = $('#slides');
let $window = $('.window');
let current = 0;
let step = $window.width();

init();            //初始化
bindEvents();     //事件绑定

$('#prev').on('click',function(){
  goToSlide(current-1);
})
$('#next').on('click',function(){
  goToSlide(current+1);
})
let t = setInterval(function(){
  goToSlide(current+1);
},3000);
$window.on('mouseenter',function(){
  clearInterval(t);
}).on('mouseleave',function(){
  t = setInterval(function(){
    goToSlide(current+1);
  },3000);
})
function bindEvents(){
  $('#buttonWrapper').on('click','button',function(e){
    let $target = $(e.currentTarget);
    let idx = $target.index();
    goToSlide(idx);
  })
}
function goToSlide(idx){
  if(idx > len - 1){
    idx = 0
  }else if(idx < 0){
    idx = len - 1;
  }
  $btns.eq(current).removeClass('active');
  if(current === len-1 && idx === 0){
    $slides.css({
      'transform' : `translateX(-${step * (len+1)}px)`
    }).one('transitionend',function(){
      $slides.hide().offset();
      $slides.css({
        'transform' : `translateX(-${step}px)`
      }).show();
    })
  }else if(current === 0 && idx === len-1){
    $slides.css({
      'transform' : 'translateX(0px)'
    }).one('transitionend',function(){
      $slides.hide().offset();
      $slides.css({
        'transform' : `translateX(-${step * len}px)`
      }).show();
    })
  }else{
    $slides.css({
      'transform' : `translateX(-${step * (idx + 1)}px)`
    })
  }
  current = idx;
  $btns.eq(current).addClass('active');
}
function init(){
  let $first = $imgs.eq(0).clone(true);
  let $last = $imgs.eq($imgs.length - 1).clone(true);
  $images.append($first).prepend($last).hide().offset();
  $images.css({
    transform:'translateX(-'+ $window.width() +'px)'
  }).show();
  $btns.eq(0).addClass('active');
}