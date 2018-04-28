//初始化位置
init();
let n = 1;
let size = $('.images img').length;
let imgs = $('.images img');
let t = setInterval(function(){
  $('#html').html(setVal(n+1));
  makeLeave(getImage(n)).one('transitionend',(e)=>{
    makeEnter($(e.currentTarget))
  });
  makeCurrent(getImage(n+1));
  n++;
},2000);

//处理n的值
function setVal(n){
  let size = $('.images img').length;
  if(n >= size){
    n = n % size === 0 ? size : (n % size);
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

function makeLeave($node){
  return $node.removeClass('enter current').addClass('leave');
}
function makeEnter($node){
  return $node.removeClass('current leave').addClass('enter');
}
function makeCurrent($node){
  return $node.removeClass('enter leave').addClass('current');
}
function getImage(n){
  return $(`.images img:nth-child(${setVal(n)})`);
}