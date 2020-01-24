Plot = function ( stage, bgColor ) {
 
    this.setDimensions = function( x, y ) {
      this.elm.style.width = x + 'px';
      this.elm.style.height = y + 'px';
      this.width = x;
      this.height = y;
    }
    
    this.position = function( x, y ) {
      /*var xoffset = arguments[2] ? 0 : this.width / 2;
      var yoffset = arguments[2] ? 0 : this.height / 2;*/
      var xoffset = arguments[2] ? 0 : this.width / 2;
      var yoffset = arguments[2] ? 0 : this.height / 2;
      this.elm.style.left = (x - xoffset) + 'px';
      this.elm.style.top = (y - yoffset) + 'px';
      this.x = x;
      this.y = y;
    };
    this.setColor = function( bgColor ) {
      this.bgColor = bgColor;
    }
    this.setBorder = function(px, style, col) {
      this.elm.style.border = px+'px '+style+' '+col;
    }
    this.kill = function() {
      stage.removeChild( this.elm );
    }
    this.rotate = function( str ) {
      this.elm.style.webkitTransform = this.elm.style.MozTransform =
      this.elm.style.OTransform = this.elm.style.transform =
      'rotate('+str+')';
    }
    this.content = function( content ) {
      this.elm.innerHTML = content;
    }
    this.round = function( round ) {
      this.elm.style.borderRadius = round ? '50%/50%' : '';
    }
    this.elm = document.createElement( 'div' );


    const svg1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg1.setAttribute ("width", this.x );
    svg1.setAttribute ("height", this.y);
    svg1.setAttribute ("class", "clipA");
    svg1.setAttribute ("x", "0px");
    svg1.setAttribute ("y", "0px");
    svg1.setAttribute ("viewBox", "0 0 81 80");
    svg1.setAttribute ("style", "enable-background:new 0 0 81 80; fill:"+bgColor);
    svg1.setAttribute ("xml:space", "preserve");

    // create a shape
    const cir1 = document. createElementNS("http://www.w3.org/2000/svg", "circle");
    cir1.setAttribute("g", 0 );
    /*cir1.setAttribute("cy", 0 );
    cir1.setAttribute("r", 20);*/

    this.elm.style.position = 'absolute';
    stage.appendChild( this.elm );

    this.elm.appendChild( svg1 );
    svg1.innerHTML = '<g><rect x="12.2" y="11.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.4221 40.3536)" class="st0" width="56.6" height="56.6"/><path d="M40.5,22.6L57.9,40L40.5,57.4L23.1,40L40.5,22.6 M40.5,0l-40,40l40,40l40-40L40.5,0L40.5,0z"/></g>';

    // attach the shape to svg
    //svg1.appendChild( cir1 );
  };