var stage = document.querySelector('.stage'),
    plots = 10;
    nbLignes = 10;
    increase = Math.PI * 2 / plots,
    angle = 0,
    x = 0,
    y = 0;
for( var j = 0; j < nbLignes; j++ ) {

    for( var i = 0; i < plots; i++ ) {
        var p = new Plot( stage, 'red' );
        p.setBorder(1, 'solid', 'red' );
        p.setDimensions( 100, 100 );
        /*x = 100 * Math.cos( angle ) + 200;
        y = 100 * Math.sin( angle ) + 200;*/
        x = 300;
        y = 300 ;
        p.position( x, y );
        angle += increase;
    }

}

var testArgs = function(agr1, arg2, arg3){
    var result = arguments[3];
    console.log(result);
}
testArgs('je','suis', 'libertine');