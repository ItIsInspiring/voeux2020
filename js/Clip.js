/** MA CLASSE PLOT */
Clip = function ( stage ) {

  this.setDimensions = function( x, y ) {
    this.elm.style.width = x + 'px';
    this.elm.style.height = y + 'px';
    this.width = x;
    this.height = y;
  };

  this.position = function( x, y ) {
    var xoffset = arguments[2] ? 0 : this.width ;
    var yoffset = arguments[2] ? 0 : this.height ;
    this.elm.style.position = 'absolute';
    this.elm.style.left = x + 'px';
    this.elm.style.top = y + 'px';
    this.x = x;
    this.y = y;
  };

  this.setBackground = function( col ) {
    this.elm.style.background = col;
  };

  this.setBorder = function( col ) {
    this.elm.style.border = '1px dashed '+col;
  };

  this.kill = function() {
    stage.removeChild( this.elm );
  };

  this.content = function( content ) {
    this.elm.innerHTML = content;
  };

  /* donner une class*/
  this.setClass = function(nameClass){
    this.elm.className = nameClass;
  };

  this.onmouseover = function(){
    console.log("HOVER");
  };

  this.svg = function(choix){
    const svg = document. createElementNS("http://www.w3.org/2000/svg", "svg");
    // set width and height
    svg.setAttribute("width", this.width);
    svg.setAttribute("height",  this.height);
    svg.setAttribute("viewBox",  "0 0 "+this.width+" "+this.height);
    this.elm.appendChild(svg);
    svg.innerHTML = choix;
    
  }

  this.elm = document.createElement( 'div' );
  this.elm.style.position = 'absolute';
  stage.appendChild( this.elm );

};

