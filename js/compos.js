/* OBJET COMMUN A TOUS LES CARRES */
Plot = function ( stage ) {

  this.setDimensions = function( x, y ) {
    this.elm.style.width = x + 'px';
    this.elm.style.height = y + 'px';
    this.width = x;
    this.height = y;
  };

  /*this.position = function( x, y ) {
    var xoffset = arguments[2] ? 0 : this.elm.width / 2;
    var yoffset = arguments[2] ? 0 : this.elm.height / 2;
    this.elm.style.left = (x - xoffset) + 'px';
    this.elm.style.top = (y - yoffset) + 'px';
    this.elm.x = x;
    this.elm.y = y;
  };*/

  /*this.elm.setBackground = function( col ) {
    this.elm.style.background = col;
  };*/

  /*this.rotate = function( str ) {
    this.elm.style.webkitTransform = this.elm.style.MozTransform = 
    this.elm.style.OTransform = this.elm.style.transform = 
    'rotate(' + str + ')'; 
  };*/

  this.codeHtml = function( html ) {
    this.myHtml = '<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"';
    this.myHtml += 'viewBox="0 0 81 80" style="enable-background:new 0 0 81 80;" xml:space="preserve">'+ html+ '</svg>';
    return this.myHtml;
  };

  this.myMess = 'message de guigui';

  /*this.type = function( type ) {
    this.elm.class = "class"+type;
  };*/
  this.name = function(zeName){
    this.name = zeName + ' voili';
  }

  stage.appendChild( this.elm );

 
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
  p.myHtml = p.codeHtml( ' <rect x="12.2" y="11.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.4221 40.3536)" width="56.6" height="56.6"/>' );
  p.name("clip N°"+i);
  console.log(p.myMess+' '+ i +' '+p.name+'\n');
  console.log('p.codeHtml : '+p.myHtml);
  p.setDimensions( 40, 40 );
  /*p.position(50*i, 50*i);*/
  stage.innerHTML =  p.myHtml;

}