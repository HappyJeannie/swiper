
let $imgs = $('img');
let $images = $('.images');
let $btns = $('button');
let $slides = $('#slides');
let $window = $('.window');
let current = 0;
let step = $window.width();

init();            //初始化
bindEvents();     //事件绑定


function bindEvents(){
  $btns.eq(0).on('click',function(){
    if(current === 3){
      $slides.css({
        'transform' : 'translateX(-1000px)'
      }).one('transitionend',function(){
        console.log('从最后一张到第一张')
        $slides.hide().offset();
        $slides.css({
          'transform' : 'translateX(-200px)'
        }).show();
      })
    }else{
      $slides.css({
        'transform' : 'translateX(-200px)'
      })
    }
    current = 0;
  })
  $btns.eq(1).on('click',function(){
    
    $slides.css({
      'transform' : 'translateX(-400px)'
    })
    current = 1;
  })
  $btns.eq(2).on('click',function(){
    
    $slides.css({
      'transform' : 'translateX(-600px)'
    })
    current = 2;
  })
  $btns.eq(3).on('click',function(){
    if(current === 0){
      console.log('从第一张到最后一张');
      $slides.css({
        'transform' : 'translateX(0px)'
      }).one('transitionend',function(){
        $slides.hide().offset();
        $slides.css({
          'transform' : 'translateX(-800px)'
        }).show();
      })
    }else{
      $slides.css({
        'transform' : 'translateX(-800px)'
      })
    }
    current = 3;
  })
}

function init(){
  let $first = $imgs.eq(0).clone(true);
  let $last = $imgs.eq($imgs.length - 1).clone(true);
  $images.append($first).prepend($last).hide().offset();
  $images.css({
    transform:'translateX(-'+ $window.width() +'px)'
  }).show(); 
}