console.log("ready")
$(document).ready(function() {
    $('.search-bar form').submit(function(e) {
      e.preventDefault();
      var query = $('input[name="query"]').val();
      if (query !== '') {
        $.get('https://api.npms.io/v2/search?q=' + query, function(data) {
          $('.search-results ul').empty();
          $.each(data.results, function(i, result) {
            $('.search-results ul').append('<li><h3>' + result.package.name + '</h3><p>' + result.package.description + '</p></li>');
          });
          $('.search-results').show();
        });
      }
    });
  });
  