//初始化位置
init();
let n = 1;
let size = $('.images img').length;
let imgs = $('.images img');
let t = setInterval(function(){
  $(`.images img:nth-child(${setVal(n)})`).removeClass('current').addClass('leave').one('transitionend',(e)=>{
    $(e.currentTarget).removeClass('leave').addClass('enter')
  });
  $(`.images img:nth-child(${setVal(n+1)})`).removeClass('enter').addClass('current');
  n++;
},2000);

//处理n的值
function setVal(n,size){
  if(n >= size){
    n = n % size === 0 ? size : n % size;
  }
  return n;
}

//初始化位置
function init(){
  let target = $('.images img');
  for(let i = 0;i<target.length;i++){
    if(i === 0){
      $(target[i]).addClass('current');
    }else{
      $(target[i]).addClass('enter');
    }
  }
}