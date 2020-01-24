var canvas  = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

    var width = canvas.width = 1000;
    var height = canvas.height = 800;

    var startX=70;
    var startY=70;

    nbRows = 11;
    nbCols = 12;
    // draw a rotated rect

    for (var i = 1; i < nbRows; i++) {
        for (var j = 1; j < nbCols; j++) {
            drawRotatedRect(startX*j, startY*i, 50, 50, 45, 'red', 'yellow');
        }
    }

    function drawRotatedRect(x,y,width,height,degrees, color1, color2){

        // first save the untranslated/unrotated context
        ctx.save();

        ctx.beginPath();

        // move the rotation point to the center of the rect
        ctx.translate( x+width/2, y+height/2 );

        // rotate the rect
        ctx.rotate(degrees*Math.PI/180);

        // draw the rect on the transformed context
        // Note: after transforming [0,0] is visually [x,y]
        //       so the rect needs to be offset accordingly when drawn
        ctx.rect( -width/2, -height/2, width,height);


        // Create gradient
        var grd = ctx.createLinearGradient(0, 0, 200, 0);
        grd.addColorStop(0, color1);
        grd.addColorStop(1, color2);
        ctx.fillStyle=grd;
        ctx.fill();

        // restore the context to its untranslated/unrotated state
        ctx.restore();

    }