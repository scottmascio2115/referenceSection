(function($){
  $.fn.referenceSection = function() {

    function info_dom(info, index) {
      var description = present(info.description) ? 'Description Not Found': info.description;
      var label = present(info.href) ? info.text: info.href;

      var li = $('<li>', { id:index, text: " " + label +': '});
      var dom = li.append(description);
      var a = $('<a>', { href: '#' +index+ 'b'});
      var super_script = $('<sup>', { text: '[' +index+ ']'});

      a.append(super_script);
      dom.prepend(a);

      return dom;
    };

    function info_attachment(info){
      var attachment;

      if ( !present(info)) {
        attachment = $('<h5>', { text: info });
      }
      return attachment;
    };

    function present(val){
      return val === undefined || val === null
    };

    var i = 1

    this.find( ".rs" ).each(function() {
      var aTag = $('<a>', { href: "#"+i });
      var supTag = $('<sup>', { id: i+ "b", text: "[" +i+ "]"});
      aTag.append(supTag);
      $(this).after(aTag);

      info = { href: $(this).attr('href'), description: $( this).data('info'), text: $(this).text()}
      var dom = info_dom(info, i);
      $( "body").append(dom);

      ++i;
    });

    $("sup").hover(
      function() {
      var parents_sibling = $( this).parent().prev();
      var data = parents_sibling.data('info');
      var attachment = info_attachment(data);
      $(this).append(attachment);

    },function() {
      $( this ).find( "h5:last" ).remove();
    });
    return this;
  };}(jQuery));

  $( document ).ready(function() {
    $("body").referenceSection();
  });
