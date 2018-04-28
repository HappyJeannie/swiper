//初始化位置
init();
let n = 1;
let size = $('.images img').length;
let imgs = $('.images img');
let t = setInterval(function(){
  let idx = n % size;
  let target = $(imgs[idx]).attr('class','current');
  if(idx === 0){
    $(imgs[size - 1]).attr('class','leave').one('transitionend',(e)=>{
      $(e.currentTarget).attr('class','enter')
    });
    //target.next().attr('class','enter');
  }else if(idx === (size - 1)){
    //$(imgs[0]).attr('class','enter');
    target.prev().attr('class','leave').one('transitionend',(e)=>{
      $(e.currentTarget).attr('class','enter')
    });
  }else{
    //target.next().attr('class','enter');
    target.prev().attr('class','leave').one('transitionend',(e)=>{
      $(e.currentTarget).attr('class','enter')
    });
  }
  n++;
},2000);

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