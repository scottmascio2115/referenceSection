(function($){
  $.fn.reference = function() {

    function info_dom(info, index) {
      var description = info.description === undefined ? 'Description Not Found': info.description;
      var href = info.href;

      var li = $('<li>', { id:index, text: " " + href +': '});
      var dom = li.append(description);
      var a = $('<a>', { href: '#' +index+ 'b'});
      var sup = $('<sup>', { text: '[' +index+ ']'});

      a.append(sup);
      dom.prepend(a);

      return dom;
    };

    function info_span(info){
      var span;

      if ( info !== undefined) {
        span = $('<span>', { text: info });
      }
      return span;
    };

    var i = 1

    this.find( "a" ).each(function() {
      var aTag = $('<a>', { href: "#"+i });
      var supTag = $('<sup>', { id: i+ "b", text: "[" +i+ "]"});
      aTag.append(supTag);
      $(this).after(aTag);

      info = { href: $(this).attr("href"), description: $( this).data('info')}
      var dom = info_dom(info, i);
      $( "body").append(dom);

      ++i;
    });

    $("sup").hover(
      function() {
      var parents_sibling = $( this).parent().prev('a');
      var data = parents_sibling.data('info');
      var span = info_span(data);
      $(this).append(span);

    },function() {
      $( this ).find( "span:last" ).remove();
    });
    return this;
  };}(jQuery));

  $( document ).ready(function() {
    $("body").reference();
  });
