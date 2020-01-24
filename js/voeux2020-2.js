/* OBJET COMMUN A TOUS LES CARRES */
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

  this.rotate = function( str ) {
    this.elm.style.webkitTransform = this.elm.style.MozTransform = 
    this.elm.style.OTransform = this.elm.style.transform = 
    'rotate(' + str + ')'; 
  };

  this.codeHtml = function( html ) {
    this.innerHTML = html;
  };

  this.type = function( type ) {
    this.class = "class"+type;
  };
 
  stage.appendChild( this );
};

var stage = document.querySelector('.stage'),
    plots = 10,
    increase = Math.PI * 2 / plots,
    angle = 0,
    x = 0,
    y = 0,
    plotcache = [];
    
for( var i = 0; i < plots; i++ ) {
  var p = new Plot( stage );
  p.setBackground( 'green' );
  p.setDimensions( 40, 40 );
  plotcache.push( p );
}