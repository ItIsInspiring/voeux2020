
var g = [
  '<g class="grad1"><rect x="12.2" y="11.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.4221 40.3536)" width="56.6" height="56.6"/></g>',
  '<g class="grad2"><rect x="0" y="0" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.4221 40.3536)" /></g>',
  '<g class="grad3"><rect x="12.2" y="11.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.4221 40.3536)" /><path d="M40.5,28.3L52.2,40L40.5,51.7L28.8,40L40.5,28.3 M40.5,0l-40,40l40,40l40-40L40.5,0L40.5,0z"/></g>',
  '<g class="grad4"><rect x="12.2" y="11.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.4221 40.3536)" /><path d="M40.5,22.6L57.9,40L40.5,57.4L23.1,40L40.5,22.6 M40.5,0l-40,40l40,40l40-40L40.5,0L40.5,0z"/></g>',
  '<g class="grad5"><polygon points="40,80 80,40 40,0 "/><polygon points="40,80 80,40 40,0 "/></g>'
];



/** DEFINITION DU STAGE */
var stage = document.querySelector('.stage'),

    nbClips = 10,
    increase = Math.PI * 2 / nbClips,
    angle = 0,
    x = 0,
    y = 0,
    startX=50, 
    startY=50,
    clipsCache = [];
    dim = 80;

  /* controler la largeur du stage */
    stage.style.width = dim*nbClips + 'px';
    stage.style.height = dim*nbClips + 'px';
    // stage.style.width = 80+'%';
    // stage.style.height = 80+'%';

    
  for( var j = 0; j < nbClips; j++ ) {
      for( var i = 0; i < nbClips; i++ ) {
        var p = new Clip( stage );
        p.setDimensions( dim, dim);
        p.setClass("clip-"+i+'-'+j);
        p.position( dim*i , dim*j );
        //console.log("clip-"+i+'-'+j);

        /* choisir entre 0 et 4 */
        function getRandomInt(max) {
          return (Math.floor(Math.random() * Math.floor(max)));
        }
        indexClip = getRandomInt(6);
        p.svg(g[indexClip]);
        clipsCache.push( p );

        /* suppression des clips pour le texte central*/
        supClips = [];
        if(j == 4 || j == 5){
          if(i <= 7 && i >= 2){
            p.kill();
          }
        }


        
      }
    }

    var texte = document.createElement( 'div' );
    texte.className = 'voeux';

    stage.appendChild(texte);
    texte.innerHTML = '<p><a href="/">Bonne année<br/>2020</a></p>';


