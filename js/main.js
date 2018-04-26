let allBtns = $('.btns > button');
for(let i = 0; i < allBtns.length;i++){
  $(allBtns[i]).on('click',function(x){
    let idx = $(x.currentTarget).index();
    let move = idx * -200;
    $('.images').css({
      transform:'translateX('+ move +'px)'
    });
  })
}

//自动播放
let n = 0;
let size = $('.images > img').length;
let t = autoPlay();

//鼠标悬停暂停动画
$('.window').on('mouseenter',function(){
  clearInterval(t);
})
//鼠标离开动画继续
$('.window').on('mouseleave',function(){
  t = autoPlay()
})

function autoPlay(){
  return setInterval(function(){
              n++;
              play($(allBtns[n%size]));
            },2000);
          }
function play($obj){
  $obj.trigger('click');
  setStatus($obj);
}
function setStatus($obj){
  $obj.addClass('red').siblings().removeClass('red');
}
