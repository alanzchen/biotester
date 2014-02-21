$(document).ready(function(){
  t=[];
  var t2=$('p');
  $('p').each(function(i,x){
    if($(x).text().replace(/\s/g,'').length)t.push(x);
    n = i + 1;
    var loadstatus="Now loading No." + n;
    document.getElementById('status').innerHTML=loadstatus;
  });
  //$('body').text('');
  $('#disp').click(function(){
    $('.mask').css('background','transparent');
    $('.mask').css('color','#000');
  });
  $('#next').click(function(){
    myR();myF();
  });
});

function ranInt(len){return Math.floor(Math.random()*len);}
function maskHowMany(len)
{
if(len==1)return 0;
if(len<=3)return 1;
return (len/2)|0;
}

function myF()
{
var i;
for(i=0;i<100+ranInt(50);i++)Math.random();

var n=ranInt(t.length);
var elem=t[n];
var text=$(elem).text();
console.log(text);
var arr=text.match(/\{.*?}/g);
var arr2=[];
//for(i=0;i<arr.length;i++)
for(i in arr)
if(arr[i])
arr2.push(arr[i]);

var arr3=[];
for(i in arr2)arr3[i]=ranInt(10000)*2;
var arrl=maskHowMany(arr2.length);
for(i=0;i<arrl;i++)arr3[i]+=1;
console.log(arr3);
arr3.sort(function(a,b){return a-b;});
for(i in arr3)arr3[i]=arr3[i]%2;
console.log(arr3);

var arr4=[];

var elem=document.createElement('span');
console.log(text);
text=text.replace(/{([^}]*)}/g,'<span class="mask" style="background-color: black; background-position: initial initial; background-repeat: initial initial;">$1</span>');
console.log(text);
var text='<span id="question">' + text + '</span>';
console.log(text);
var status='<i class="icon icon-info-sign"></i>' + n + 1 + " of " + t.length + 1 + ".";
document.getElementById('status').innerHTML=status;
document.getElementById('title').innerHTML=text;
$('.mask').css('background','black');
$('.mask').hover(
  function(){
    $(this).css('background','transparent');
  },
  function(){
    $(this).css('background','black');
  }
);

return arr4;
}

function myR()
{
  $('#question').remove();
  $('p').remove();
}
$(document).ready(myF);