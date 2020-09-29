//상수
var canvas;
var ctx;

//그림 사이즈

//var browser={};
//------------------------------------------------------------------------
//이미지 정리 {background:{img:new Image,x:0,y:0,width:640,height:480},{}}





//-----------------------------------------------------------------------
window.onload = function(){

  canvas = document.createElement("canvas");
  canvas.setAttribute("id","canvas");
  ctx = canvas.getContext("2d");
  imageCreate(imageOrder);

  document.body.appendChild(canvas);

}
//----------------------------------------------------------------------
//최대 공약수
function gcd(a, b) {
  var gcd = 1;
   for(var i = 1; i <= Math.min(a,b); i++) {
     if((a%i == 0) && (b%i == 0)){
        gcd = i
      }
    }
    return gcd;
}
//----------------------------------------------------------------------
//이미지 비율 계산
function imageRatio(e){
  var stat = {};
  var ratioGcd;
  var ratioWidth;
  var ratioHeight;

  var ratioXgcd;
  var ratioXw;
  var ratioX;
  var ratioYgcd;
  var ratioY;
  var ratioYh;

  var ratioWwgcd;
  var ratioWw;
  var ratioWww;
  var ratioYygcd;
  var ratioYy;
  var ratioYyy;


  var ratioCompare;

  var widthR;
  var heightR;
  var xR;
  var yR;
  var wwR;
  var yyR;

  for(var key = 0 in e){
    if(key=="background"){
      ratioGcd = gcd(e[key].width,e[key].height);
      ratioWidth = e[key].width/ratioGcd;
      ratioHeight = e[key].height/ratioGcd;
      ratioCompare = compare(ratioWidth,ratioHeight);
      widthR = ratioHeight/ratioWidth;
      heightR = ratioWidth/ratioHeight;
      stat[key] = {
        "ratioWidth":ratioWidth,
        "ratioHeight":ratioHeight,
        "ratioCompare":ratioCompare,
        "widthR":widthR,
        "heightR":heightR
      };
    }else{
      ratioXgcd =  gcd(e["background"].width, e[key].x);
      ratioX = e[key].x/ratioXgcd;
      ratioXw = e["background"].width/ratioXgcd;
      xR = ratioX/ratioXw;
      ratioYgcd = gcd(e["background"].height,e[key].y);
      ratioY = e[key].y/ratioYgcd;
      ratioYh = e["background"].height/ratioYgcd;
      yR = ratioY/ratioYh;

      //console.log(e["background"].width+" : "+e[key].x+" = "+ratioX);
      ratioWwgcd = gcd(e["background"].width,e[key].width);

      ratioWw = e[key].width/ratioWwgcd;
      ratioWww = e["background"].width/ratioWwgcd;
      wwR = ratioWw/ratioWww;

      ratioYygcd = gcd(e["background"].height,e[key].height);

      ratioYy = e[key].height/ratioYygcd;
      ratioYyy = e["background"].height/ratioYygcd;
      yyR = ratioYy/ratioYyy;


      ratioGcd = gcd(e[key].height,e[key].width);
      ratioWidth = e[key].width/ratioGcd;
      ratioHeight = e[key].height/ratioGcd;
      ratioCompare = compare(ratioWidth,ratioHeight);
      widthR = ratioHeight/ratioWidth;
      heightR = ratioWidth/ratioHeight;

      stat[key] = {
        "ratioWidth":ratioWidth,
        "ratioHeight":ratioHeight,
        "ratioCompare":ratioCompare,
        "widthR":widthR,
        "heightR":heightR,
        "xR":xR,
        "yR":yR,
        "wwR":wwR,
        "yyR":yyR
      };

    }
  }
  //비교 연산 가로 1 세로 2 같음 0 리턴한다.
  function compare(a,b){
      if(a>b){
        return 1;
      }else if(b>a){
        return 2;
      }else{
        return 0;
      }
  }
  return stat;
}
//----------------------------------------------------------------------
//브라우저 크기에 따른 캔버스의 비율 수정은 여기서.
function browserResize(e){
  var stat = imageRatio(imageOrder);
  var browserWidth = window.innerWidth;
  var browserHeight = window.innerHeight;
  for(var key = 0 in stat){
    if(key=="background"){
      if(stat[key].ratioCompare == 1){
        imageOrder[key].width = browserWidth;
        imageOrder[key].height = imageOrder[key].width*stat[key].widthR;
        canvas.width = imageOrder[key].width
        canvas.height = imageOrder[key].height
      }else if(stat[key].ratioCompare == 2){
        imageOrder[key].width = imageOrder[key].height*stat[key].heightR;
        imageOrder[key].height = browserHeight;
        canvas.width = imageOrder[key].width
        canvas.height = imageOrder[key].height
      }else{
        imageOrder[key].width = browserWidth;
        imageOrder[key].height = browserWidth;
        canvas.width = imageOrder[key].width
        canvas.height = imageOrder[key].height
      }
    }else{
      //그림 부분
      imageOrder[key].x = imageOrder["background"].width*stat[key].xR;
      imageOrder[key].y = imageOrder["background"].height*stat[key].yR;
      imageOrder[key].width = imageOrder["background"].width*stat[key].wwR;
      imageOrder[key].height = imageOrder["background"].height*stat[key].yyR;
    }
  }

  imagePrint(imageOrder);
}

//----------------------------------------------------------------------
//이미지 생성
function imageCreate(e){
  var loaded = 0;
  function onload(){
    loaded++
    if(loaded == Object.keys(e).length){
      browserResize();
    }
  }
  for(var key = 0 in e){

    e[key].img = new Image();
    e[key].img.addEventListener("load",onload);
    e[key].img.src = key+".png";
  }
}
//----------------------------------------------------------------------
//이미지 출력
function imagePrint(e){
  for(var key = 0 in e){
    ctx.drawImage(e[key].img , e[key].x, e[key].y, e[key].width, e[key].height);
  }
}

//----------------------------------------------------------------------
//충돌
function collision(){

}
