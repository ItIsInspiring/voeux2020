var canvas  = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

if (canvas.getContext) {
    // code de dessin dans le canvas
    // dimension du canvas
    //var width = canvas.width = window.innerWidth*indice;
    //var height = canvas.height = window.innerHeight*indice;
    
    var indice = 0.80;
    var width = canvas.width = 1000;
    var height = canvas.height = 800;
    
    // MIDDLE
    var midX = canvas.width/2;
    var midY = canvas.height/2;
    var nbClips = 10;
    var size= 50;
    var radianAngle = 45;
    //for (var i = 0; i < 5; i++) {
        for (var j = 1; j < nbClips; j++) {
            
            // define a rectangle to rotate
            var posX =  (10+size)*(j-1);
            var posY = 0;
            var rect = { x: posX, y: posY, width:size, height:size };

            shapeCenterX = (rect.width/2+10)*j;
            shapeCenterY = rect.height/2;
            
            // draw the rectangle unrotated
            ctx.fillRect( posX, posY, rect.width, rect.height );
            
            ctx.rotate( radianAngle );
            //ctx.translate( posX+rect.width/2, posY+rect.height/2);
            //ctx.translate( -rect.x-rect.width/2, -rect.y-rect.height/2 );
            
                        console.log('centre X :'+shapeCenterX);
                        console.log('centre Y :'+shapeCenterY);
                        console.log('--------------');
            
        }
   // }

      ctx.save();

} else {
    // code pour le cas où canvas ne serait pas supporté

}