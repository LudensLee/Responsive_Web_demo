var btn=document.querySelector('#head button');
var ul=document.querySelector('#head ul');

var display=true;
btn.onclick=function(){
    ul.style.height=display?'250px':0;
    display=!display;
};

var pic=document.getElementById('pic');
var picUl=pic.children[0];
var picLis=picUl.children;
var cn=0;

var head=picUl.firstElementChild.cloneNode(true);
picUl.appendChild(head);
picUl.style.width=picLis.length*100+'vw';

picUl.addEventListener('transitionend',function(){
    console.log(cn);
    if(cn==picLis.length-1){
        picUl.style.left=0;
        picUl.style.transition='';
        cn=0;
    }
})

function move(){
    picUl.style.transition='left .5s';
    picUl.style.left=-cn*100+'vw';
}

function autoPlay(){
    cn++;
    if(cn>picLis.length){
        cn=0;
    }
    move();
}
var timer=setInterval(autoPlay,2000);

pic.onmouseenter=function(){
    clearInterval(timer);
    timer=null;
}
pic.onmouseleave=function(){
    timer=setInterval(autoPlay,2000);
}