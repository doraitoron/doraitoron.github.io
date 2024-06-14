function setup(){
	createCanvas(windowWidth, windowHeight);
	frameRate(8);
}

function draw(){
	background(33);
	let date = new Date();
  background(220);
  // フォントを変える
  textFont('oswald');

  // 文字の大きさ
  textSize(80);
  var m="";
  var s="";
  var ziho=[16,10,"~",35];
  
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
  
}
