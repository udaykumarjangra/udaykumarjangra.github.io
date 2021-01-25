$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 4);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();
console.log(document.getElementById('project-1'));
document.getElementById('project-1').addEventListener("mouseover",
    function(event)
    {
      document.getElementById('img').style.background="url('../img/codejudge-icon.png')";
      document.getElementById('img').style["background-size"]="cover";
    });
document.getElementById('project-1').addEventListener("mouseout",
    function(event)
    {
      document.getElementById('img').style.background="none";
    });

document.getElementById('project-2').addEventListener("mouseover",
    function(event)
    {
      document.getElementById('img').style.background="url('../img/facemask-icon.jpg')";
      document.getElementById('img').style["background-size"]="cover";
    });
document.getElementById('project-2').addEventListener("mouseout",
    function(event)
    {
      document.getElementById('img').style.background="none";
    });
document.getElementById('project-3').addEventListener("mouseover",
    function(event)
    {
      document.getElementById('img').style.background="url('../img/weather-icon.png')";
      document.getElementById('img').style["background-size"]="cover";
    });
document.getElementById('project-3').addEventListener("mouseout",
    function(event)
    {
      document.getElementById('img').style.background="none";
    });
