(function($){
  $.fn.reference = function() {
    var i = 1
    $( "body" ).append("<hr><h3 id='reference'>Reference Section</h3>");
    $("#reference").css({"text-align": "center", "color": "Green"});
    this.filter( "a" ).each(function() {
      var link = $( this );
      var href = link.attr("href");
      var info = $( this).data('info');
      link.after(" "+ "<a href="+"#"+i+">" + "<sup id="+i+"b"+">" + "[" + i + "]"+ "</sup>" + "</a>");
      if ( info !== undefined)
        {
      $( "body" ).append("<li id="+i+">"+ "<a href="+"#"+i+"b"+">" + "<sup>"+"[" + i + "]"+"</sup>"+ "</a>" + " "+href+ ":" + " " +info+ "</li>");
        }
        else
          {
      $( "body" ).append("<li id="+i+">"+"<sup>"+"[" + i + "]"+"</sup>"+ " "+href+ ":" + " " + "Description Not Found" + "</li>");
          }

      $("li").css("list-style-type", "none");
      ++i;
    });

    $("sup").hover(
      function() {
      var parents_sibling = $( this).parent().prev('a');
      var data = parents_sibling.data('info');
      if ( data !== undefined)
        {
          $( this ).append( $( "<span>" +data+ "</span>" ) );
        }
    },function() {
      $( this ).find( "span:last" ).remove();
    });

    return this;
  };}(jQuery));

  $( document ).ready(function() {
    $( "a" ).reference();
  });
