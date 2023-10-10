```function setup(){
    createCanvas(480,480);
    background("white");
}```

```function draw(){
    
}```

window.onload=function(){
    //コンテキストを生成
    var cvs = document.getElementById("cvs1");
    var ctx = cvs.getContext("2d");
   
    //色を指定
    ctx.strokeStyle="blue";  //線の色を青に指定
    ctx.fillStyle="red";     //塗りつぶしの色を赤に指定
   
    //円
    ctx.beginPath();
    ctx.arc(100, 100, 40, 0, Math.PI*2, false);
    ctx.stroke();
   
    //円（塗りつぶし）
    ctx.beginPath();
    ctx.arc(200, 100, 40, 0, Math.PI*2, false);
    ctx.fill();
   
    //半円
    ctx.beginPath();
    ctx.arc(300, 100, 40, 0, Math.PI, false);
    ctx.stroke();
   
    //半円（塗りつぶし）
    ctx.beginPath();
    ctx.arc(400, 100, 40, 0, Math.PI, false);
    ctx.fill();
  }