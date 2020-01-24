Plot = function ( stage ) {

  this.setDimensions = function( x, y ) {
    this.elm.style.width = x + 'px';
    this.elm.style.height = y + 'px';
    this.width = x;
    this.height = y;
  };
  this.position = function( x, y ) {
    var xoffset = arguments[2] ? 0 : this.width / 2;
    var yoffset = arguments[2] ? 0 : this.height / 2;
    this.elm.style.left = (x - xoffset) + 'px';
    this.elm.style.top = (y - yoffset) + 'px';
    this.x = x;
    this.y = y;
  };
  this.setBackground = function( col ) {
    this.elm.style.background = col;
  };
  this.kill = function() {
    stage.removeChild( this.elm );
  };
  this.rotate = function( str ) {
    this.elm.style.webkitTransform = this.elm.style.MozTransform = 
    this.elm.style.OTransform = this.elm.style.transform = 
    'rotate(' + str + 'deg)'; 
  };
  this.content = function( content ) {
    this.elm.innerHTML = content;
  };
  this.round = function( round ) {
    this.elm.style.borderRadius = round ? '50%/50%' : '';
  };
  this.elm = document.createElement( 'div' );
  this.elm.style.position = 'absolute';
  stage.appendChild( this.elm );
};

var stage = document.querySelector('.stage'),
    plots = 10,
    increase = Math.PI * 2 / plots,
    angle = 0,
    x = 0,
    y = 0,
    startX=50, 
    startY=50,
    plotcache = [];
    
  for( var j = 0; j < plots; j++ ) {
    for( var i = 0; i < plots; i++ ) {
  var p = new Plot( stage );
  p.size=40;
  p.setBackground( 'pink' );
  p.setDimensions( p.size, p.size );
  p.position( 50*i+startX, 50*j+ startY );
  p.rotate('45');
  plotcache.push( p );
  console.log(plotcache[i]);
}
}


function rotate(){
  for( var i = 0; i < plots; i++ ) {
    x = 100 * Math.cos( angle ) + 200;
    y = 100 * Math.sin( angle ) + 200;
    plotcache[ i ].rotate( Math.atan2( y - 200, x - 200 ) + 'rad' );
    plotcache[ i ].position( x, y );
    angle += increase;
  }
  angle += 0.06;
}

//setInterval( rotate, 1000 / 30 );
