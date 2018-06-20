function score(){
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext('2d');
  ctx.font = "30px serif";
  ctx.fillStyle = "red";
   ctx.fillText(`SCORE: ${points}` , 10 , 30)
}
