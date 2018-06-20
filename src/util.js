
let RectCircleCollided = function(rect, circle){
    var distX = Math.abs(circle.pos[0] - rect.pos[0]-rect.width/2);
    var distY = Math.abs(circle.pos[1] - rect.pos[1]-rect.height/2);

    if (distX > (rect.width/2 + circle.r)) { return false; }
    if (distY > (rect.height/2 + circle.r)) { return false; }

    if (distX <= (rect.width/2)) { return true; }
    if (distY <= (rect.height/2)) { return true; }

    var dx=distX-rect.width/2;
    var dy=distY-rect.height/2;
    return (dx*dx+dy*dy<=(circle.r*circle.r));
  };
