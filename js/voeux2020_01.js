var banner = document.querySelector( '.stage div' ),
    start = 0,
    multiplier = 0;
function sine(){
  multiplier = 50 * Math.sin( start * 2 );
  banner.style.position = 'relative';
  banner.style.top = multiplier * Math.sin( start ) + 80 + 'px';
  start += 0.05;
}
window.setInterval( sine, 1000/30 );