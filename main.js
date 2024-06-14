var sound1;
function preload(){
  sound1=loadSound('BGM.mp3');
  
}

function setup() {
  createCanvas(400, 400);
}
  var soundOn=true;
var re;

function draw() {
    let date = new Date();
  
  background(220);
  // フォントを変える
  textFont('oswald');

  // 文字の大きさ
  textSize(80);
  var m="";
  var s="";
  var ziho=[20,0,"~",59];
  // console.log(data)
  if(date.getMinutes()<10){
     m="0";
     }else{
       m="";
     }
  if(date.getSeconds()<10){
     s="0";
     }else{
       s="";
     }
  text(date.getHours()+":"+m+date.getMinutes()+":"+s+date.getSeconds(),0,200)
  
  if(!soundOn){
text("活動終了",0,300)
  
  }
console.log(date.getHours()+":"+date.getMinutes()) // Tue Feb 23 2021 21:56:22 GMT+0900 (日本標準時)
  
  if(date.getHours()==ziho[0] && date.getMinutes()>=ziho[1] && date.getMinutes()<=ziho[3]){
    if(soundOn){
       sound1.play();
      soundOn=false;
      re=date.getSeconds()-1;
       }
     
     }
  if(date.getSeconds()==re){
    soundOn=true;
  }

  // background(220);
}
