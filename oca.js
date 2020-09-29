//상수
var canvas;
var ctx;

//그림 사이즈
var ocaCanvas = { "width": 1920, "height": 1080 };
var browser={};
//------------------------------------------------------------------------
var sprite;
var imageInfor;

var testBackgroundImage = new Image();
testBackgroundImage.src="background.png";
var testImage = new Image();
testImage.src="test.png";
// backgroundImage.src="background.png";
// backgroundImage.addEventListener("load", function(){
//   ctx.drawImage( backgroundImage , 0, 0, canvas.width, canvas.height);
// },false);
//-----------------------------------------------------------------------
//canvas 생성
window.onload = function(){
  canvas = document.createElement("canvas");
  canvas.setAttribute("id","canvas");
  ctx = canvas.getContext("2d");
  //이미지 로드 컴플리트 함수를 넣어야함.

  browserResize();
  document.body.appendChild(canvas);


}

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

//이미지 비율 계산
function imageRatio(e){
  var ratioGcd = gcd(e.width,e.height);
  var ratio1 = e.width/ratioGcd;
  var ratio2 = e.height/ratioGcd;
  var ratioMulti
  if(ratio1>ratio2){
    ratioMulti = ratio2/ratio1;
    return [1,ratioMulti];
  }else if(ratio2>ratio1){
    ratioMulti = ratio1/ratio2;
    return [2,ratioMulti];
  }else{
    ratioMulti = 1;
    return [0,ratioMulti];
  }
}

//브라우저 크기에 따른 캔버스의 비율
function browserResize(e){

  browser.width = window.innerWidth;
  browser.height = window.innerHeight;
  var size = imageRatio(ocaCanvas);
  if(size[0] == 1){
    canvas.width = browser.width;
    canvas.height = browser.width*size[1];
    //이미지 출력 함수를 넣어야함.
    ctx.drawImage( testBackgroundImage , 0, 0, canvas.width, canvas.height);
    ctx.drawImage( testImage , 0, 0, 800, 1109);
  }
  else if(size[0] == 2){
    canvas.width = browser.height*size[1];;
    canvas.height = browser.height
  }
  else{
    canvas.width = browser.width;
    canvas.height = browser.width;
  }

}




//위치 퍼센트 변환
function positionToPercent(e){

}
//이미지 생성
function imageCreate(e){

}
//이미지 출력
function imagePrint(e){

}

function collision(){

}



/*var imageObjects = [];

function loadImages(images, onComplete) {

    var loaded = 0;

    function onLoad() {
        loaded++;
        if (loaded == images.length) {
            onComplete();
        }
    }

    for (var i = 0; i < images.length; i++) {
        var img = new Image();
        img.addEventListener("load", onLoad);
        img.src = images[i];
        imageObjects.push(img);
    }
}


function init() {
    alert("start game");
    // use imageObjects which will contain loaded images
}

loadImages(["egg.png", "baby.png", "adult.png", "ultimate.png"], init);*/
